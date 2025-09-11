import { unstable_cacheLife as cacheLife } from "next/cache";

// "use cache"を使った静的コンポーネント
export default async function CachedStaticComponent() {
  "use cache";
  
  // キャッシュライフサイクルを指定
  cacheLife("minutes");
  
  // 静的データの取得をシミュレート
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const staticData = {
    title: "キャッシュされた静的コンポーネント",
    content: "このコンポーネントは'use cache'ディレクティブを使用しています",
    timestamp: new Date().toISOString(),
    cacheInfo: {
      strategy: "use cache",
      lifetime: "minutes profile",
      boundary: "Static Rendering境界を作成"
    }
  };
  
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f0f9ff',
      borderRadius: '8px',
      border: '2px solid #0ea5e9',
      margin: '20px 0'
    }}>
      <h3>⚡ {staticData.title}</h3>
      <p>{staticData.content}</p>
      
      <div style={{
        padding: '12px',
        backgroundColor: '#0ea5e9',
        color: 'white',
        borderRadius: '6px',
        marginTop: '16px'
      }}>
        <h4>📊 キャッシュ情報:</h4>
        <p><strong>戦略:</strong> {staticData.cacheInfo.strategy}</p>
        <p><strong>ライフタイム:</strong> {staticData.cacheInfo.lifetime}</p>
        <p><strong>境界:</strong> {staticData.cacheInfo.boundary}</p>
        <p><strong>生成時刻:</strong> {staticData.timestamp}</p>
      </div>
      
      <div style={{
        marginTop: '16px',
        padding: '12px',
        backgroundColor: '#e0f2fe',
        borderRadius: '6px',
        color: '#0c4a6e'
      }}>
        <p>🔍 <strong>特徴:</strong></p>
        <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
          <li>Static Rendering境界を作成</li>
          <li>子孫コンポーネントもStatic Renderingになる</li>
          <li>キャッシュキーは自動で識別される</li>
          <li>Dynamic Renderingコンポーネントをchildrenで受け取り可能</li>
        </ul>
      </div>
    </div>
  );
}
