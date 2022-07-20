const path = require("path");
import nunjucks from "vite-plugin-nunjucks";
import htmlPurge from "vite-plugin-html-purgecss";

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
  plugins: [nunjucks(), htmlPurge()],
};
