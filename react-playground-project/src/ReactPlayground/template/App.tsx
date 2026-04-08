import { Profiler, useEffect, useRef, useState, useCallback } from 'react'
import type { ProfilerOnRenderCallback } from 'react'
import { create } from 'zustand'
import './App.css'

const NODE_SIZE = 50
const TARGET_NODE_ID = `node-${NODE_SIZE}`
const TOTAL_ROUNDS = 30
const ROUND_INTERVAL_MS = 80
const START_DELAY_MS = 500

type NodeData = {
  id: string
  title: string
  schema: {
    component: string
    props: {
      text: string
    }
  }
  meta: {
    depth: number
    updatedAt: number
    style: {
      x: number
      y: number
      width: number
      height: number
      color: string
    }
  }
}

type NodePatch = Partial<Omit<NodeData, 'schema' | 'meta'>> & {
  schema?: Partial<NodeData['schema']> & {
    props?: Partial<NodeData['schema']['props']>
  }
  meta?: Partial<Omit<NodeData['meta'], 'style'>> & {
    style?: Partial<NodeData['meta']['style']>
  }
}

type CanvasStore = {
  nodeIds: string[]
  nodes: Record<string, NodeData>
  updateNode: (id: string, patch: NodePatch) => void
}

function createNode(id: string, depth: number): NodeData {
  return {
    id,
    title: `Node ${depth}`,
    schema: {
      component: 'Text',
      props: {
        text: `mock-${depth}`,
      },
    },
    meta: {
      depth,
      updatedAt: Date.now(),
      style: {
        x: depth * 2,
        y: depth * 3,
        width: 200,
        height: 48,
        color: depth === NODE_SIZE ? '#c2410c' : '#0f766e',
      },
    },
  }
}

function createMockSchema(size: number): { nodeIds: string[]; nodes: Record<string, NodeData> } {
  const nodeIds = []
  const nodes: Record<string, NodeData> = {}
  for (let i = 1; i <= size; i += 1) {
    const id = `node-${i}`
    nodeIds.push(id)
    nodes[id] = createNode(id, i)
  }
  return { nodeIds, nodes }
}

function createCanvasStore() {
  const { nodeIds, nodes } = createMockSchema(NODE_SIZE)
  return create<CanvasStore>((set) => ({
    nodeIds,
    nodes,
    updateNode: (id: string, patch: NodePatch) => {
      set((state: CanvasStore) => {
        const prev = state.nodes[id]
        if (!prev) return state

        const nextNode: NodeData = {
          ...prev,
          ...patch,
          schema: {
            ...prev.schema,
            ...(patch.schema || {}),
            props: {
              ...prev.schema.props,
              ...(patch.schema?.props || {}),
            },
          },
          meta: {
            ...prev.meta,
            ...(patch.meta || {}),
            style: {
              ...prev.meta.style,
              ...(patch.meta?.style || {}),
            },
          },
        }

        return {
          nodes: {
            ...state.nodes,
            [id]: nextNode,
          },
        }
      })
    },
  }))
}

const useBadStore = createCanvasStore()
const useGoodStore = createCanvasStore()

function BadNode({ node }: { node: NodeData }) {
  const countRef = useRef(0)
  countRef.current += 1
  return (
    <div className='node-card bad'>
      <div className='node-title'>{node.title}</div>
      <div className='node-meta'>depth={node.meta.depth}, updatedAt={node.meta.updatedAt}</div>
      <div className='node-meta'>renderCount={countRef.current}</div>
    </div>
  )
}

function BadCanvas() {
  const store = useBadStore()
  return (
    <div>
      <div className='badge'>BadCanvas: useStore() 全量订阅</div>
      {store.nodeIds.map((id) => (
        <BadNode key={id} node={store.nodes[id]} />
      ))}
    </div>
  )
}

function GoodNode({ id }: { id: string }) {
  const node = useGoodStore((state) => state.nodes[id])
  const countRef = useRef(0)
  countRef.current += 1
  return (
    <div className='node-card good'>
      <div className='node-title'>{node.title}</div>
      <div className='node-meta'>depth={node.meta.depth}, updatedAt={node.meta.updatedAt}</div>
      <div className='node-meta'>renderCount={countRef.current}</div>
    </div>
  )
}

function GoodCanvas() {
  const nodeIds = useGoodStore((state) => state.nodeIds)
  return (
    <div>
      <div className='badge'>GoodCanvas: useStore((state) =&gt; state.nodes[id])</div>
      {nodeIds.map((id) => (
        <GoodNode key={id} id={id} />
      ))}
    </div>
  )
}

function calcStats(values: number[]) {
  const sorted = [...values].sort((a, b) => a - b)
  if (sorted.length === 0) {
    return { avg: 0, p95: 0, min: 0, max: 0 }
  }
  const sum = sorted.reduce((acc, n) => acc + n, 0)
  const p95Index = Math.max(0, Math.ceil(sorted.length * 0.95) - 1)
  return {
    avg: sum / sorted.length,
    p95: sorted[p95Index],
    min: sorted[0],
    max: sorted[sorted.length - 1],
  }
}

