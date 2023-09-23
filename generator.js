const folderLookup = {
    "home": "index",
    "favorites": "favorite",
    "how to": "skills",
    "nyc": "spots"
}

const fs = require("fs");

pageDirectories = fs.readdirSync(__dirname).filter(file => fs.lstatSync(file).isDirectory() && file !== ".git");

for (const [index, page] of pageDirectories.entries()) {
    console.log(page, folderLookup[page]);
    fs.writeFile(`${page}\\${folderLookup[page]}.html`, `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script defer src="../main.js" onload="generateBoilerPlate('${folderLookup[page]}')"></script>
</head>

<body onload="generateNavigationBar('${folderLookup[page]}')">

</body>

</html>`, (err) => { if (err) return console.log("error"); });
}