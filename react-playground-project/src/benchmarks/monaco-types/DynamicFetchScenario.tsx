import { useEffect, useState } from 'react'

type FetchState = {
  loading: boolean
  content: string
  error: string
}

const reactTypeUrl = 'https://unpkg.com/@types/react/index.d.ts'

export default function DynamicFetchScenario() {
  const [state, setState] = useState<FetchState>({
    loading: true,
    content: '',
    error: '',
  })

  useEffect(() => {
    let canceled = false

    const load = async () => {
      try {
        const res = await fetch(reactTypeUrl)
        if (!res.ok) {
          throw new Error(`fetch failed: ${res.status}`)
        }

        const text = await res.text()

        if (!canceled) {
          setState({ loading: false, content: text, error: '' })
        }
      } catch (error) {
        if (!canceled) {
          setState({
            loading: false,
            content: '',
            error: error instanceof Error ? error.message : 'unknown error',
          })
        }
      }
    }

    load()

    return () => {
      canceled = true
    }
  }, [])

  return (
    <main style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>Scenario B: Dynamic Fetch</h1>
      <p>运行时从 CDN 拉取类型定义，不进入首屏 JS bundle。</p>
      <p>source: {reactTypeUrl}</p>
      <p>status: {state.loading ? 'loading...' : state.error ? 'error' : 'loaded'}</p>
      {state.error ? <p style={{ color: '#c62828' }}>{state.error}</p> : null}
      {!state.loading && !state.error ? <p>fetched chars: {state.content.length.toLocaleString()}</p> : null}
    </main>
  )
}
