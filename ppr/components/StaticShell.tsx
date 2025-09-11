import { ReactNode, Suspense } from 'react'
import { cookies, headers } from 'next/headers'

// 動的なユーザー状態コンポーネント
async function DynamicUserStatus() {
  const cookieStore = await cookies()
  const headersList = await headers()
  
  // 1秒待機してシミュレート
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const userAgent = headersList.get('user-agent')?.split(' ')[0] || 'Unknown'
  const sessionData = {
    browser: userAgent,
    lastVisit: new Date().toLocaleString('ja-JP'),
    isLoggedIn: cookieStore.get('auth')?.value ? true : false
  }
  
  return (
    <div style={{
      padding: '8px 12px',
      backgroundColor: '#065f46',
      color: 'white',
      borderRadius: '4px',
      fontSize: '12px',
      marginTop: '8px'
    }}>
      🔄 {sessionData.browser} | {sessionData.lastVisit}
    </div>
  )
}

// 動的な通知コンポーネント
async function DynamicNotifications() {
  await new Promise(resolve => setTimeout(resolve, 800))
  
  const notifications = Math.floor(Math.random() * 5) + 1
  
  return (
    <div style={{
      padding: '8px 12px',
      backgroundColor: '#dc2626',
      color: 'white',
      borderRadius: '4px',
      fontSize: '12px',
      marginTop: '8px'
    }}>
      🔔 {notifications}件の新着通知
    </div>
  )
}

interface StaticShellProps {
  children: ReactNode
  title?: string
}

export default function StaticShell({ children, title = "PPR実験ページ" }: StaticShellProps) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* 動的要素を含むヘッダー */}
      <header style={{
        padding: '20px',
        backgroundColor: '#2563eb',
        color: 'white',
        borderRadius: '8px',
        marginBottom: '20px',
        border: '2px solid #1d4ed8'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1>⚡ {title}</h1>
            <p>静的シェル（一部動的要素含む）- PPR実験</p>
            <nav style={{ marginTop: '10px' }}>
              <a href="/" style={{ marginRight: '20px', color: '#bfdbfe' }}>ホーム</a>
              <a href="/ppr-experiment" style={{ marginRight: '20px', color: '#bfdbfe' }}>PPR実験</a>
              <a href="/nested-ppr" style={{ color: '#bfdbfe' }}>ネスト実験</a>
            </nav>
          </div>
          
          {/* 動的ユーザー状態 */}
          <div style={{ minWidth: '150px' }}>
            <div style={{ fontSize: '14px', marginBottom: '4px' }}>ユーザー状態:</div>
            <Suspense fallback={
              <div style={{
                padding: '8px 12px',
                backgroundColor: '#1f2937',
                color: '#9ca3af',
                borderRadius: '4px',
                fontSize: '12px'
              }}>
                🔄 読み込み中...
              </div>
            }>
              <DynamicUserStatus />
            </Suspense>
          </div>
        </div>
      </header>

      {/* 一部動的要素を含むサイドバー */}
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '20px' }}>
        <aside style={{
          padding: '16px',
          backgroundColor: '#f3f4f6',
          borderRadius: '8px',
          border: '2px solid #4caf50',
          height: 'fit-content'
        }}>
          <h3>📋 サイドバー</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>📄 静的コンテンツ</li>
            <li style={{ marginBottom: '10px' }}>🔧 設定</li>
            <li style={{ marginBottom: '10px' }}>📊 統計</li>
            <li style={{ marginBottom: '10px' }}>❓ ヘルプ</li>
          </ul>
          <small>（基本構造は静的、通知は動的）</small>
          
          {/* 動的通知エリア */}
          <div style={{ 
            marginTop: '16px', 
            padding: '12px', 
            backgroundColor: '#e5e7eb', 
            borderRadius: '6px' 
          }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>📢 通知</h4>
            <Suspense fallback={
              <div style={{
                padding: '8px 12px',
                backgroundColor: '#d1d5db',
                color: '#6b7280',
                borderRadius: '4px',
                fontSize: '12px'
              }}>
                🔄 通知を読み込み中...
              </div>
            }>
              <DynamicNotifications />
            </Suspense>
          </div>
        </aside>

        {/* メインコンテンツエリア（childrenが入る） */}
        <main>
          {children}
        </main>
      </div>

      {/* 静的フッター */}
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
