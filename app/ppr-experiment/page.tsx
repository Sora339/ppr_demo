import { Suspense } from 'react'
import { cookies, headers } from 'next/headers'

// 動的なコンポーネント（Dynamic Functionを使用）
async function DynamicUserInfo() {
  // Dynamic Functionを使用してページを動的にする
  const cookieStore = await cookies()
  const headersList = await headers()
  
  // 2秒待機して動的コンテンツを表示
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  const userData = {
    name: "山田太郎",
    lastLogin: new Date().toLocaleString('ja-JP'),
    notificationCount: Math.floor(Math.random() * 10) + 1,
    userAgent: headersList.get('user-agent')?.slice(0, 50) + '...' || 'Unknown',
    sessionId: cookieStore.get('session')?.value || 'No session'
  }
  
  return (
    <div className="dynamic-content" style={{
      padding: '16px',
      backgroundColor: '#e3f2fd',
      borderRadius: '8px',
      border: '2px solid #2196f3'
    }}>
      <h3>🔄 動的コンテンツ（Dynamic Function使用）</h3>
      <p>ユーザー名: {userData.name}</p>
      <p>最終ログイン: {userData.lastLogin}</p>
      <p>未読通知: {userData.notificationCount}件</p>
      <p>User-Agent: {userData.userAgent}</p>
      <p>セッションID: {userData.sessionId}</p>
      <small>（Dynamic Function使用により、このセクションは動的にレンダリングされます）</small>
    </div>
  )
}

// 別の動的コンポーネント（searchParamsを使用）
async function DynamicWeather({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const params = await searchParams
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const weather = {
    temperature: Math.floor(Math.random() * 20) + 15,
    condition: ['晴れ', '曇り', '雨'][Math.floor(Math.random() * 3)],
    location: params.location || '東京',
    timestamp: new Date().toISOString()
  }
  
  return (
    <div className="dynamic-content" style={{
      padding: '16px',
      backgroundColor: '#f3e5f5',
      borderRadius: '8px',
      border: '2px solid #9c27b0'
    }}>
      <h3>🌤️ 天気情報（searchParams使用）</h3>
      <p>場所: {weather.location}</p>
      <p>気温: {weather.temperature}°C</p>
      <p>天候: {weather.condition}</p>
      <p>取得時刻: {weather.timestamp}</p>
      <small>（searchParamsにより動的にレンダリングされます）</small>
    </div>
  )
}

export default function Page({ 
  searchParams 
}: { 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> 
}) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* 静的シェル - 即座に表示される */}
      <header style={{
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        marginBottom: '20px',
        border: '2px solid #666'
      }}>
        <h1>⚡ PPR実験ページ</h1>
        <p>このページはNext.js 15のPartial Prerenderingを使用しています</p>
        <nav style={{ marginTop: '10px' }}>
          <a href="/" style={{ marginRight: '20px', color: '#1976d2' }}>ホーム</a>
          <a href="/about" style={{ marginRight: '20px', color: '#1976d2' }}>About</a>
          <a href="/contact" style={{ color: '#1976d2' }}>Contact</a>
        </nav>
      </header>

      {/* 静的コンテンツ */}
      <section style={{
        padding: '16px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        marginBottom: '20px',
        border: '2px solid #4caf50'
      }}>
        <h2>📄 静的コンテンツ</h2>
        <p>このセクションは静的にプリレンダリングされ、即座に表示されます。</p>
        <ul>
          <li>高速な初期表示</li>
          <li>SEOに優しい</li>
          <li>キャッシュ効率が良い</li>
        </ul>
      </section>

      {/* 動的コンテンツ（Suspenseでラップ） */}
      <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: '1fr 1fr' }}>
        <Suspense fallback={
          <div style={{
            padding: '16px',
            backgroundColor: '#fff3e0',
            borderRadius: '8px',
            border: '2px dashed #ff9800',
            textAlign: 'center'
          }}>
            <p>🔄 ユーザー情報を読み込み中...</p>
          </div>
        }>
          <DynamicUserInfo />
        </Suspense>

        <Suspense fallback={
          <div style={{
            padding: '16px',
            backgroundColor: '#fff3e0',
            borderRadius: '8px',
            border: '2px dashed #ff9800',
            textAlign: 'center'
          }}>
            <p>🔄 天気情報を読み込み中...</p>
          </div>
        }>
          <DynamicWeather searchParams={searchParams} />
        </Suspense>
      </div>

      {/* 追加の静的コンテンツ */}
      <footer style={{
        marginTop: '30px',
        padding: '16px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        textAlign: 'center',
        border: '2px solid #666'
      }}>
        <p>🏁 フッター（静的コンテンツ）</p>
        <small>© 2025 PPR Demo - すべての権利を保有</small>
      </footer>
    </div>
  )
}