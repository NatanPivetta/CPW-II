const Http = new XMLHttpRequest();
const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=21";

Http.open('GET', url);
Http.responseType = 'json';
Http.send();
Http.onreadystatechange = (e) => {
  console.log("Request Ok\n");
}

Http.onload = function () {
  var deck = Http.response;
  populateBoard(deck);

}

var gameboard = document.querySelector("#gameboard");

function populateBoard(jsonObj) {
  var image = document.createElement("img");
  var cardsArray = jsonObj['cards'];
  var cardsImage = [];
  cardsArray.forEach(e => {
      cardsImage.push(e.image) ;
  });
  cardsImage.forEach(e => {
    let div = document.querySelector("#gameboard");
    let image = document.createElement("img");
    image.setAttribute("src", `${e}`);
    div.append(image);
  });
  
  console.log(cardsImage);
}

