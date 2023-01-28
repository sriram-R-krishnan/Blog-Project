const quotes = document.querySelector('.quote')
const author = document.querySelector('.author')


const generateNumber = () => {
    let generateNumber = Math.floor(Math.random() * 1500) + 1
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            quotes.innerHTML = data[generateNumber].text;
            author.innerHTML = data[generateNumber].author;
            return console.log(data[generateNumber]);
        });
}

