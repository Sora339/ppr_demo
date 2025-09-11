import { Suspense } from 'react'
import DynamicIOComponent from './components/DynamicIOComponent'
import CachedStaticComponent from './components/CachedStaticComponent'

export default function DynamicIOExperimentPage() {
  return (
    <div>
      <h1>🚀 Dynamic IO実験</h1>
      <p>Dynamic IOと"use cache"ディレクティブを使ったPPRの新しいアプローチです。</p>
      
      <div style={{
        backgroundColor: '#f0f9ff',
        padding: '16px',
        borderRadius: '8px',
        border: '1px solid #0ea5e9',
        marginBottom: '20px'
      }}>
        <h2>🔍 Dynamic IOの特徴:</h2>
        <ul>
          <li><strong>明示的な境界:</strong> <code>"use cache"</code>でStatic Rendering境界を作成</li>
          <li><strong>Suspense境界:</strong> Dynamic Renderingは必ずSuspense内で実行</li>
          <li><strong>柔軟な組み合わせ:</strong> StaticとDynamicを自由に組み合わせ可能</li>
          <li><strong>高いパフォーマンス:</strong> 必要な部分のみを動的レンダリング</li>
        </ul>
      </div>

      {/* パターン1: "use cache"を使った完全静的コンポーネント */}
      <section style={{ marginBottom: '40px' }}>
        <h2>⚡ パターン1: "use cache"による静的境界</h2>
        <p>このコンポーネントは"use cache"ディレクティブでStatic Rendering境界を作成しています。</p>
        
        <CachedStaticComponent />
      </section>

      {/* パターン2: Dynamic IO + Static children */}
      <section style={{ marginBottom: '40px' }}>
        <h2>🔄 パターン2: Dynamic IO + Static Children</h2>
        <p>Suspense境界内のDynamic Renderingコンポーネントが、"use cache"による静的コンポーネントをchildrenとして受け取ります。</p>
        
        <Suspense fallback={
          <div style={{
            padding: '20px',
            backgroundColor: '#fee2e2',
            borderRadius: '8px',
            border: '2px dashed #ef4444',
            textAlign: 'center'
          }}>
            <p>⏳ Dynamic IOコンポーネントを読み込み中...</p>
            <p>（静的childrenは既にレンダリング済み）</p>
          </div>
        }>
          <DynamicIOComponent>
            <CachedStaticComponent />
          </DynamicIOComponent>
        </Suspense>
      </section>

      {/* パターン3: 複数の静的境界 */}
      <section style={{ marginBottom: '40px' }}>
        <h2>🏗️ パターン3: 複数の静的境界</h2>
        <p>複数の"use cache"コンポーネントが独立してキャッシュされます。</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <CachedStaticComponent />
          <CachedStaticComponent />
        </div>
      </section>

      {/* パターン4: 混在パターン */}
      <section>
        <h2>🎯 パターン4: 静的+動的の混在</h2>
        <p>ページ内で静的コンテンツと動的コンテンツが適切に分離されています。</p>
        
        {/* 静的部分 */}
        <CachedStaticComponent />
        
        {/* 動的部分 */}
        <Suspense fallback={
          <div style={{
            padding: '16px',
            backgroundColor: '#fef3c7',
            borderRadius: '6px',
            border: '1px dashed #f59e0b',
            textAlign: 'center'
          }}>
            ⏳ 動的コンテンツ読み込み中...
          </div>
        }>
          <DynamicIOComponent />
        </Suspense>
      </section>

      {/* 説明セクション */}
      <section style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#f0fdf4',
        border: '1px solid #22c55e',
        borderRadius: '8px'
      }}>
        <h2>📊 期待される結果:</h2>
        <ul>
          <li><strong>明確な境界:</strong> "use cache"による明示的なStatic Rendering境界</li>
          <li><strong>パフォーマンス:</strong> 静的部分は即座に表示、動的部分はストリーミング</li>
          <li><strong>キャッシュ効率:</strong> 静的コンポーネントは自動でキャッシュ</li>
          <li><strong>開発体験:</strong> 混乱のない明確なレンダリング戦略</li>
        </ul>
      </section>
    </div>
  )
}
