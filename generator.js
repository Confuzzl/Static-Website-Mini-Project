const titleLookup = {
    index: "Main Page",
    favorite: "Favorites",
    skills: "Skills",
    spots: "NYC",
};

const fs = require("fs");

pageDirectories = fs
    .readdirSync(`${__dirname}\\docs`)
    .filter((file) => fs.lstatSync(`${__dirname}\\docs\\${file}`).isFile());

for (const page of pageDirectories) {
    const name = page.replace(".html", "");
    fs.writeFile(
        `docs\\${page}`,
        /*html*/ `<!DOCTYPE html>
            <html lang="en">
                <head>
                <meta charset="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <script src="scripts/${name}.js"></script>
                    <title>${titleLookup[name]}</title>
                    <link rel="stylesheet" href="styles/style.css" />
                </head>

                <body onload="writeMain(); writeFooter();">
                    <header id="header">
                        <div class="nav_bar_background"></div>
                        <div class="nav_bar">
                            ${header(name)} 
                        </div>
                    </header>
                    <main id="main">
                        <div class="article_column_grid">
                            <div class="article_column_grid_item" id="column_1"></div>
                            <div class="article_column_grid_item" id="column_2"></div>
                        </div>
                    </main>
                    <footer id="footer"></footer>
                </body>
            </html>`,
        (err) => {
            if (err) return console.log("error");
        }
    );
}

function header(name) {
    let navBar = ``;
    for (const [htmlID, title] of Object.entries(titleLookup)) {
        if (htmlID === name) {
            navBar += /*html*/ `
            <nav class="nav_bar_item" id="${htmlID}" selected>
                <a class="nav_bar_hyperlink" style="font-weight: heavy;">${title}</a>
            </nav>`;
        } else {
            navBar += /*html*/ `
            <nav class="nav_bar_item" id="${htmlID}">
                <a class="nav_bar_hyperlink" href="${htmlID}.html">${title}</a>
            </nav>`;
        }
    }
    return navBar;
}
