/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6 */

console.log(document.querySelectorAll('p'))

/* 2. the first div element node
 --> should log the ".site-header" node*/
console.log(document.querySelector('.site-header'))

/*3. the element with id "jumbotron-text"
--> should log the "#jumbotron-text" node*/
console.log(document.querySelector('#jumbotron-text'))

/* 4. all the "p" elements of contained inside  the .primary-content element node
 --> should log a list of nodes with a length of 3 */
console.log(document.querySelectorAll('.primary-content p'))

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let button = document.getElementById('alertBtn');
button.addEventListener("click", alertBox);

function alertBox(event) {
    event.preventDefault()
    alert("Thanks for visiting Bikes for Refugees!")
}


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
// const buttonChangeColor = document.getElementById('bgrChangeBtn');
// buttonChangeColor.addEventListener("click", changeColor);

// function changeColor(event,color) {
//     event.preventDefault()
//     const body = document.querySelector('body')
//     body.style.backgroundColor ='orange'
// }
let buttonChangeColor = document.getElementById('bgrChangeBtn');
// buttonChangeColor.addEventListener("click", event => {
//     changeColor(event, 'orange')
// });

function changeColor(event, color) {
    event.preventDefault()
    const body = document.querySelector('body')
    body.style.backgroundColor = color
}



/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
const buttonAddText = document.getElementById('addTextBtn');
buttonAddText.addEventListener("click", event => {
    addText(event, '');
})

function addText(event, text) {
    event.preventDefault()
    const articles = document.getElementById('mainArticles')
    const p = document.createElement('p')
    articles.appendChild(p)
    p.innerText = text
}



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const buttonLargerLinks = document.getElementById('largerLinksBtn');
buttonLargerLinks.addEventListener("click", largerLinks);
let size = 14;

function largerLinks(event) {
    event.preventDefault()
    const links = document.querySelectorAll('a')
    links.forEach(link => {

        size = size + 0.1
        link.style.fontSize = size + "px"
    })
}

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
const buttonAddArticle = document.getElementById('addArticleBtn')
const inputText = document.querySelector('input');
buttonAddArticle.addEventListener("click", event => {
    addText(event, inputText.value)
    inputText.value = ''
})

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.*/
let colors = ['green', 'orange', 'blue', 'purple', 'yellow']
buttonChangeColor.addEventListener("click", event => {
    const body = document.querySelector('body')
    let currentColor = body.style.backgroundColor
    let currentColorIndex = colors.indexOf(currentColor)
    currentColorIndex++

    if (currentColorIndex == colors.length) {
        currentColorIndex = 0
    }

    changeColor(event, colors[currentColorIndex])
});