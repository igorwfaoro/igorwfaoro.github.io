const fs = require('fs');
const { parse } = require('marked');

const cwd = process.cwd();

const viewRaw = fs.readFileSync(`${cwd}/.scripts/view.html`, 'utf-8');
const markdownRaw = fs.readFileSync(`${cwd}/README.md`, 'utf-8');
const readmeHtml = parse(markdownRaw);

const data = {
  content: readmeHtml,
  title: 'Igor Wilian Faoro',
  mainStyleLink: '/style.css',
};

let indexHtml = viewRaw;
Object.entries(data).forEach(
  ([key, value]) => (indexHtml = indexHtml.replace(`{{${key}}}`, value))
);

fs.writeFileSync(`${cwd}/index.html`, indexHtml);
