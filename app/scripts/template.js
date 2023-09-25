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
    document.body.innerHTML += `<header></header>`;
    generateHeader(htmlName);
    document.body.innerHTML += `<main id="main"></main>`;
    document.body.innerHTML += `<footer></footer>`;
    generateFooter();

    let script = document.createElement("script");
    script.setAttribute("src", `scripts/${htmlName}.js`);
    script.setAttribute("onload", "writeMain()");

    document.getElementsByTagName("main")[0].appendChild(script);
}

function generateHeader(htmlName) {
    document.createElement("div")
    let navBar = `<div class="nav_bar_background"></div>`;
    navBar += `<div class="nav_bar">`;
    for (const [htmlID, title] of Object.entries(titleLookup)) {
        navBar += `<nav class="nav_bar_item" id="${htmlID}"${htmlID === htmlName ? 'style="background-color: gainsboro; outline: white outset 4px;"' : ""}>`;
        navBar += htmlID === htmlName ? `<a class="nav_bar_hyperlink" style="font-weight: bold;">${title}</a>` :
            `<a class="nav_bar_hyperlink" href="${htmlID}.html">${title}</a>`;
        navBar += `</nav>`;
    }
    navBar += `</div>`;
    navBar += `</div>`;
    document.getElementsByTagName("header")[0].innerHTML += navBar;
}

function generateFooter() {
    let feedback = `<h2>Help me improve my website!</h2>`;
    feedback += `<form netlify>`;
    feedback += `<label for="feedback">Feedback:</label><br>`;
    feedback += `<textarea id="feedback" name="feedback" rows="4" ></textarea><br>`;
    feedback += `<input type="submit" value="Submit feedback">`;
    feedback += `</form>`;
    document.getElementsByTagName("footer")[0].innerHTML += feedback;
}