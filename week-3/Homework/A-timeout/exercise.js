/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/
/********** Task 1 *************/
// body= document.querySelector('body')
// setInterval(function(){ body.style.backgroundColor='orange'; }, 5000);

/********** Task 2 *************/
let colorChange = setInterval(setColor, 2000);
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
let i = 0

function setColor() {
    body = document.querySelector('body')
    if (i >= colors.length) {
        i = 0;
    }
    body.style.backgroundColor = colors[i]
    i++;
}

