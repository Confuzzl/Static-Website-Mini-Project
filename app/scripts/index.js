const imageDimensions = [[1, 4, 1, 5], [1, 4, 5, 8], [4, 8, 1, 8], [8, 12, 1, 8]];

function writeMain() {
    let textColumns = `<div">`;
    // textColumns += `<h1>Welcome to my website!</h1>`
    // {
    //     let text = `<div>`;
    //     text += `<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>`;
    //     text += `</div>`;
    //     textColumns += text;
    // }
    {
        let gallery = `<div class="gallery">`;
        for (let i = 0; i < 4; i++) {
            dimensions = `grid-column-start: ${imageDimensions[i][0]}; grid-column-end: ${imageDimensions[i][1]}; grid-row-start: ${imageDimensions[i][2]}; grid-row-end: ${imageDimensions[i][3]};`
            gallery += `<figure class="gallery_item" id="image_${i}" style="${dimensions}">`;
            gallery += `<img src="assets/${i}.jpg" class="gallery_img">`;
            gallery += `</figure>`;
        }
        // gallery += `<figure class="gallery_item" id="image_1" style="${imageDimensions[0]}">`;
        // gallery += `<img src="../assets/1.jpg" class="gallery_img">`;
        // gallery += `</figure>`;
        gallery += `</div>`;
        textColumns += gallery;
    }
    textColumns += `</div>`
    document.getElementsByTagName("main")[0].innerHTML += textColumns;
}