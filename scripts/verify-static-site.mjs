import { existsSync, readFileSync } from "node:fs";

const requiredFiles = [
  "index.html",
  "style.html",
  "modern.html",
  "old-school.html",
  "robots.txt",
  "sitemap.xml",
  "assets/site.css",
];

for (const file of requiredFiles) {
  if (!existsSync(file)) throw new Error(`Missing required site file: ${file}`);
}

for (const page of requiredFiles.filter((file) => file.endsWith(".html"))) {
  const html = readFileSync(page, "utf8");
  for (const value of ["assets/site.css", 'rel="canonical"', 'name="robots"']) {
    if (!html.includes(value)) throw new Error(`${page} is missing ${value}`);
  }
  if (html.includes("start.html")) throw new Error(`${page} contains a stale start.html link`);
}

const sitemap = readFileSync("sitemap.xml", "utf8");
for (const url of ["https://chillsharp.dev/", "style.html", "modern.html", "old-school.html"]) {
  if (!sitemap.includes(url)) throw new Error(`Sitemap is missing ${url}`);
}

console.log("Static site validation passed.");