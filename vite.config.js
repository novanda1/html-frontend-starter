const path = require("path");
import nunjucks from "vite-plugin-nunjucks";
import htmlPurge from "vite-plugin-html-purgecss";
import viteImagemin from "vite-plugin-imagemin";
import plaiceholder from "./plugins/plaiceholder";

export default {
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      "~swiper": path.resolve(__dirname, "node_modules/swiper"),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
  plugins: [
    nunjucks(),
    htmlPurge(),
    plaiceholder(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
  ],
};
