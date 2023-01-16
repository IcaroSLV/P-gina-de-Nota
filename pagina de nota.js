const btnOne = document.getElementById("btn-1")
const btnTwo = document.getElementById("btn-2")
const btnThree = document.getElementById("btn-3")
const btnFour = document.getElementById("btn-4")
const btnFive = document.getElementById("btn-5")
const button = document.getElementById("Submit")
const beforeContent = document.getElementById("B-Content")
const AfterContent = document.getElementById("A-Content")
const Value = document.getElementById("Value")

function ReturnButtonStyle() {
    btnOne.style.backgroundColor = '#2F302F'
    btnOne.style.color = '#AAA9A9'
    btnTwo.style.backgroundColor = '#2F302F'
    btnTwo.style.color = '#AAA9A9'
    btnThree.style.backgroundColor = '#2F302F'
    btnThree.style.color = '#AAA9A9'
    btnFour.style.backgroundColor = '#2F302F'
    btnFour.style.color = '#AAA9A9'
    btnFive.style.backgroundColor = '#2F302F'
    btnFive.style.color = '#AAA9A9'
}

function changeNumber(p) {

    
    ReturnButtonStyle()


    if (p == 1) {
        btnOne.style.backgroundColor = 'orange'
        btnOne.style.color = 'white'
    } else if (p == 2) {
        btnTwo.style.backgroundColor = 'orange'
        btnTwo.style.color = 'white'
    } else if (p == 3) {
        btnThree.style.backgroundColor = 'orange'
        btnThree.style.color = 'white'
    } else if (p == 4) {
        btnFour.style.backgroundColor = 'orange'
        btnFour.style.color = 'white'
    } else if (p == 5) {
        btnFive.style.backgroundColor = 'orange'
        btnFive.style.color = 'white'
    }
}

let value = []
function siteNote(n) {

    console.log(n)
    while (value.length){
        value.pop()
    }
    value.push(n)

    changeNumber(n)
}

function Submit() {
    if (1 <= value.length > 0){
        Value.innerText = `Você deu o valor ${value[0]} de 5 `
        beforeContent.style.opacity = '0'
        beforeContent.style.zIndex = '-1'
        AfterContent.style.opacity = '1'
    } else {
        openModal()
    }
}

function openModal() {
    const modal = document.getElementById("modal")

    modal.style.opacity = "1"
    modal.style.zIndex = "1"

    setInterval(() => {
        modal.style.opacity = "0"
        modal.style.zIndex = "-1"
    }, 2500)
}
