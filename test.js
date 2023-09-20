function createButtons() {
    console.log("buttons")
    replace = ""
    for (char in [...Array(10).keys()]) {
        console.log(char)
        n = `FLEX ${char}`
        replace +=
            `<div class="box">\n\t<button id = "${n}" onClick="use('${n}')">${n}</button>\n</div>\n`
        // replace += `<div class="box">${n}</div>`
    }
    console.log(replace)
    document.getElementById("buttons").innerHTML = replace
}

function use(name) {
    document.getElementById(name).innerHTML = "USED"
}

// createButtons()