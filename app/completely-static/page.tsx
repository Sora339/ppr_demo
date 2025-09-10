// 完全に静的なページ（静的layoutも使用）
export default function CompletelyStaticPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>📄 完全に静的なページ（静的Layout使用）</h1>
      <div style={{
        padding: '20px',
        backgroundColor: '#f0f9ff',
        borderRadius: '8px',
        border: '2px solid #0ea5e9'
      }}>
        <h2>静的コンテンツ</h2>
        <p>このページもlayout.tsxも完全に静的です。</p>
        <ul>
          <li>ページ: Dynamic Function使用なし</li>
          <li>Layout: Dynamic Function使用なし</li>
          <li>完全に静的にプリレンダリング可能</li>
        </ul>
        
        <div style={{ 
          marginTop: '20px',
          padding: '16px',
          backgroundColor: '#0ea5e9',
          color: 'white',
          borderRadius: '6px'
        }}>
          <p>✅ ページもLayoutも完全静的</p>
          <p>これは○ (Static)として認識されるはずです</p>
        </div>
      </div>
    </div>
  )
}
