import { ReactNode } from 'react'

export default function FullyDynamicLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      {/* 静的ヘッダー */}
      <header style={{
        padding: '20px',
        backgroundColor: '#1e40af',
        color: 'white',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h1>🧪 Layout.tsx実験</h1>
        <p>このヘッダーは静的にプリレンダリングされます</p>
        <nav style={{ marginTop: '10px' }}>
          <a href="/" style={{ marginRight: '20px', color: '#bfdbfe' }}>ホーム</a>
          <a href="/ppr-experiment" style={{ marginRight: '20px', color: '#bfdbfe' }}>PPR実験</a>
          <a href="/nested-ppr" style={{ marginRight: '20px', color: '#bfdbfe' }}>ネスト実験</a>
          <a href="/fully-dynamic" style={{ color: '#bfdbfe' }}>完全動的</a>
        </nav>
      </header>

      {/* 静的サイドバー */}
      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '20px' }}>
        <aside style={{
          padding: '16px',
          backgroundColor: '#f3f4f6',
          borderRadius: '8px',
          border: '2px solid #10b981',
          height: 'fit-content'
        }}>
          <h3>📋 静的サイドバー</h3>
          <p style={{ fontSize: '14px', color: '#6b7280' }}>
            このサイドバーはlayout.tsxで定義されているため、
            静的にプリレンダリングされます。
          </p>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '16px' }}>
            <li style={{ marginBottom: '8px' }}>📄 静的メニュー1</li>
            <li style={{ marginBottom: '8px' }}>📄 静的メニュー2</li>
            <li style={{ marginBottom: '8px' }}>📄 静的メニュー3</li>
          </ul>
        </aside>

        {/* メインコンテンツエリア（完全に動的なページが入る） */}
        <main>
          {children}
        </main>
      </div>

      {/* 静的フッター */}
      <footer style={{
        marginTop: '40px',
        padding: '16px',
        backgroundColor: '#374151',
        color: 'white',
        textAlign: 'center',
        borderRadius: '8px'
      }}>
        <p>🏁 静的フッター - layout.tsxで定義</p>
        <small>このフッターも静的にプリレンダリングされます</small>
      </footer>
    </div>
  )
}
