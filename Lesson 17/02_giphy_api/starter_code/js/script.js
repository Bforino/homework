
// ToDo
// When the user submits the search form, make an API request to Giphy's search endpoint
// https://api.giphy.com/v1/gifs/search?api_key="YOURAPIKEY"&q="SEARCHSTRING"
// Display the results in the #giphy-results div provided in the html
// Each new search should replace the previous search results
// CSS Bonus: Use flex or grid properties to display the results in a responsive, clean layout

const apiKey = "i9u5FoDahfPMI2LFAipRD3KXJ45afk0f";

async function giphySearch(e) {

  // prevent the page from submitting/reloading. we need to tell the browser to prevent itself frome executing, completeing default tasks.

  e.preventDefault();

  // get the user input from the form

  const searchTerm = document.querySelector('input[name="search-term"]').value;

  // make an API call using fetch() - include your API key and the user's search term (template strings are your friend)

  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`;

  const response = await fetch(apiURL);

  // convert your response data into .json()

  const giphyData = await response.json();

  // print your data to the console to see its format, dont forget to delete later

  console.log(apiKey);
  console.log(giphyData);

  // clear out all gifs from previous searches

  document.getElementById('giphy-results').innerHTML = "";


  // use a loop to create and append each image to the dom

  for(let i = 0; i < giphyData.data.length; i++) {
    //grab the url in the json object

    const imageURL = giphyData.data[i].images.fixed_width.url;
    const newImageTag = document.createElement("img");
    newImageTag.setAttribute("src", imageURL);
    document.getElementById('giphy-results').appendChild(newImageTag);
  
    //define the variable that will create a new image element on the page
    //Build it
    //output it
    
  }

}

// dont forget your event listener

document.querySelector("#search-form").addEventListener("submit", giphySearch);

