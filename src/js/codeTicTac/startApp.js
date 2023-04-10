import { cells } from "./const.js"
import { getCoordinations } from "./coordinates.js"


function startApp (){
	cells.forEach((cell)=>{

		cell.addEventListener('click',getCoordinations)	
	
	})
	
}

export {startApp}