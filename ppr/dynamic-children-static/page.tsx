import { Suspense } from 'react'
import DynamicComponent from '../components/DynamicComponent'
import StaticComponent from '../components/StaticComponent'

export default function DynamicWithStaticChildrenPage() {
  return (
    <div>
      <h1>🧪 PPR実験: 動的コンポーネント + 静的children</h1>
      <p>DynamicComponentのchildrenとしてStaticComponentを渡すテストです。</p>
      
      <div style={{
        backgroundColor: '#f0f9ff',
        padding: '16px',
        borderRadius: '8px',
        border: '1px solid #0ea5e9',
        marginBottom: '20px'
      }}>
        <h2>🔍 検証内容:</h2>
        <ul>
          <li>動的コンポーネント（cookies, headers使用）がchildrenを受け取る</li>
          <li>静的コンポーネントがchildrenとして渡される</li>
          <li>PPRがこの構造をどう認識するか</li>
          <li>Suspenseでラップした場合の動作</li>
        </ul>
      </div>

      {/* パターン1: Suspenseありの動的コンポーネント + 静的children */}
      <section style={{ marginBottom: '40px' }}>
        <h2>📦 パターン1: Suspense + Dynamic + Static Children</h2>
        <Suspense fallback={
          <div style={{
            padding: '20px',
            backgroundColor: '#fee2e2',
            borderRadius: '8px',
            border: '2px dashed #ef4444',
            textAlign: 'center'
          }}>
            <p>⏳ 動的コンポーネントを読み込み中...</p>
            <p>（静的childrenは事前レンダリング可能？）</p>
          </div>
        }>
          <DynamicComponent>
            <StaticComponent />
          </DynamicComponent>
        </Suspense>
      </section>

      {/* パターン2: Suspenseなしでの比較 */}
      <section>
        <h2>🚨 パターン2: Suspenseなし（比較用）</h2>
        <p style={{ 
          color: '#dc2626', 
          fontWeight: 'bold',
          backgroundColor: '#fef2f2',
          padding: '12px',
          borderRadius: '6px',
          border: '1px solid #fca5a5'
        }}>
          ⚠️ このパターンではページ全体が動的になる可能性があります
        </p>
        
        {/* コメントアウトして安全に */}
        <div style={{
          padding: '16px',
          backgroundColor: '#f9fafb',
          border: '1px dashed #d1d5db',
          borderRadius: '8px',
          color: '#6b7280'
        }}>
          <p>💡 このパターンは意図的にコメントアウトしています</p>
          <p>必要に応じて後で有効化できます</p>
          <pre style={{ fontSize: '14px', marginTop: '10px' }}>
{`{/* 
<DynamicComponent>
  <StaticComponent />
</DynamicComponent>
*/}`}
          </pre>
        </div>
      </section>

      {/* 静的情報部分 */}
      <section style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#f0fdf4',
        border: '1px solid #22c55e',
        borderRadius: '8px'
      }}>
        <h2>📊 期待される結果:</h2>
        <ul>
          <li><strong>PPR適用:</strong> StaticComponentは事前レンダリング</li>
          <li><strong>動的部分:</strong> DynamicComponentの動的データのみストリーミング</li>
          <li><strong>ビルド結果:</strong> ◐ (Partial Prerender) として認識</li>
          <li><strong>パフォーマンス:</strong> 静的childrenは即座に表示</li>
        </ul>
      </section>
    </div>
  )
}
