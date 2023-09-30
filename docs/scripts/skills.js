function writeMain() {
    document.getElementById("column_1").innerHTML += /*html*/ `
        <h1>What are my skills?</h1>
        <p>
            &emsp;I think one of my greatest skills is my ability to learn something fast as long as I like it.
            I'd like to think that I learned quite a lot more Java in my own time than the AP CSA curriculum, just because I loved to learn more.
            I think Java specifically but also OOP in general are topics I feel relatively confident in teaching a beginner about.
        </p>
        <p>
            &emsp;One skill that I have that I forget about often is that I can solve a Rubik's cube.
            I used to be a lot more rigorous in my practice, and I used to time myself and practice algorithms.
            For the past 2 years I've just kept one on my desk and would scramble and solve it with my brain half turned off.
            I think I could teach someone how to solve one, at least the first 2 layers.
        </p>
        <p>
            &emsp;I think I can also teach people math to a degree.
            I enjoy it when my friends ask me for help with their math homework, and I think I'm pretty good at explaining it to them.
            I don't know everything, so sometimes I have to google for help, but I will admit that I'm very good at google learning and will pick up the concept fairly quickly.
        </p>
    `;
    document.getElementById("column_2").innerHTML += /*html*/ `
        <p>
            I have no idea how to incorporate a list into my website so look at this list of powers of 2:
            ${list()}
        </p>
    `;
}

function list() {
    return /*html*/ `
    <ul>
        ${(() => {
            let items = ``;
            for (i = 31; i >= 0; i--) {
                items += /*html*/ `
                <li>${2.0 ** i}</li>
                `;
            }
            return items;
        })()}
    </ul>
    `;
}
