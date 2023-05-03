const nbtoguess = 12

let send = document.getElementById("button")

let mess = document.getElementById("message")

let ancien = document.getElementById("ancien")

let tentative = 0

function comparer() {
    let input = document.getElementById("input").value
    if (input == nbtoguess) {
        mess.innerText = `Bravo tu as trouvé en ${tentative} de tentative(s)`
    } else if (input < nbtoguess) {
        mess.innerText = "C'est un nombre plus grand"
        ancien.innerText += input + ` ; `
    } else if (input > nbtoguess){
        mess.innerText = "C'est un nombre plus petit"
        ancien.innerText += input + ` ; `
    }
}
send.addEventListener("click", function () {
    comparer(input)
    tentative++
})

