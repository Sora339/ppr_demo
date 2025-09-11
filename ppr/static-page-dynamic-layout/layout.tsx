import { ReactNode } from 'react'
import { cookies, headers } from 'next/headers'

// layout.tsxで動的APIを直接使用
export default async function DynamicLayout({
  children,
}: {
  children: ReactNode
}) {
  // layout.tsxで動的関数を使用
  const cookieStore = await cookies()
  const headersList = await headers()
  
  // 動的データを取得
  const layoutData = {
    userAgent: headersList.get('user-agent')?.slice(0, 50) + '...' || 'Unknown',
    timestamp: new Date().toISOString(),
    sessionInfo: cookieStore.get('session')?.value || 'No session'
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      {/* 動的ヘッダー（layout.tsxで動的API使用） */}
      <header style={{
        padding: '20px',
        backgroundColor: '#dc2626',
        color: 'white',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h1>🔥 Layout.tsxで動的API使用</h1>
        <p>このレイアウトはcookies()とheaders()を直接使用しています</p>
        
        <div style={{ 
          marginTop: '10px',
          padding: '12px',
          backgroundColor: '#991b1b',
          borderRadius: '4px',
          fontSize: '14px'
        }}>
          <p><strong>User-Agent:</strong> {layoutData.userAgent}</p>
          <p><strong>タイムスタンプ:</strong> {layoutData.timestamp}</p>
          <p><strong>セッション:</strong> {layoutData.sessionInfo}</p>
        </div>
        
        <nav style={{ marginTop: '15px' }}>
          <a href="/" style={{ marginRight: '20px', color: '#fecaca' }}>ホーム</a>
          <a href="/static-page-dynamic-layout" style={{ marginRight: '20px', color: '#fecaca' }}>現在のページ</a>
          <a href="/fully-dynamic" style={{ color: '#fecaca' }}>比較用動的ページ</a>
        </nav>
      </header>

      {/* サイドバーも動的情報を含む */}
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '20px' }}>
        <aside style={{
          padding: '16px',
          backgroundColor: '#fef2f2',
          borderRadius: '8px',
          border: '2px solid #dc2626',
          height: 'fit-content'
        }}>
          <h3>🔄 動的サイドバー</h3>
          <p style={{ fontSize: '14px', color: '#7f1d1d' }}>
            このサイドバーもlayout.tsxで動的データを表示
          </p>
          <div style={{
            marginTop: '12px',
            padding: '8px',
            backgroundColor: '#dc2626',
            color: 'white',
            borderRadius: '4px',
            fontSize: '12px'
          }}>
            現在時刻: {new Date().toLocaleString('ja-JP')}
          </div>
        </aside>

        {/* メインコンテンツエリア（静的ページが入る） */}
        <main>
          {children}
        </main>
      </div>

      {/* 動的フッター */}
      <footer style={{
        marginTop: '40px',
        padding: '16px',
        backgroundColor: '#7f1d1d',
        color: 'white',
        textAlign: 'center',
        borderRadius: '8px'
      }}>
        <p>🔥 動的フッター - layout.tsxで生成</p>
        <small>リクエスト時刻: {new Date().toLocaleString('ja-JP')}</small>
      </footer>
    </div>
  )
}
