


// const element = document.getElementById("elbyid");
// element.style.color = "orange"
// let d = new Date();
// document.body.innerHTML += "<h2>Today's date is " + d + "</h2>"

const url = "https://api.thedogapi.com/v1/images/search?limit=3"
const api_key = "live_3s6WmIZuxb0ELh85YNl5ItavXvQs5H3o9zVVvcRPfgQVvq9PLng5pnv8p1FjU5d4"

function dogs(){
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
  gridCell.classList.add('dog-column');
  // gridCell.classList.add('col-lg');
  gridCell.appendChild(image)
    
  document.getElementById('dog-main').appendChild(gridCell);

  

  let breed = document.createElement('h2');
  let bred_for = document.createElement('h2');
  let temperament = document.createElement('h2');

  if (imageData.breeds[0]){
  breed.innerText = `${imageData.breeds[0].name}`
  
  bred_for.innerText = `Bred for: ${imageData.breeds[0].bred_for}`
  temperament.innerText = `Temperament: ${imageData.breeds[0].temperament}`
} else {breed.innerText = "Breed unspecified"}
breed.classList.add('breed-text')
gridCell.appendChild(breed)
gridCell.appendChild(bred_for)
gridCell.appendChild(temperament)
  // document.getElementById('grid2').appendChild(breed)
  // document.getElementById('grid2').appendChild(bred_for)
  // document.getElementById('grid2').appendChild(temperament)

  // document.body.appendChild(breed)
  
  });
})
.catch(function(error) {
 console.log(error);
});
}

dogs()

function newDogs() {
  document.getElementById("dog-main").innerText = ""
  // document.getElementById("grid2").innerText = ""
  dogs()
}