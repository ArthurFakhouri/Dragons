/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USER: string
  readonly VITE_PASSWORD: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}