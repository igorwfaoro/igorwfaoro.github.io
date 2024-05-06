const fs = require('fs');
const { parse } = require('marked');

const cwd = process.cwd();

const viewRaw = fs.readFileSync(`${cwd}/.scripts/view.html`, 'utf-8');
const markdownRaw = fs.readFileSync(`${cwd}/README.md`, 'utf-8');

const readmeHtml = parse(markdownRaw);

const indexHtml = viewRaw.replace('{{content}}', readmeHtml);

fs.writeFileSync(`${cwd}/index.html`, indexHtml);
