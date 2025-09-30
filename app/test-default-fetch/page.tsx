import { Suspense } from 'react'

// export const experimental_ppr = false;

// ① ページ本体は静的シェル（ここではデータ取得しない）
export default function Page() {
  return (
    <div style={{ padding: 20 }}>
      <h1>PPR: shell first, data at runtime</h1>
      <Suspense fallback={<p>loading current time…</p>}>
        <Now /> {/* ② 動的領域は必ず Suspense 配下へ */}
      </Suspense>
    </div>
  )
}

// ③ 動的データは Suspense 配下で取得（"use cache" は付けない）
async function Now() {
  const res = await fetch('https://worldtimeapi.org/api/ip')
  const data = await res.json()
  console.log("データ取得されました",data)
  return <p>{data.datetime}</p>
}