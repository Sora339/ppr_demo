import { ReactNode } from 'react'
import { cookies, headers } from 'next/headers'

interface DynamicIOComponentProps {
  children?: ReactNode
}

// Dynamic IOを使った動的コンポーネント（Suspense境界内で使用）
export default async function DynamicIOComponent({ children }: DynamicIOComponentProps) {
  // 動的API使用 - Suspense境界内でのみ許可される
  const cookieStore = await cookies()
  const headersList = await headers()
  
  // 動的処理をシミュレート
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  const dynamicData = {
    timestamp: new Date().toISOString(),
    userAgent: headersList.get('user-agent')?.slice(0, 50) + '...' || 'Unknown',
    sessionInfo: cookieStore.get('session')?.value || 'No session found',
    randomValue: Math.floor(Math.random() * 1000),
    serverTime: new Date().toLocaleString('ja-JP'),
    requestId: Math.random().toString(36).substring(7)
  }
  
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#fef3c7',
      borderRadius: '8px',
      border: '2px solid #f59e0b',
      margin: '20px 0'
    }}>
      <h3>🔄 Dynamic IO Component</h3>
      <p>このコンポーネントはDynamic IOパターンを使用しています（Suspense境界内）</p>
      
      <div style={{
        padding: '16px',
        backgroundColor: '#f59e0b',
        color: 'white',
        borderRadius: '6px',
        marginBottom: '20px'
      }}>
        <h4>🔥 Dynamic Rendering データ:</h4>
        <p><strong>リクエストID:</strong> {dynamicData.requestId}</p>
        <p><strong>タイムスタンプ:</strong> {dynamicData.timestamp}</p>
        <p><strong>User-Agent:</strong> {dynamicData.userAgent}</p>
        <p><strong>セッション:</strong> {dynamicData.sessionInfo}</p>
        <p><strong>ランダム値:</strong> {dynamicData.randomValue}</p>
        <p><strong>サーバー時刻:</strong> {dynamicData.serverTime}</p>
      </div>

      {/* Static Renderingなchildrenエリア */}
      {children && (
        <div style={{
          border: '3px dashed #f59e0b',
          borderRadius: '8px',
          padding: '16px',
          backgroundColor: '#fffbeb'
        }}>
          <h4>📦 Static Rendering Children Area</h4>
          <p style={{ color: '#92400e', marginBottom: '16px' }}>
            以下は"use cache"を使ったStatic Renderingコンテンツです：
          </p>
          {children}
        </div>
      )}

      <div style={{
        marginTop: '20px',
        padding: '12px',
        backgroundColor: '#d97706',
        color: 'white',
        borderRadius: '4px'
      }}>
        <p>⚡ Dynamic IO特徴:</p>
        <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
          <li>Suspense境界内でDynamic Renderingを実行</li>
          <li>Static Renderingコンポーネントをchildrenで受け取り可能</li>
          <li>明示的なRendering境界の分離</li>
        </ul>
      </div>
    </div>
  )
}
