import { popUp,cells } from "./const.js"
import {getCoordinations} from './coordinates.js'
import {removeValueResultPlayer} from "./removeValueResultPlayer.js"

function continuePlay () {

	const btnYes = document.querySelector('[data-yes]')
	const btnNo = document.querySelector('[data-no]')

	btnNo.addEventListener('click',()=>{
		
		popUp.style.display = 'none'
	})

	btnYes.addEventListener('click',()=>{

		cells.forEach(function(el){
			if(el.childElementCount > 0){
				el.innerHTML = ''
				popUp.style.display = 'none'
				
			}
			
		})
		removeValueResultPlayer()
		
		
		cells.forEach((cell)=>{

			cell.addEventListener('click',getCoordinations)	
		
	})
	})

}


export {continuePlay}