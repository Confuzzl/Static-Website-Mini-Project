const imageDimensions = [
    [1, 4, 1, 5],
    [1, 4, 5, 8],
    [4, 8, 1, 8],
    [8, 12, 1, 8],
    [1, 6, 8, 15],
    [6, 12, 8, 14],
    [6, 12, 14, 15],
];
const type = ["img", "img", "img", "img", "img", "vid", "aud"];

function writeMain() {
    document.getElementById("column_1").innerHTML += /*html*/ `
        <h1>Welcome to my website!</h1>
        <p>
            &emsp;Hi! I'm Vincent, and this is the first website I've ever made. 
            Prior to this course, I knew a little bit about web development, but I had never actually touched any HTML, CSS, or Javascript.
            I'm mildly excited to learn more about web development, and I expect myself to teach myself much more than what the curriculum provides.
            As you can see on the right, I have a cat (his name is DG) and I love him very much :).
        </p>
    `;
    document.getElementById("column_2").innerHTML += /*html*/ `
        <div class="article_column_grid_item">
            <div class="gallery">
                <div class="gallery_grid" style="--columns: 11; --rows: 14;">
                    ${getImageHTML()}
                </div>
            </div>
        </div>
    `;
}

function getImageHTML() {
    let gallery = "";
    for (let i = 0; i < type.length; i++) {
        let dimensions = `grid-column-start: ${imageDimensions[i][0]}; grid-column-end: ${imageDimensions[i][1]}; grid-row-start: ${imageDimensions[i][2]}; grid-row-end: ${imageDimensions[i][3]};`;
        gallery += ((_) => {
            switch (type[i]) {
                case "img":
                    return /*html*/ `
                    <figure class="gallery_grid_item" style="${dimensions}">
                        <img class="gallery_grid_content" src="assets/${i}.jpg">
                    </figure>`;
                case "vid":
                    return /*html*/ `
                    <figure class="gallery_grid_item" style="${dimensions}">
                        <video class="gallery_grid_content" controls loop>
                            <source src="assets/BISKIES.mp4" type="video/mp4">
                        </video>
                    </figure>`;
                case "aud":
                    return /*html*/ `
                    <figure class="gallery_grid_item" style="${dimensions}">
                        <audio class="gallery_grid_content" controls loop>
                            <source src="assets/purr.mp3" type="audio/mp3">
                        </audio>
                    </figure>`;
            }
        })();
    }
    return gallery;
}
