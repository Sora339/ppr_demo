import { ReactNode } from 'react'
import { cookies, headers } from 'next/headers'

interface DynamicComponentProps {
  children: ReactNode
}

// 動的コンポーネント（childrenとして静的コンポーネントを受け取る）
export default async function DynamicComponent({ children }: DynamicComponentProps) {
  // 動的API使用
  const cookieStore = await cookies()
  const headersList = await headers()
  
  // 2秒待機して動的処理をシミュレート
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  const dynamicData = {
    timestamp: new Date().toISOString(),
    userAgent: headersList.get('user-agent')?.slice(0, 60) + '...' || 'Unknown',
    sessionInfo: cookieStore.get('session')?.value || 'No session',
    randomValue: Math.floor(Math.random() * 1000),
    serverTime: new Date().toLocaleString('ja-JP')
  }
  
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#fef3c7',
      borderRadius: '8px',
      border: '2px solid #f59e0b',
      margin: '20px 0'
    }}>
      <h2>🔄 Dynamic Component (Parent)</h2>
      <p>このコンポーネントは動的API（cookies, headers）を使用しています。</p>
      
      {/* 動的データ表示 */}
      <div style={{
        padding: '16px',
        backgroundColor: '#f59e0b',
        color: 'white',
        borderRadius: '6px',
        marginBottom: '20px'
      }}>
        <h3>動的データ:</h3>
        <p><strong>タイムスタンプ:</strong> {dynamicData.timestamp}</p>
        <p><strong>User-Agent:</strong> {dynamicData.userAgent}</p>
        <p><strong>セッション:</strong> {dynamicData.sessionInfo}</p>
        <p><strong>ランダム値:</strong> {dynamicData.randomValue}</p>
        <p><strong>サーバー時刻:</strong> {dynamicData.serverTime}</p>
      </div>

      {/* ここに静的なchildrenが入る */}
      <div style={{
        border: '3px dashed #f59e0b',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: '#fffbeb'
      }}>
        <h3>📦 Children Area (静的コンテンツが入る場所)</h3>
        <p style={{ color: '#92400e', marginBottom: '16px' }}>
          以下は動的コンポーネントのchildren として渡された静的コンテンツです：
        </p>
        {children}
      </div>

      {/* 追加の動的情報 */}
      <div style={{
        marginTop: '20px',
        padding: '12px',
        backgroundColor: '#d97706',
        color: 'white',
        borderRadius: '4px'
      }}>
        <p>🔄 この部分も動的に生成されています</p>
        <p>処理完了時刻: {new Date().toLocaleTimeString('ja-JP')}</p>
      </div>
    </div>
  )
}
