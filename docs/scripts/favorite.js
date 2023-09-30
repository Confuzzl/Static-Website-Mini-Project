function writeMain() {
    document.getElementById("column_1").innerHTML += /*html*/ `
        <h1>What are my hobbies and interests?</h1>
        <p>
            &emsp;I'm super interested in a lot of different things.
            For one, really love anything to do with computer science and programming.
            I've had programming experience before AP CSA last year, but it was really last year where my passion really took off.
            Learning Java really opened up my mind to what was possible with programming. Before AP CSA I had no idea what OOP was or that it even existed.
            I like to learn about how compilers work, the philosophy of functional and OOP programming, computational geometry, and linear algebra for 3D games.
            So far I'd say I'm good at Java, and I'm learning C++ in my spare time right now.
            I've had experience with Python before, although I don't use it often anymore.
            I'm eager to learn Javascript right now, although I would also really like to learn Typescript.
        </p>
        <p>
            &emsp;Another one of my interests is math.
            Personally I found pre-calculus in junior year absolutely miserable because it was so mentally unstimulating.
            I enjoy the feeling of being stumped and being able to find the solution, which has led me to many different corners of math.
            Some specific fields I can list off the top of my head are abstract algebra, topology, symbolic computation, mathematical logic, complex analysis, and number theory.   
        </p>
        <p>
            &emsp;The last big interest I have is linguistics.
            I particularly like to learn about European languages, particularly Latinate and Germanic ones, as well as Chinese and its influence on Japanese and Korean.
        </p>
    `;
    document.getElementById("column_2").innerHTML += /*html*/ `
        <p>
            &emsp;Right now my hobbies are playing video games and working on coding projects.
            I'm currently working my own game engine using C++.
            I made a game engine for my AP CSA marking period projects and I want to try to do it in C++ and start from scratch.
            This website project has also been really good for me in terms of forcing me to learn HTMl and CSS, and at times it feels like a shame that this project is only supposed to be a static website.
            I learned how to use a lot of simple and advanced HTML elements, and I'm proud of how they turned out.
        </p>    
        <p>
            I'm not creative enough to find a use for a table so look at this uncontrived usage of an HTML table:
            ${table()}
        </p>
        
    `;
}

function table() {
    return /*html*/ `
    <div style="display: block; float: left; max-height: 10rem; direction: rtl; overflow: scroll; overflow-x: hidden;">
        <table>
            <tbody>
                ${(() => {
                    let rows = ``;
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
