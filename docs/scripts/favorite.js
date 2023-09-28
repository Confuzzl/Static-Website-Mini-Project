function writeMain() {
    document.getElementById("column_1").innerHTML += /*html*/ `
        <h1>What are my hobbies and interests?</h1>
        <p></p>
    `;
    document.getElementById("column_2").innerHTML += /*html*/ `
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
        <p>Look at this uncontrived usage of an HTML table:</p>
        ${table()}
    `;
}

function writeFooter() {}

function table() {
    return /*html*/ `
    <div style="display: block; float: left; max-height: 10rem; direction: rtl; overflow: scroll; overflow-x: hidden;">
        <table>
            <tbody>
                ${(() => {
                    rows = ``;
                    for (let i = 0; i < 25; i++) {
                        rows += /*html*/ `
                        <tr>
                            <td>${String.fromCharCode(65 + i).repeat(3)}</td>
                            <td>${String.fromCharCode(97 + i).repeat(3)}</td>
                        </tr>
                        `;
                    }
                    return rows;
                })()}
                <tr>
                    <td>
                        <a href="https://en.wikipedia.org/wiki/Trollface#/media/File:Trollface_non-free.png" target="_blank">ZZZ</a>
                    </td>
                    <td>zzz</td>
                </tr>
            </tbody>
        </table>
    </div>
    `;
}
