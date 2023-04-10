



const playerResult = document.querySelector('.count');
	
	// Показуємо результат гравців
export	function showResult(winnerCountPlayerOne,winnerCountPlayerTwo){

	if(winnerCountPlayerOne === undefined && winnerCountPlayerTwo === undefined){
		playerResult.innerHTML = `Рахунок:  <span> 0 </span>-<span> 0 </span>`
	}else{
		playerResult.innerHTML = `Рахунок:  <span> ${winnerCountPlayerOne}</span>-<span>${winnerCountPlayerTwo} </span>`
	}
	
		
	} 
	showResult()