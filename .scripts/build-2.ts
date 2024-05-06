import fs from 'fs';
import { renderToString } from 'vue/server-renderer';
import {App} from '../src/App'

const cwd = process.cwd();

(async () => {
  const indexHtml = await renderToString(App);
  fs.writeFileSync(`${cwd}/index.html`, indexHtml);
})()
