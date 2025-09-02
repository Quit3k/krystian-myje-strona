import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // ZMIANA: Poprawna ścieżka do nowego repozytorium
  base: "/krystian-myje-strona/", 
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
