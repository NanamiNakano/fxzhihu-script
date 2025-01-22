import { defineConfig } from "vite"
import Userscript from "vite-userscript-plugin"
import { name, version, description, license } from "./package.json"

export default defineConfig((_) => {
  return {
    plugins: [
      Userscript({
        entry: "src/index.ts",
        header: {
          name,
          version,
          description,
          license,
          namespace: "https://thynanami.dev",
          match: [
            "https://www.zhihu.com/question/*",
            "https://www.zhihu.com/question/*/answer/*",
            "https://zhuanlan.zhihu.com/p/*",
            "https://www.google.com/search*",
          ],
        },
        server: {
          port: 3000,
        },
      }),
    ],
  }
})
