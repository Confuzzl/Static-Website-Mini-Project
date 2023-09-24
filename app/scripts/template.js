// export let htmlIDs = ["index", "favorite", "skills", "spots"];

const titleLookup = {
    "index": "Main Page",
    "favorite": "Favorites",
    "skills": "Skills",
    "spots": "NYC"
}
const folderLookup = {
    "index": "home",
    "favorite": "favorites",
    "skills": "how to",
    "spots": "nyc"
}

function generateBoilerPlate(htmlName) {
    document.title = titleLookup[htmlName];
    document.head.innerHTML += `<link rel= "stylesheet" href="styles/style.css">`;
}

function generateNavigationBar(htmlName) {
    document.body.innerHTML += `<div class="nav_bar_background"></div>`;
    let navBar = `<div class="nav_bar">`;
    for (const [htmlID, title] of Object.entries(titleLookup)) {
        navBar += `<nav class="nav_bar_item" id="${htmlID}"${htmlID === htmlName ? 'style="background-color: gainsboro; outline: white outset 4px;"' : ""}>`;
        navBar += htmlID === htmlName ? `<a class="nav_bar_hyperlink" style="font-weight: bold;">${title}</a>` :
            `<a class="nav_bar_hyperlink" href="${htmlID}.html">${title}</a>`;
        navBar += `</nav>`;
    }
    navBar += `</div>`;
    document.body.innerHTML += navBar;
    document.body.innerHTML += `<main></main>`;

    let script = document.createElement("script");
    script.setAttribute("src", `scripts/${htmlName}.js`);
    script.setAttribute("onload", "writeMain()");
    document.getElementsByTagName("main")[0].appendChild(script);
}