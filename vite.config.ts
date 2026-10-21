import react from '@vitejs/plugin-react'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.GITHUB_ACTIONS && repositoryName && !repositoryName.endsWith('.github.io')
  ? `/${repositoryName}/`
  : '/'

// 문제은행 크기(내려받기 진행률)와 내용 해시(캐시 갱신 기준)를 빌드 때 넣는다.
const bank = readFileSync(fileURLToPath(new URL('./public/data/bank.json', import.meta.url)))

export default defineConfig({
  base,
  define: {
    __BANK_BYTES__: JSON.stringify(bank.length),
    __BANK_VERSION__: JSON.stringify(createHash('sha256').update(bank).digest('hex').slice(0, 12)),
  },
  plugins: [react()],
})