function App() {
  const badUpdateNode = useBadStore((state) => state.updateNode)
  const goodUpdateNode = useGoodStore((state) => state.updateNode)
  const [status, setStatus] = useState('准备中...')

  const roundRef = useRef(0)
  const pendingRef = useRef<number | null>(null)
  const badCapturedRef = useRef(false)
  const goodCapturedRef = useRef(false)
  const badSamplesRef = useRef<number[]>([])
  const goodSamplesRef = useRef<number[]>([])
  const timerRef = useRef<number | null>(null)

  const resetRoundFlags = () => {
    badCapturedRef.current = false
    goodCapturedRef.current = false
  }

  const runRound = useCallback((round: number) => {
    roundRef.current = round
    pendingRef.current = round
    resetRoundFlags()
    setStatus(`进行中：第 ${round}/${TOTAL_ROUNDS} 轮`)

    const now = Date.now()
    badUpdateNode(TARGET_NODE_ID, {
      title: `Node 50 - bad round ${round}`,
      schema: {
        props: {
          text: `bad-${round}`,
        },
      },
      meta: {
        updatedAt: now,
        style: {
          x: 700 + round,
          y: 700 + round,
          color: round % 2 === 0 ? '#c2410c' : '#ea580c',
        },
      },
    })

    goodUpdateNode(TARGET_NODE_ID, {
      title: `Node 50 - good round ${round}`,
      schema: {
        props: {
          text: `good-${round}`,
        },
      },
      meta: {
        updatedAt: now + 1,
        style: {
          x: 700 + round,
          y: 700 + round,
          color: round % 2 === 0 ? '#166534' : '#15803d',
        },
      },
    })
  }, [badUpdateNode, goodUpdateNode])

  const maybeFinishRound = () => {
    if (!badCapturedRef.current || !goodCapturedRef.current || pendingRef.current == null) {
      return
    }

    const finishedRound = pendingRef.current
    pendingRef.current = null

    if (finishedRound >= TOTAL_ROUNDS) {
      const bad = calcStats(badSamplesRef.current)
      const good = calcStats(goodSamplesRef.current)
      const avgDiff = bad.avg - good.avg
      const p95Diff = bad.p95 - good.p95
      const avgImprove = bad.avg > 0 ? (avgDiff / bad.avg) * 100 : 0
      const p95Improve = bad.p95 > 0 ? (p95Diff / bad.p95) * 100 : 0

      console.log('---------------- Perf Summary ----------------')
      console.log(`[优化前全量渲染耗时][AVG]: ${bad.avg.toFixed(2)} ms`)
      console.log(`[优化前全量渲染耗时][P95]: ${bad.p95.toFixed(2)} ms`)
      console.log(`[优化前全量渲染耗时][MIN/MAX]: ${bad.min.toFixed(2)} / ${bad.max.toFixed(2)} ms`)
      console.log(`[优化后局部渲染耗时][AVG]: ${good.avg.toFixed(2)} ms`)
      console.log(`[优化后局部渲染耗时][P95]: ${good.p95.toFixed(2)} ms`)
      console.log(`[优化后局部渲染耗时][MIN/MAX]: ${good.min.toFixed(2)} / ${good.max.toFixed(2)} ms`)
      console.log(`[对比结论][AVG] 局部渲染减少耗时: ${avgDiff.toFixed(2)} ms (${avgImprove.toFixed(2)}%)`)
      console.log(`[对比结论][P95] 局部渲染减少耗时: ${p95Diff.toFixed(2)} ms (${p95Improve.toFixed(2)}%)`)
      console.log('----------------------------------------------')
      setStatus(`测试完成：共 ${TOTAL_ROUNDS} 轮，结果已输出到 Console`)
      return
    }

    timerRef.current = window.setTimeout(() => {
      runRound(finishedRound + 1)
    }, ROUND_INTERVAL_MS)
  }

  const onBadRender: ProfilerOnRenderCallback = (_id, phase, actualDuration) => {
    if (phase === 'update' && pendingRef.current != null && !badCapturedRef.current) {
      badCapturedRef.current = true
      badSamplesRef.current.push(actualDuration)
      console.log(`[优化前全量渲染耗时][第${pendingRef.current}轮]: ${actualDuration.toFixed(2)} ms`)
      maybeFinishRound()
    }
  }

  const onGoodRender: ProfilerOnRenderCallback = (_id, phase, actualDuration) => {
    if (phase === 'update' && pendingRef.current != null && !goodCapturedRef.current) {
      goodCapturedRef.current = true
      goodSamplesRef.current.push(actualDuration)
      console.log(`[优化后局部渲染耗时][第${pendingRef.current}轮]: ${actualDuration.toFixed(2)} ms`)
      maybeFinishRound()
    }
  }

  useEffect(() => {
    const starter = window.setTimeout(() => {
      runRound(1)
    }, START_DELAY_MS)

    return () => {
      window.clearTimeout(starter)
      if (timerRef.current != null) {
        window.clearTimeout(timerRef.current)
      }
    }
  }, [runRound])

  return (
    <div className='app-root'>
      <h2>Zustand 真实引擎链路渲染性能测试</h2>
      <p className='desc'>
        本页运行在你的 Playground 真实链路：编辑器文件 -&gt; worker 编译 -&gt; iframe 预览。
        场景为 50 节点低代码 schema，自动更新深层节点 {TARGET_NODE_ID}，共 {TOTAL_ROUNDS} 轮。
      </p>
      <p className='status'>{status}</p>

      <div className='grid'>
        <section className='panel'>
          <Profiler id='BadCanvasProfiler' onRender={onBadRender}>
            <BadCanvas />
          </Profiler>
        </section>
        <section className='panel'>
          <Profiler id='GoodCanvasProfiler' onRender={onGoodRender}>
            <GoodCanvas />
          </Profiler>
        </section>
      </div>
    </div>
  )
}

export default App
