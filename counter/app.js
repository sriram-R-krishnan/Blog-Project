let decrement = document.querySelector(".decrement")
let increment = document.querySelector(".increment")

let addValue = document.querySelector(".addValue")
let addValueBtn = document.querySelector(".addValue-btn")

let counterValue = document.querySelector(".counter-value")

let countVal = counterValue.innerHTML



const decValue = () => {
    countVal = parseInt(countVal)
    countVal = countVal - 1
    countVal = countVal.toString()
    counterValue.innerHTML = countVal
}

const incValue = () => {
    countVal = parseInt(countVal)
    countVal = countVal + 1
    countVal = countVal.toString()
    counterValue.innerHTML = countVal
}

const AddValue = () => {
    let value = parseInt(addValue.value)
    countVal = parseInt(countVal)
    countVal = countVal + value
    countVal = countVal.toString()
    counterValue.innerHTML = countVal
}

const reset = () =>{
    let value = parseInt(addValue.value)
    countVal = parseInt(countVal)
    countVal = 0
    addValue.value = 0
    countVal = countVal.toString()
    counterValue.innerHTML = countVal
}