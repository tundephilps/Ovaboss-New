
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  // Add other env vars here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
