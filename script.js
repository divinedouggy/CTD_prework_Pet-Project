
// URL and API key for The Dog API
const url = "https://api.thedogapi.com/v1/images/search?limit=3"
const api_key = "live_3s6WmIZuxb0ELh85YNl5ItavXvQs5H3o9zVVvcRPfgQVvq9PLng5pnv8p1FjU5d4"

function dogs() {
  // fetches all the dog information from API
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

      // using JavaScript's 'map' function to process each 'dog' element
      imagesData.map(function (imageData) {
        // creates an HTML img element for each dog
        let image = document.createElement('img');

        //plugs the url from imageData object into img element
        image.src = `${imageData.url}`;

        // creating a 'column' for each dog + breed information
        let dogColumn = document.createElement('div');
        dogColumn.classList.add('dog-column');
        dogColumn.appendChild(image)

        // appending the dog column to the HTML
        document.getElementById('dog-main').appendChild(dogColumn);

        // creating h2 elements for breed information
        let breed = document.createElement('h2');
        let bred_for = document.createElement('h2');
        let temperament = document.createElement('h2');

        // if breed data exists, writes it to h2 elements
        // otherwise, writes "Breed unspecified"
        if (imageData.breeds[0]) {
          breed.innerText = `${imageData.breeds[0].name}`
          bred_for.innerText = `Bred for: ${imageData.breeds[0].bred_for}`
          temperament.innerText = `Temperament: ${imageData.breeds[0].temperament}`
        } else { 
          breed.innerText = "Breed unspecified" 
        }
        
        // adds a CSS class for breed name
        breed.classList.add('breed-text')

        // appends breed information to dog column
        dogColumn.appendChild(breed)
        dogColumn.appendChild(bred_for)
        dogColumn.appendChild(temperament)
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

// calls the dogs function on page load
dogs()

// cleans out old information and brings in new information,
// when "New Dogs" button is clicked
function newDogs() {
  document.getElementById("dog-main").innerText = ""
  dogs()
}