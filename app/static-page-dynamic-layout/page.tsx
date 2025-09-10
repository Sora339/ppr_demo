// 完全に静的なページ
export default function StaticPageWithDynamicLayout() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>📄 完全に静的なページ</h1>
      <div style={{
        padding: '20px',
        backgroundColor: '#ecfdf5',
        borderRadius: '8px',
        border: '2px solid #10b981'
      }}>
        <h2>静的コンテンツ</h2>
        <p>このページ自体は完全に静的です。</p>
        <ul>
          <li>Dynamic Function（cookies, headers）を使用していません</li>
          <li>非同期処理もありません</li>
          <li>すべてが静的にプリレンダリング可能です</li>
        </ul>
        
        <div style={{ 
          marginTop: '20px',
          padding: '16px',
          backgroundColor: '#10b981',
          color: 'white',
          borderRadius: '6px'
        }}>
          <p>✅ このページコンテンツは完全静的</p>
          <p>しかし、layout.tsxで動的APIを使用しています</p>
        </div>
      </div>

      <div style={{
        marginTop: '20px',
        padding: '16px',
        backgroundColor: '#f3f4f6',
        borderRadius: '8px'
      }}>
        <h3>静的データ</h3>
        <p>ビルド時刻: 2025年9月11日</p>
        <p>バージョン: 1.0.0</p>
        <p>環境: Production</p>
      </div>
    </div>
  )
}
