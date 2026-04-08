import { readFileSync } from 'node:fs'
import { Buffer } from 'node:buffer'
import { strToU8, zlibSync } from 'fflate'

const fileName2Language = (name) => {
  const suffix = name.split('.').pop() || ''
  if (['js', 'jsx'].includes(suffix)) return 'javascript'
  if (['ts', 'tsx'].includes(suffix)) return 'typescript'
  if (['json'].includes(suffix)) return 'json'
  if (['css'].includes(suffix)) return 'css'
  return 'javascript'
}

const filePaths = [
  'src/ReactPlayground/template/main.tsx',
  'src/ReactPlayground/template/App.tsx',
  'src/ReactPlayground/template/App.css',
  'src/ReactPlayground/template/import-map.json',
]

const files = {}
for (const filePath of filePaths) {
  const name = filePath.split('/').pop()
  const value = readFileSync(filePath, 'utf8')
  files[name] = {
    name,
    language: fileName2Language(name),
    value,
  }
}

const rawJson = JSON.stringify(files)
const rawBytes = Buffer.byteLength(rawJson, 'utf8')
const compressed = zlibSync(strToU8(rawJson), { level: 9 })
const compressedBytes = compressed.byteLength
const base64 = Buffer.from(compressed).toString('base64')
const base64Bytes = Buffer.byteLength(base64, 'utf8')

const ratio = (part, total) => `${((part / total) * 100).toFixed(2)}%`

console.log(`FILES_COUNT=${Object.keys(files).length}`)
for (const [name, file] of Object.entries(files)) {
  console.log(`FILE ${name}=${Buffer.byteLength(file.value, 'utf8')} bytes`)
}

console.log(`RAW_JSON_BYTES=${rawBytes}`)
console.log(`FFLATE_ZLIB_BYTES=${compressedBytes}`)
console.log(`BASE64_BYTES=${base64Bytes}`)
console.log(`FFLATE_RATIO=${ratio(compressedBytes, rawBytes)}`)
console.log(`BASE64_RATIO=${ratio(base64Bytes, rawBytes)}`)
console.log(`SAVED_BYTES_ZLIB=${rawBytes - compressedBytes}`)
console.log(`SAVED_BYTES_BASE64=${rawBytes - base64Bytes}`)
