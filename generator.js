const titleLookup = {
    "index": "Main Page",
    "favorite": "Favorites",
    "skills": "Skills",
    "spots": "NYC"
};

const fs = require("fs");

pageDirectories = fs.readdirSync(`${__dirname}\\app`).filter(file => fs.lstatSync(`${__dirname}\\app\\${file}`).isFile());

for (const page of pageDirectories) {
    let name = page.replace(".html", "");
    fs.writeFile(`app\\${page}`,
        `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script defer src="scripts/template.js"></script>
    <title>${titleLookup[name]}</title>
    <link rel= "stylesheet" href="styles/style.css">
</head>
        
<body onload="generateTemplate('${name}')">
        
</body>

</html>`, (err) => { if (err) return console.log("error"); });
}