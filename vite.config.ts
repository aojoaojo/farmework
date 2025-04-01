import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/farmework/",
  server: {
    origin: "https://aojoaojo.github.io",
  },
  plugins: [react()],
});
