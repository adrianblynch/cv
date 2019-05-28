const fs = require("fs")
const cheerio = require("cheerio")
const [, , file = "index.html"] = process.argv

const html = fs.readFileSync(file).toString().replace(/-01-01/g, "")
const $ = cheerio.load(html)

// Remove empty dates
$("span.date").filter(function (index, el) {
  return $(this).text().trim() === "—"
}).remove()

fs.writeFileSync(file, $.html())
