const titleLookup = {
    "index": "Main Page",
    "favorite": "Favorites",
    "skills": "Skills",
    "spots": "NYC"
};
const folderLookup = {
    "index": "home",
    "favorite": "favorites",
    "skills": "how to",
    "spots": "nyc"
};

function generateTemplate(htmlName) {
    document.body.innerHTML += `<header id="header"></header>`;
    generateHeader(htmlName);
    document.body.innerHTML += `<main id="main"></main>`;
    document.body.innerHTML += `<footer id="footer"></footer>`;

    let mainScript = document.createElement("script");
    mainScript.setAttribute("src", `scripts/${htmlName}.js`);
    mainScript.setAttribute("onload", "writeMain()");
    document.getElementById("main").appendChild(mainScript);

    let footerScript = document.createElement("script");
    footerScript.setAttribute("src", `scripts/${htmlName}.js`);
    footerScript.setAttribute("onload", "writeFooter()");
    document.getElementById("footer").appendChild(footerScript);
}

function generateHeader(htmlName) {
    document.createElement("div")
    let navBar = `<div class="nav_bar_background"></div>`;
    navBar += `<div class="nav_bar">`;
    for (const [htmlID, title] of Object.entries(titleLookup)) {
        navBar += `<nav class="nav_bar_item" id="${htmlID}" ${htmlID === htmlName ? 'selected' : ""}>`;
        navBar += htmlID === htmlName ? `<a class="nav_bar_hyperlink" style="font-weight: bold;">${title}</a>` :
            `<a class="nav_bar_hyperlink" href="${htmlID}.html">${title}</a>`;
        navBar += `</nav>`;
    }
    navBar += `</div>`;
    navBar += `</div>`;
    document.getElementById("header").innerHTML += navBar;
}