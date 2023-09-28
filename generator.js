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
                    <script src="scripts/${name}.js" defer></script>
                    <title>${titleLookup[name]}</title>
                    <link rel="stylesheet" href="styles/style.css" />

                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;900&display=swap" rel="stylesheet">
                </head>

                <body onload="writeMain();">
                    <header id="header">
                        <div class="nav_bar">
                            ${header(name)} 
                        </div>
                    </header>
                    <main id="main">
                        <article class="article_column_grid">
                            <section class="article_column_grid_item" id="column_1"></section>
                            <section class="article_column_grid_item" id="column_2"></section>
                        </article>
                    </main>
                    <footer id="footer">
                        <div class="copyright">&copy 2023 Vincent Yang</div>
                        <h2>Help me improve my website!</h2>
                        <form onsubmit="return false;">
                            <label for="feedback">Feedback form:</label><br>
                            <textarea id="feedback" name="feedback" cols="50" rows="4" placeholder="e.g. &#8220Wow. This website is so cool.&#8221"></textarea><br>
                            <input type="submit" value="Submit" style="border-radius: 0.5rem; background-color: limegreen;">
                        </form>
                    </footer>
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
                <a class="nav_bar_hyperlink">${title}</a>
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
