const clearButton = document.querySelector("#clearButton")
const changeButton = document.querySelector("#changeButton")
const container = document.querySelector("#container")
createGrid()

let mode = 1

changeButton.addEventListener("click", function(e) {
	if (mode===1){
		mode = 2
	}else{
		mode=1
	}
	console.log(mode)
})

addListenerClearButton()

function addListenerClearButton (){
	clearButton.addEventListener("click", function(e) {
	    let elem = document.getElementsByClassName("colorSquare");
	    const x = elem.length
	    for (let i=0; i<x;i++){
	        elem[0].remove()   
	    }
	    let length = prompt("What length should side of the square have?")
	    createGrid(length)
	})
}

function changeColor(){
	const colorSquare = event.target;
	let RGB = randColor()

	if (mode===1){
		colorSquare.setAttribute('style', `background: rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`)
		
	}else{
		let color = colorSquare.style.backgroundColor
		stringArray = color.slice(4,-1).replace(/\s+/g, '').split(",")
		array=[parseInt(stringArray[0],10),parseInt(stringArray[1],10),parseInt(stringArray[2],10)]
		console.log(array)
		if(array[0]!=array[1]||array[0]!=array[2]){
			//console.log("1")
			averageGrey = Math.round((array[0]+array[1]+array[2])/3)
			colorSquare.setAttribute('style', `background: rgb(${averageGrey},${averageGrey},${averageGrey})`)
		}else if(array[0]>25){
			//console.log("2")
			newColor=array[0]-25
			colorSquare.setAttribute('style', `background: rgb(${newColor},${newColor},${newColor})`)
		}else{
			//console.log("3")
			colorSquare.setAttribute('style', `background: rgb(${0},${0},${0})`)
		}

	}
	
}


function createGrid(y = 4){
	container.style.grid = `repeat(${y}, 1fr)/repeat(${y}, 1fr)`;
	
	for (let i = 0;i<y**2;i++){
		const div = document.createElement('div')
		div.classList.add('colorSquare');  
		div.setAttribute('style', `background: rgb(255,255,255)`)
		container.appendChild(div)
		div.addEventListener("mouseenter", changeColor)		
	}
	let divs = document.querySelectorAll(".colorSquare")
}

function deleteDivs(){

}

function randColor() {
	let RGB = [0,0,0]
	RGB[0] = Math.floor(Math.random()*255)
	RGB[1] = Math.floor(Math.random()*255)
	RGB[2] = Math.floor(Math.random()*255)
	return RGB
	
}