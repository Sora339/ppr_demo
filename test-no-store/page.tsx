export default async function TestNoStoreFetchPage() {
  "use cache"
  try {
    const res = await fetch('https://worldtimeapi.org/api/ip', { cache: 'no-store' })
    if (!res.ok) throw new Error('bad response')
    const data = await res.json()
    const datetime = data?.datetime ?? 'no-time'
    return (
      <div style={{ padding: 20 }}>
        <h1>Test: fetch with cache: 'no-store'</h1>
        <p>fetched datetime: <code>{datetime}</code></p>
        <p>Note: this route should be dynamic and not prerendered at build time.</p>
      </div>
    )
  } catch (e) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Test: fetch with cache: 'no-store'</h1>
        <p>fetch failed or timed out; treating as dynamic route.</p>
      </div>
    )
  }
}
