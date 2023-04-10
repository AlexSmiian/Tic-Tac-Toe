import { winnerResult } from "./coordinatesData.js";
import { playerOneResult,playerTwoResult } from "./coordinates.js";
import {popUp} from './const.js'
import { continuePlay } from "./continuePlay.js";
import { removeClickCell } from "./removeClickCell.js";
import { showResult } from "./showResult.js";

const playerOne = document.querySelector('.player-one');
const playerTwo = document.querySelector('.player-two');
 let winnerCountPlayerOne = 0;
 let winnerCountPlayerTwo = 0;




function resultComparisonPlayerOne (){
			

	for(let i = 0; i < winnerResult.length;i++){
		let counter = 0;
		
		for(let j =0; j < playerOneResult.length;j++){

			let m = Number(playerOneResult[j][0]); 
			let n = Number(playerOneResult[j][1]); 
			if(winnerResult[i].some(el => el[0]  === m  && el[1] === n)){
			
				counter ++
			}
			if(counter === 3){
				
				removeClickCell()
				playerOne.insertAdjacentHTML('beforeend',`<span>Перемога </span>`)
				popUp.style.display = 'flex'
				 continuePlay()
				
				winnerCountPlayerOne++
				showResult(winnerCountPlayerOne,winnerCountPlayerTwo)
			}else{
			continue
			}
		}
			
		}
};

function resultComparisonPlayerTwo (){


for(let i = 0; i < winnerResult.length;i++){
	let counter = 0;
	
	for(let j =0; j < playerTwoResult.length;j++){

		let m = Number(playerTwoResult[j][0]); 
		let n = Number(playerTwoResult[j][1]); 
		if(winnerResult[i].some(el => el[0]  === m  && el[1] === n)){
			counter ++
		}
		if(counter === 3){
			
			removeClickCell()
			playerTwo.insertAdjacentHTML('beforeend',`<span>Перемога </span>`)
			popUp.style.display = 'flex'
			 continuePlay()
		
			 winnerCountPlayerTwo++
			showResult(winnerCountPlayerOne,winnerCountPlayerTwo)
		
		}else{
		continue
		}
	}
		
	}
};


export {resultComparisonPlayerOne,
	resultComparisonPlayerTwo
}