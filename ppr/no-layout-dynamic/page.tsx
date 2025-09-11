import { cookies, headers } from 'next/headers'

// layout.tsxなしの完全動的ページ
export default async function NoLayoutDynamicPage() {
  const cookieStore = await cookies()
  const headersList = await headers()
  
  await new Promise(resolve => setTimeout(resolve, 800))
  
  const dynamicData = {
    timestamp: new Date().toISOString(),
    userAgent: headersList.get('user-agent')?.slice(0, 80) + '...',
    sessionId: cookieStore.get('sessionId')?.value || 'none',
    randomNumber: Math.floor(Math.random() * 1000)
  }
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* すべてが動的 */}
      <header style={{
        padding: '20px',
        backgroundColor: '#dc2626',
        color: 'white',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h1>🚫 Layout.tsx なし + 完全動的</h1>
        <p>このページはlayout.tsxを使わず、すべてが動的です</p>
        <nav style={{ marginTop: '10px' }}>
          <a href="/" style={{ marginRight: '20px', color: '#fecaca' }}>ホーム</a>
          <a href="/fully-dynamic" style={{ marginRight: '20px', color: '#fecaca' }}>Layout.tsx版</a>
          <a href="/no-layout-dynamic" style={{ color: '#fecaca' }}>Layout.tsxなし版</a>
        </nav>
      </header>

      <div style={{
        padding: '20px',
        backgroundColor: '#fef2f2',
        borderRadius: '8px',
        border: '2px solid #dc2626'
      }}>
        <h2>完全動的データ</h2>
        <p><strong>タイムスタンプ:</strong> {dynamicData.timestamp}</p>
        <p><strong>User-Agent:</strong> {dynamicData.userAgent}</p>
        <p><strong>セッションID:</strong> {dynamicData.sessionId}</p>
        <p><strong>ランダム数:</strong> {dynamicData.randomNumber}</p>

        <div style={{ 
          marginTop: '20px',
          padding: '16px',
          backgroundColor: '#991b1b',
          color: 'white',
          borderRadius: '6px'
        }}>
          <p>❌ このページは完全に動的として認識されるはずです</p>
          <p>layout.tsxによる静的シェルがないため</p>
        </div>
      </div>

      <footer style={{
        marginTop: '40px',
        padding: '16px',
        backgroundColor: '#4b5563',
        color: 'white',
        textAlign: 'center',
        borderRadius: '8px'
      }}>
        <p>このフッターも動的に生成されます</p>
        <small>現在時刻: {new Date().toLocaleString('ja-JP')}</small>
      </footer>
    </div>
  )
}
