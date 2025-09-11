import { Suspense } from 'react'
import { cookies, headers } from 'next/headers'

// 動的なユーザー情報コンポーネント
async function DynamicUserCard() {
  const cookieStore = await cookies()
  const headersList = await headers()
  
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  const userData = {
    name: "山田太郎",
    lastLogin: new Date().toLocaleString('ja-JP'),
    notificationCount: Math.floor(Math.random() * 10) + 1,
    userAgent: headersList.get('user-agent')?.slice(0, 50) + '...' || 'Unknown',
    sessionId: cookieStore.get('session')?.value || 'No session'
  }
  
  return (
    <div style={{
      padding: '16px',
      backgroundColor: '#e3f2fd',
      borderRadius: '8px',
      border: '2px solid #2196f3',
      marginBottom: '20px'
    }}>
      <h3>👤 動的ユーザー情報</h3>
      <p>ユーザー名: {userData.name}</p>
      <p>最終ログイン: {userData.lastLogin}</p>
      <p>未読通知: {userData.notificationCount}件</p>
      <p>User-Agent: {userData.userAgent}</p>
      <p>セッションID: {userData.sessionId}</p>
      <small>（Dynamic Function使用により、動的にレンダリング）</small>
    </div>
  )
}

// 動的な統計情報コンポーネント
async function DynamicStats() {
  const headersList = await headers()
  
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  const stats = {
    visitors: Math.floor(Math.random() * 1000) + 100,
    pageViews: Math.floor(Math.random() * 5000) + 500,
    loadTime: Math.random() * 3 + 1,
    serverTime: new Date().toISOString(),
    requestId: headersList.get('x-request-id') || Math.random().toString(36).substr(2, 9)
  }
  
  return (
    <div style={{
      padding: '16px',
      backgroundColor: '#f3e5f5',
      borderRadius: '8px',
      border: '2px solid #9c27b0',
      marginBottom: '20px'
    }}>
      <h3>📊 動的統計情報</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <div>訪問者数: {stats.visitors}</div>
        <div>ページビュー: {stats.pageViews}</div>
        <div>読み込み時間: {stats.loadTime.toFixed(2)}秒</div>
        <div>リクエストID: {stats.requestId}</div>
      </div>
      <p>サーバー時刻: {stats.serverTime}</p>
      <small>（このデータは動的に生成されます）</small>
    </div>
  )
}

// 動的なお知らせコンポーネント
async function DynamicNotifications() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const notifications = [
    `新しいメッセージが${Math.floor(Math.random() * 5) + 1}件あります`,
    `システムメンテナンスが${Math.floor(Math.random() * 24) + 1}時間後に予定されています`,
    `あなたのプロフィールが${Math.floor(Math.random() * 10) + 1}回閲覧されました`
  ]
  
  return (
    <div style={{
      padding: '16px',
      backgroundColor: '#fff3e0',
      borderRadius: '8px',
      border: '2px solid #ff9800'
    }}>
      <h3>🔔 動的お知らせ</h3>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index} style={{ marginBottom: '8px' }}>
            {notification}
          </li>
        ))}
      </ul>
      <small>（リアルタイムで更新される通知）</small>
    </div>
  )
}

export default function DynamicContent({ searchParams }: { 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> 
}) {
  return (
    <div>
      {/* 動的コンテンツをSuspenseでラップ */}
      <Suspense fallback={
        <div style={{
          padding: '16px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          border: '2px dashed #999',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          <p>🔄 ユーザー情報を読み込み中...</p>
        </div>
      }>
        <DynamicUserCard />
      </Suspense>

      <Suspense fallback={
        <div style={{
          padding: '16px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          border: '2px dashed #999',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          <p>🔄 統計情報を読み込み中...</p>
        </div>
      }>
        <DynamicStats />
      </Suspense>

      <Suspense fallback={
        <div style={{
          padding: '16px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          border: '2px dashed #999',
          textAlign: 'center'
        }}>
          <p>🔄 お知らせを読み込み中...</p>
        </div>
      }>
        <DynamicNotifications />
      </Suspense>
    </div>
  )
}
