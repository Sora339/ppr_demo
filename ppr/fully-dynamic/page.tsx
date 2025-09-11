import { cookies, headers } from 'next/headers'

// このページは完全に動的な要素のみ
export default async function FullyDynamicPage() {
  // ページレベルで動的関数を使用
  const cookieStore = await cookies()
  const headersList = await headers()
  
  // 動的データの取得をシミュレート
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const dynamicData = {
    timestamp: new Date().toISOString(),
    userAgent: headersList.get('user-agent')?.slice(0, 100) + '...',
    sessionId: cookieStore.get('sessionId')?.value || 'none',
    randomNumber: Math.floor(Math.random() * 1000),
    serverTime: new Date().toLocaleString('ja-JP')
  }
  
  return (
    <div style={{ padding: '20px' }}>
      <h1>🔄 完全動的ページ</h1>
      <div style={{
        padding: '20px',
        backgroundColor: '#fef3c7',
        borderRadius: '8px',
        border: '2px solid #f59e0b'
      }}>
        <h2>すべてが動的な要素</h2>
        <p><strong>タイムスタンプ:</strong> {dynamicData.timestamp}</p>
        <p><strong>User-Agent:</strong> {dynamicData.userAgent}</p>
        <p><strong>セッションID:</strong> {dynamicData.sessionId}</p>
        <p><strong>ランダム数:</strong> {dynamicData.randomNumber}</p>
        <p><strong>サーバー時刻:</strong> {dynamicData.serverTime}</p>
        
        <div style={{ 
          marginTop: '20px',
          padding: '16px',
          backgroundColor: '#dc2626',
          color: 'white',
          borderRadius: '6px'
        }}>
          <p>⚠️ このページはページレベルで動的関数を使用しています</p>
          <p>通常であれば完全に動的ページとして認識されるはずです</p>
        </div>
      </div>
    </div>
  )
}
