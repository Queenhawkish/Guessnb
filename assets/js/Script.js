const nbtoguess = 12

let send = document.getElementById("button")

let mess = document.getElementById("message")

let ancien = document.getElementById("ancien")

let tentative = 1

function comparer() {
    let input = document.getElementById("input").value
    if (input == nbtoguess) {
        if(tentative == 1){
            mess.innerText = "Bravo tu as réussis à la première tentative !"
        }else {
            mess.innerText = `Bravo tu as trouvé en ${tentative} de tentatives !`
        }
        
    } else if (input < nbtoguess) {
        mess.innerText = "C'est un nombre plus grand ! "
        ancien.innerText += input + ` ; `
    } else if (input > nbtoguess){
        mess.innerText = "C'est un nombre plus petit !"
        ancien.innerText += input + ` ; `
    } else {
        mess.innerText = "Entrer une valeur correct !"
    }
    document.getElementById('input').value = "" 
}
send.addEventListener("click", function () {
    comparer(input)
    tentative++
})

