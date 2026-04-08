import { useMemo } from 'react'

import reactIndexDts from '/node_modules/@types/react/index.d.ts?raw'
import reactGlobalDts from '/node_modules/@types/react/global.d.ts?raw'
import reactJsxRuntimeDts from '/node_modules/@types/react/jsx-runtime.d.ts?raw'

export default function StaticImportScenario() {
  const libs = useMemo(
    () => [
      {
        filePath: 'file:///node_modules/@types/react/index.d.ts',
        content: reactIndexDts,
      },
      {
        filePath: 'file:///node_modules/@types/react/global.d.ts',
        content: reactGlobalDts,
      },
      {
        filePath: 'file:///node_modules/@types/react/jsx-runtime.d.ts',
        content: reactJsxRuntimeDts,
      },
    ],
    [],
  )

  const totalBytes = libs.reduce((sum, lib) => sum + lib.content.length, 0)

  return (
    <main style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>Scenario A: Static Import ?raw</h1>
      <p>
        模拟把 React 类型定义静态打进主包，准备传给 Monaco Editor 的
        addExtraLib。
      </p>
      <p>extra libs: {libs.length}</p>
      <p>raw chars: {totalBytes.toLocaleString()}</p>
      <pre style={{ whiteSpace: 'pre-wrap', background: '#f5f5f5', padding: 12 }}>
        {libs.map((lib) => `${lib.filePath} -> ${lib.content.length} chars`).join('\n')}
      </pre>
    </main>
  )
}
