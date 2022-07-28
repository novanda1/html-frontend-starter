/**
 * @todo novanda1
 * 
 * fix promise, resolve and return the promise from getPlaiceholder
 */

const datasrcregex = /data-src=\"([^"]*)\"/g;
import { getPlaiceholder } from "plaiceholder";

const getBase64 = (src) => {
  try {
    const result = getPlaiceholder(src).then(({ base64, img }) => {
      return { base64, img };
    });

    return result;
  } catch (err) {
    console.log(err);
    return;
  }
};

export default function myPlugin() {
  return {
    name: "html-transform",
    transformIndexHtml(html) {
      return html.replace(
        datasrcregex,
        async function (match, contents, offset, input_string) {
          const src = contents.replace(".", "");
          const plaiceholder = await getBase64(src);
          return `${match} src="${plaiceholder.base64}"`;
        }
      );
    },
  };
}
