
// ToDo
// When the user submits the search form, make an API request to open weather api's search endpoint
// https://api.openweathermap.org/data/2.5/weather?q=CITY&APPID=KEY
// Icon URL - refer to docs on how to use
// https://openweathermap.org/img/wn/####@2x.png  - replace #### with icon code
// Display the results in the #weather-results div
// Each new search should erase the previous results
console.log("moo")
const myApiKey = "2e1ff0e03a8e5f4949081c833e77f536";

async function handleWeatherRequest(e) {
console.log("hello")
  e.preventDefault();
  
  // get user input value from textbox
  const nameIt = document.querySelector('input[name=city]').value;
  
  // build the url address with YOUR personal API key and the users input city

  const addr = `https://api.openweathermap.org/data/2.5/weather?q=${nameIt}&APPID=${myApiKey}`

  
  // make an API call using fetch() and capture the response in a variable

  const response = await fetch(addr);

 
  // convert the response to a readable json format with .json()

  const data = await response.json();
  
  // print your data to the console to see its format, dont forget to delete later

  console.log(data);
  
  // Write a separate function to convert the temps from the default units (Kelvin) to a more readable F or C

  function convertKtoF(K){
    let temperature = (K - 273.15) * 9/5 + 32 ;

    temperature = Math.round(temperature);
    return temperature;

  }

  const readableTemp = convertKtoF(data.main.temp);
  const readableFeelsLikeTemp = convertKtoF(data.main.feels_like);
  const readableMaxTemp = convertKtoF(data.main.temp_max);
  const readableMinTemp = convertKtoF(data.main.temp_min);

  const newTempList = `<li>Current Temperature: ${readableTemp}&deg;</li>
  <li>Feels like Temperature: ${readableFeelsLikeTemp} </li>
  <li></li>
  <li></li>`

  document.querySelector('#weather-results').innerHTML =newTempList


  
  // build the icon src

  
  // create icon img tag
  
  // add icon url as src
  
  // clear out previous icon img
  
  // print all results to dom
  
  // append icon img to dom
  
}


// Attach an event listener to the submit button
document.querySelector("#weather-search").addEventListener("submit", handleWeatherRequest);