/*
* Excercise 1
*
*/

const box = document.getElementById("color-block");
const text = document.getElementById("color-name");
box.addEventListener("click", changeColor)

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(box.getAttribute("class") === "color-block1"){
        //change the background color using JS
        box.setAttribute("class", "color-block2");
        //Change the text of the color using the span id color-name
        text.textContent =  '#7FFFD4';

    }
    else{
        //change the background color using JS
        box.setAttribute("class", "color-block1");
        //Change the text of the color using the span id color-name
        text.textContent = '#F08080' ; 

    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

const convertButton = document.getElementById("convertbtn");
convertButton.addEventListener("click", convertTemp)

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    const ftemp = document.getElementById("f-input").value;
    const ctemp = (ftemp - 32)*(5/9);
    //Send the calculated temperature to HTML
    document.getElementById("c-output").textContent = Math.round(ctemp);
}

