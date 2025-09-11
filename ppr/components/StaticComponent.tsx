// 完全に静的なコンポーネント
export default function StaticComponent() {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#ecfdf5',
      borderRadius: '8px',
      border: '2px solid #10b981',
      margin: '16px 0'
    }}>
      <h3>📄 Static Component (Children)</h3>
      <p>このコンポーネントは完全に静的です。</p>
      <ul>
        <li>Dynamic Function使用なし</li>
        <li>非同期処理なし</li>
        <li>静的にプリレンダリング可能</li>
      </ul>
      
      <div style={{
        marginTop: '16px',
        padding: '12px',
        backgroundColor: '#10b981',
        color: 'white',
        borderRadius: '4px'
      }}>
        <p>✅ この内容は動的コンポーネントのchildrenとして渡されます</p>
        <p>静的コンテンツが動的コンポーネント内でどう扱われるか検証中...</p>
      </div>

      <div style={{
        marginTop: '12px',
        padding: '12px',
        backgroundColor: '#f3f4f6',
        borderRadius: '4px'
      }}>
        <h4>静的データ例:</h4>
        <p>ビルド時刻: 2025年9月12日</p>
        <p>バージョン: 1.0.0</p>
        <p>コンポーネントタイプ: Static Children</p>
      </div>
    </div>
  )
}
