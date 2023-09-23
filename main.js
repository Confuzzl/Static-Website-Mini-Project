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
    document.head.innerHTML += `<link rel= "stylesheet" href="../style.css">`;
}

function generateNavigationBar(name) {
    navBar = `<div class="nav_bar">`;
    for (const [htmlID, title] of Object.entries(titleLookup)) {
        navBar += `<div class="${htmlID === name ? "nav_bar_item nav_bar_item_current" : "nav_bar_item"}" id="${htmlID}">`;
        // main += `<p align="center">`;
        navBar += htmlID === name ? `<a class="nav_bar_hyperlink nav_bar_hyperlink_current">${title}</a>` :
            `<a class="nav_bar_hyperlink" href="../${folderLookup[htmlID]}/${htmlID}.html">${title}</a>`;
        // main += "</p>";
        navBar += `</div>`;
    }
    document.body.innerHTML += navBar;
    main = `<main>`;
    if (name === "index") {
        main += `<p>AAAAA</p>`
        main += `<script defer src="script.js" onload="writeMain()"></script>`;
        // main += `<div onload="writeMain()"></div>`
        // main += `<script>console.log("aaa")</script>`
    }
    main += `</main>`;
    document.body.innerHTML += main;
}