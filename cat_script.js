

const url = "https://api.thecatapi.com/v1/images/search?limit=3"
const api_key = "live_3s6WmIZuxb0ELh85YNl5ItavXvQs5H3o9zVVvcRPfgQVvq9PLng5pnv8p1FjU5d4"


function cats(){
  fetch(url,{headers: {
      'x-api-key': api_key
    }})
  .then((response) => {
   return response.json();
  })
  .then((data) => {
  let imagesData = data;
  imagesData.map(function(imageData) {
    console.log(imageData)
    let image = document.createElement('img');
    //use the url from the image object
    image.src = `${imageData.url}`;
        
    let gridCell = document.createElement('div');
    gridCell.classList.add('col');
    gridCell.classList.add('col-lg');
    gridCell.appendChild(image)
      
    document.getElementById('grid').appendChild(gridCell);
    });
  })
  .catch(function(error) {
   console.log(error);
  });
  }

cats()

function newCats() {
  document.getElementById("grid").innerText = ""
  cats()
}