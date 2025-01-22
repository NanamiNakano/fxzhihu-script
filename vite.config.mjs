import {defineConfig} from "vite"
import monkey from "vite-plugin-monkey"
import {name, version, description, license} from "./package.json"

export default defineConfig(
  {
    plugins: [
        monkey({
          entry: "src/index.ts",
          userscript: {
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
        })
    ],
    build: {
      minify: false
    }
  }
)
