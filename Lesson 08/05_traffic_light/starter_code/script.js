// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...


// Function that turns all the lights off

function lightsOff(){
        document.querySelector('#stopLight').classList.remove('glow');
        document.querySelector('#slowLight').classList.remove('glow');
        document.querySelector('#goLight').classList.remove('glow');
    }


//Function to turn stop on

function stopLight() {
    lightsOff();
    document.querySelector('#stopLight').classList.add('glow');
}

    //Turn off all the lights
    //Turn on the stop


//Function to turn slow on

function slowLight() {
    lightsOff();
    document.querySelector('#slowLight').classList.add('glow');
}
    //Turn off all the lights
    //Turn on the slow 


//Function to turn the go on
    //Turn off all the lights
    //Turn on the go 

    function goLight() {
        lightsOff();
        document.querySelector('#goLight').classList.add('glow');
    }


// Add event listeners to each of the button



document.getElementById('slowButton').addEventListener("click", slowLight);

document.getElementById('goButton').addEventListener("click", goLight);

document.getElementById('stopButton').addEventListener("click", stopLight);

