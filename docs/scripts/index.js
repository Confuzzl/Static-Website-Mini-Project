const imageDimensions = [
    [1, 4, 1, 5],
    [1, 4, 5, 8],
    [4, 8, 1, 8],
    [8, 12, 1, 8],
];

function writeMain() {
    document.getElementById("column_1").innerHTML += /*html*/ `
        <h1>Welcome to my website!</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
    `;
    document.getElementById("column_2").innerHTML += /*html*/ `
        <div class="article_column_grid_item">
            <div class="gallery">
                <div class="gallery_grid" style="--columns: 11; --rows: 7;">
                    ${getImageHTML()}
                </div>
                <p style="margin-bottom: 0;">Pictures of my cat DG :)</p>
            </div>
        </div>
    `;
}

function writeFooter() {
    document.getElementById("footer").innerHTML += /*html*/ `
    <h2>Help me improve my website!</h2>
    <form onsubmit="return false;">
        <label for="feedback">Feedback form:</label><br>
        <textarea id="feedback" name="feedback" cols="50" rows="4" placeholder="e.g. &#8220Wow. This website is so cool.&#8221"></textarea><br>
        <input type="submit" value="Submit" style="border-radius: 0.5rem; background-color: limegreen;">
    </form>`;
}

function getImageHTML() {
    gallery = "";
    for (let i = 0; i < 4; i++) {
        dimensions = `grid-column-start: ${imageDimensions[i][0]}; grid-column-end: ${imageDimensions[i][1]}; grid-row-start: ${imageDimensions[i][2]}; grid-row-end: ${imageDimensions[i][3]};`;
        gallery += /*html*/ `
        <figure class="gallery_grid_item" id="image_${i}" style="${dimensions}">
            <img src="assets/${i}.jpg" class="gallery_grid_img">
        </figure>`;
    }
    return gallery;
}
