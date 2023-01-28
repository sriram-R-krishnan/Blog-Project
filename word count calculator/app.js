let textarea = document.querySelector(".text-area")
let countBtn = document.querySelector(".count-btn")
let count = document.querySelector(".count")


let countWords = () =>{

    if(textarea.value === "" ){
        count.innerHTML = wordCount
        console.log(wordCount);
    }
    else{
        let textArr = textarea.value.trim()
        console.log(textArr);
        let newArr = textArr.split(" ")
        let wordCount = newArr.length
        count.innerHTML = wordCount
        console.log(wordCount);
    }

    
 }
    
