// import { htmlIDs } from "./main";
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
    fs.writeFile(`${page}\\test_${index}.txt`, `${folderLookup[page]}`, { flag: "wx" }, (err) => { if (err) return console.log("error"); });
}
// fs.readdir(__dirname, (err, files) => {
//     if (err)
//         return console.log("error");
//     for (file of files) {
//         fileDir = `${__dirname}\\${file}`;
//         if (!(fs.lstatSync(fileDir).isDirectory() && file !== ".git"))
//             continue;
//         console.log("FILEDIR: ", fileDir);
//         pageDirectories.push(fileDir)
//         // fs.readdir(fileDir, (err, subfiles) => {
//         //     console.log("READING FILEDIR: ", fileDir);
//         //     if (err)
//         //         return console.log("error");

//         //     count = 0;
//         //     for (subfile of subfiles) {
//         //         console.log("INSIDE PAGE FOLDERS: ", fileDir)
//         //         if (!subfile.endsWith(".html"))
//         //             continue;
//         //         // console.log(subfile);
//         //         htmlDir = `${fileDir}\\${subfile}`;
//         //         // console.log(htmlDir);
//         //         test = `${fileDir}\\test_${count}.txt`;
//         //         console.log("TEST DIR:", test);
//         //         fs.writeFile(test, `
//         //         <!DOCTYPE html>
//         //         <html lang="en">

//         //         <head>
//         //             <meta charset="UTF-8">
//         //             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         //             <title>Document</title>
//         //             <script src="../main.js" onload="generateBoilerPlate('${htmlIDs[count]}')"></script>
//         //         </head>

//         //         <body onload="generateNavigationBar('${htmlIDs[count]}')">

//         //         </body>

//         //         </html>
//         //         `, (err) => {
//         //             if (err)
//         //                 return console.log("error");
//         //             console.log("successful write");
//         //         })
//         //         count++;
//         //     }
//         // });
//     }
// });
console.log(pageDirectories);