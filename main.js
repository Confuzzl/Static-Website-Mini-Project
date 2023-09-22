export let htmlIDs = ["index", "favorite", "skills", "spots"];

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

function clickableRedirects(htmlName) {
    output = Object.keys(titleLookup).map((site) => { return site === htmlName });
    console.log(output);
    return output;
}

function generateBoilerPlate(htmlName) {
    document.title = titleLookup[htmlName];
    // generateNavigationBar();
}

function generateNavigationBar(name) {
    main = `
    <main>
        <div id="nav_bar">`
    // document.body.innerHTML += `
    // <main>
    //     <div id="nav_bar">
    //         <div id="index"></div>
    //         <div id="favorite"></div>
    //         <div id="skills"></div>
    //         <div id="spots"></div>
    //     </div>
    // </main>`;
    for (const [name, title] of Object.entries(titleLookup)) {
        main += `
        <div id="${name}">
            <a href="../${folderLookup[name]}/${name}.html">${title}</a>
        </div>`;
    }
    main += `
        </div>
    </main>`;
    document.body.innerHTML = main;
}