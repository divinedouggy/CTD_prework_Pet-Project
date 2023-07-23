
// URL and API key for The Cat API
// (limit parameter is broken on Cat API for some reason, 10 cats are summoned regardless of input)
const url = "https://api.thecatapi.com/v1/images/search?limit=3"
const api_key = "live_3s6WmIZuxb0ELh85YNl5ItavXvQs5H3o9zVVvcRPfgQVvq9PLng5pnv8p1FjU5d4"

function cats() {
  // fetches all the cat information from API
  fetch(url, {
    headers: {
      'x-api-key': api_key
    }
  })
    .then((response) => {
      // parses the response body as JSON
      return response.json();
    })
    .then((data) => {
      // storing data in imagesData variable
      let imagesData = data;

      // using JavaScript's 'map' function to process each 'cat' element
      imagesData.map(function (imageData) {
        // creates an HTML img element for each cat
        let image = document.createElement('img');

        //plugs the url from imageData object into img element
        image.src = `${imageData.url}`;

        // creating a 'grid cell' for each cat picture
        let gridCell = document.createElement('div');
        gridCell.classList.add('col');
        gridCell.classList.add('col-lg');
        gridCell.appendChild(image)

        // appending the grid cell to the HTML
        document.getElementById('grid').appendChild(gridCell);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

// calls the cats function on page load
cats()

// cleans out old information and brings in new information,
// when "New Cats" button is clicked
function newCats() {
  document.getElementById("grid").innerText = ""
  cats()
}