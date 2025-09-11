import { ReactNode } from 'react'

// 完全に静的なlayout.tsx
export default function StaticLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      {/* 静的ヘッダー */}
      <header style={{
        padding: '20px',
        backgroundColor: '#0ea5e9',
        color: 'white',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h1>📘 完全静的Layout.tsx</h1>
        <p>このレイアウトは動的APIを一切使用していません</p>
        
        <nav style={{ marginTop: '15px' }}>
          <a href="/" style={{ marginRight: '20px', color: '#bae6fd' }}>ホーム</a>
          <a href="/completely-static" style={{ marginRight: '20px', color: '#bae6fd' }}>現在のページ</a>
          <a href="/static-page-dynamic-layout" style={{ color: '#bae6fd' }}>比較用（動的Layout）</a>
        </nav>
      </header>

      {/* 静的サイドバー */}
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '20px' }}>
        <aside style={{
          padding: '16px',
          backgroundColor: '#f0f9ff',
          borderRadius: '8px',
          border: '2px solid #0ea5e9',
          height: 'fit-content'
        }}>
          <h3>📋 静的サイドバー</h3>
          <p style={{ fontSize: '14px', color: '#0c4a6e' }}>
            このサイドバーは完全に静的です
          </p>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '12px' }}>
            <li style={{ marginBottom: '8px' }}>📄 静的メニュー1</li>
            <li style={{ marginBottom: '8px' }}>📄 静的メニュー2</li>
            <li style={{ marginBottom: '8px' }}>📄 静的メニュー3</li>
          </ul>
        </aside>

        {/* メインコンテンツエリア */}
        <main>
          {children}
        </main>
      </div>

      {/* 静的フッター */}
      <footer style={{
        marginTop: '40px',
        padding: '16px',
        backgroundColor: '#075985',
        color: 'white',
        textAlign: 'center',
        borderRadius: '8px'
      }}>
        <p>📘 静的フッター - layout.tsxで定義</p>
        <small>© 2025 完全静的サイト</small>
      </footer>
    </div>
  )
}
