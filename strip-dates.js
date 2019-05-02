const fs = require("fs")
const [, , file = "index.html"] = process.argv

const input = fs.readFileSync(file).toString()
const output = input.replace(/-01-01/g, "")

fs.writeFileSync(file, output)
