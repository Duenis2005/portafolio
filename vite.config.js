import { defineConfig } from "vite"
import handlebars from "vite-plugin-handlebars"
import purgecss from "@fullhuman/postcss-purgecss"
import { minify } from "html-minifier-terser"
import { resolve } from "path"
import { data } from "./src/data/index.js"

const minificarHtml = () => ({
  name: "minificar-html",
  apply: "build",
  transformIndexHtml: {
    order: "post",
    async handler(html) {
      return await minify(html, {
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true
      })
    }
  }
})

export default defineConfig(({ command }) => ({
  base: "/portafolio/",
  plugins: [
    handlebars({
      partialDirectory: resolve("src/components"),
      context: data
    }),
    minificarHtml()
  ],
  css: {
    postcss: {
      plugins:
        command === "build"
          ? [
              purgecss({
                content: ["./index.html", "./src/**/*.hbs", "./src/**/*.js"],
                safelist: ["html", "body"]
              })
            ]
          : []
    }
  },
  build: {
    minify: true,
    cssMinify: true
  }
}))
