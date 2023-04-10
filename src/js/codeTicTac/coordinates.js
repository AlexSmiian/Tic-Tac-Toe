
	import { cells,popUp } from './const.js';
	import { cellCoordinates } from './coordinatesData.js';
	import {resultComparisonPlayerTwo,resultComparisonPlayerOne} from './resultComparisonPlayer.js'
	import { continuePlay } from './continuePlay.js';
	import {removeValueResultPlayer} from './removeValueResultPlayer.js';


	let countClick = 0;
let playerOneResult = [];
let playerTwoResult = [];

const draw = document.querySelector('.continue__text')


//Встановлюємо координати кожного div
function setCoordinates () {
	for(let i = 0; i < cells.length;i++){
	 cells[i].setAttribute('data-x',cellCoordinates[i][0])
	 cells[i].setAttribute('data-y',cellCoordinates[i][1])
	}
}
setCoordinates()
function incrementCountClick() {
  countClick = 0;
}
// Зчитуємо координати та записуємо їх в масив гравця
function getCoordinations  () {
	 
	countClick++
	
	if(this.lastChild == null){
	
		if(countClick % 2 !== 0){
			this.innerHTML = `<img src= './images/cross.png' />`
		
			playerOneResult.push([
				this.getAttribute('data-x'),
				this.getAttribute('data-y')])
				playerOneResult.sort()	
				 resultComparisonPlayerOne (playerOneResult)
		}else {
			this.innerHTML = `<img src= './images/circle.png' />`
			playerTwoResult.push([
				this.getAttribute('data-x'),
				this.getAttribute('data-y')])
					playerTwoResult.sort()
					 resultComparisonPlayerTwo (playerTwoResult)
		}
		
	}
	if(countClick === 9){

		removeValueResultPlayer();
		popUp.style.display = 'flex'
		continuePlay();
		draw.innerHTML = `Нічия, Продовжити?`
	}

	this.removeEventListener('click', getCoordinations);

}


export {getCoordinations,
	incrementCountClick,
	playerOneResult,
	playerTwoResult,

}