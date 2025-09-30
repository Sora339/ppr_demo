# Next.js PPR・CacheComponents調査用リポジトリ

## CacheComponentsについて

Next.jsには、「本番ビルドでは、**そのルートが静的にプリレンダー可能(動的APIがない)と判定された場合に限り**、**ビルド中に一度だけ `fetch` が走って静的出力を作る**挙動」があるが、Next.js15からは、デフォルトでフェッチしたデータのキャッシュを持たなくなったため、ここで取得されたデータ自体は再利用されず、無駄が生まれてしまっている。`CacheComponents`は、ビルド時のデータ取得を明示的に行わなくすることで、この無駄をなくして、ビルドを最適化することができる。

注１：Next.js 15以降の、「`fetch` はデフォルトで キャッシュなし」は、実際には`auto`であり、キャッシュなしだからと言って必ず毎回リクエストされるわけではない。

- **ルートが静的に最適化できると判定された場合**：
    - ビルド時または初回アクセス時に **一度だけ fetch を実行**
    - 生成された出力（HTML/RSC）が **Full Route Cache に保存**される
    - → 以降はそのキャッシュ済み出力が返る（SSG 的挙動）
- **動的要素があると判定された場合**：
    - `auto` の fetch も動的に実行され、毎リクエストで走る（SSR 的挙動）

注２：明示的に `cache: 'no-store'` を付けた `fetch` は、それ自体が動的APIsになり、ビルド時ではなく**毎リクエストで取得**（= プリレンダーから外れる）になります。そのため、すべての `fetch` に `cache: 'no-store'` を明示すれば、Cached Componentsを導入したのと同じことになる。

注３：`cacheComponents` 有効時は、「**毎リクエストで読むデータは Suspense 配下に置け**」というルールがあるため、`cacheComponents`でビルド時に`fetch`が走らなくなったかを確認するには、PPRの構造のページを作って比較する必要がある。

注４：`”use cache”`ディレクティブを用いると、その範囲は静的エクスポートとなり、レンダリング時にfetchが走るようになる。

注５：`cacheComponents` 有効時は、一緒にpprも有効になるが、pprだけ有効にした場合は、{cache: "no-store"}を明示しないと、PPRのページにならない。(Staticになり、fetchがビルド時に走る。)

ただ、`cacheComponents` 有効時は、{cache: "no-store"}を明示しなくても、PPRのページになる。

つまり、`cacheComponents` にはpprだけではできないこととして、{cache: "no-store"}明示のないfetchしか無いページでもPPRにすることができる。

注６：`cacheComponents` 有効時もしくは`ppr: true;`のときは、`export const experimental_ppr = false;`は効かない(`ppr: “incremental”`じゃないといけない)