var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
];
var wins = 0;
var losses = 0;
var cardsInPlay = [];
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		//alert("You found a match");
		var matchResult = document.createElement('h3');
		matchResult.textContent = 'You Won';
		document.getElementById('game-board').appendChild(matchResult);
	} else {
		//alert("Sorry, try again.");
		var matchResult = document.createElement('h3');
		matchResult.textContent = 'You Lost';
		document.getElementById('game-board').appendChild(matchResult);
	}
}
var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage)
	if (cardsInPlay.length % 2 === 0) {
		checkForMatch();
	}
}
var createBoard = function () {
	for (var i = 0; i < cards.length; i += 1) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		document.getElementById('game-board').appendChild(cardElement);
		cardElement.addEventListener('click', flipCard);
	}
}
var resetBoard = function () {
	var resetCardImg = document.getElementById("game-board");
	while (resetCardImg.hasChildNodes()) {   
    	resetCardImg.removeChild(resetCardImg.firstChild);
    }
    cardsInPlay = [];
	createBoard();
}
var resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetBoard);
createBoard();










