import { cells } from "./const.js"
import { getCoordinations } from "./coordinates.js"
export function removeClickCell() {
	cells.forEach((cell)=>{

		cell.removeEventListener('click',getCoordinations)	
	
})
}
