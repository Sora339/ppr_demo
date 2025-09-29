import React from 'react'

export default async function TestNoStoreFetchPage() {
  // explicit no-store (should be treated as dynamic)
  const res = await fetch('https://worldtimeapi.org/api/ip', { cache: 'no-store' })
  const data = await res.json()
  const datetime = data?.datetime ?? 'no-time'

  return (
    <div style={{ padding: 20 }}>
      <h1>Test: fetch with cache: 'no-store'</h1>
      <p>fetched datetime: <code>{datetime}</code></p>
      <p>Note: this route should be dynamic and not prerendered at build time.</p>
    </div>
  )
}
