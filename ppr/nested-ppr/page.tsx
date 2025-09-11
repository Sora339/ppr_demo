import StaticShell from '../components/StaticShell'
import DynamicContent from '../components/DynamicContent'

export default function NestedPPRPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> 
}) {
  return (
    <StaticShell title="ネストしたPPR実験">
      <div style={{
        padding: '16px',
        backgroundColor: '#e8f5e8',
        borderRadius: '8px',
        border: '2px solid #4caf50',
        marginBottom: '20px'
      }}>
        <h2>🧩 ネストしたコンポーネント構造</h2>
        <p>
          この構造では、<code>StaticShell</code>コンポーネントが静的なレイアウト（ヘッダー、サイドバー、フッター）を提供し、
          <code>DynamicContent</code>コンポーネントが動的な部分をchildrenとして受け取ります。
        </p>
        <ul>
          <li>✨ <strong>静的シェル</strong>: ヘッダー、サイドバー、フッターは即座に表示</li>
          <li>🔄 <strong>動的コンテンツ</strong>: 各セクションが段階的に読み込まれ表示</li>
          <li>🎯 <strong>PPRの効果</strong>: 静的部分と動的部分が分離されて配信</li>
        </ul>
      </div>
      
      <DynamicContent searchParams={searchParams} />
    </StaticShell>
  )
}
