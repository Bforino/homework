// When the #grayButton is clicked, the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.
// The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text
// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!




// A function thats turns the grey scheme on

    //Set the body background

    //set the text color

//A function that turns the white scheme on

    //Set the body background

    //set the text color

// Create objects for the two buttons

// When I click the grey button, run the grey scheme function

// When I click the white button, run the white scheme function

function grayOn () {
    document.body.style.backgroundColor = 'gray';
    document.body.style.color = 'white';
}

function whiteOn () {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}

const grayButton = document.querySelector('#grayButton');
const whiteButton = document.querySelector ('#whiteButton');

grayButton.addEventListener("click", grayOn);
whiteButton.addEventListener("click", whiteOn);

