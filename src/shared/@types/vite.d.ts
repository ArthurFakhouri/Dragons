/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USER: string
  readonly VITE_PASSWORD: string
  readonly VITE_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
