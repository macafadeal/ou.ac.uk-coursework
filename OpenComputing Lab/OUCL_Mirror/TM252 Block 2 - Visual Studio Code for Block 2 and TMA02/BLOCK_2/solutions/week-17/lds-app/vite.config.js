import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

let base = process.env.JUPYTERHUB_SERVICE_PREFIX || "/";
let app_url = "http://localhost:5173";
if (process.env.VSCODE_PROXY_URI) {
  const uri = new URL(process.env.VSCODE_PROXY_URI);
  app_url = uri.protocol + "//" + uri.host;
  base = base + "proxy/absolute/5173";
}
app_url = app_url + base;
console.log("\n" + app_url + "\n");

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: base,
  server: {
    allowedHosts: ["jhub-tm252.ocl-dev.open.ac.uk"],
  },
})
