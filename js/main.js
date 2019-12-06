var typewriter = document.getElementById('typewriter')
var parent = document.getElementById('clue-game')
const suspectList = ["mustard", "green", "peacock", "scarlett", "white", "plum"]
const weaponList = ["dagger", "candlestick", "lead_pipe", "revolver", "rope", "wrench"]
const roomList = ["kitchen", "ballroom", "conservatory", "dining", "billiards", "library", "lounge", "hall", "study"]
let suspectIndex = Math.floor(Math.random()*5)
let roomIndex = Math.floor(Math.random()*8)
let weaponIndex = Math.floor(Math.random()*5)
let who = ''
let where = ''
let withWhat = ''
let triesLeft

function handleClick() {
	getMurderer()
}


function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

typewriter.addEventListener('animationend', (e) => {
	e.target.style.display = 'none'
	var startButton = document.createElement('button')
	startButton.innerText = 'PLAY GAME'
	startButton.id = 'start-game'
	insertAfter(startButton, parent)
	addStartListener(startButton)
})

function addStartListener(id) {
	id.addEventListener('click',handleClick, true)
}


function getMurderer() {
	let suspectIndex = Math.floor(Math.random()*5)
	let roomIndex = Math.floor(Math.random()*8)
	let weaponIndex = Math.floor(Math.random()*5)
	who = suspectList[suspectIndex]
	where = roomList[roomIndex]
	withWhat = weaponList[weaponIndex]
	document.getElementById('start-game').removeEventListener('click', handleClick, true)
	playGame()
}


function playGame () {
	console.log(who)
	console.log(where)
	console.log(withWhat)
	let chooseWeapons = document.querySelectorAll('.weapons')
	let chooseSuspects = document.querySelectorAll('.suspects')
	let chooseRooms = document.querySelectorAll('.room')
	let suspectGuess = document.getElementById('who')
	let suspectBox = document.getElementById('suspect-guess')

	for (i=0; i<chooseSuspects.length; i++) {
		console.log(chooseSuspects[i].id)
		chooseSuspects[i].addEventListener('click', (e) => {
			if (e.target.id === 'mustard') {
				suspectGuess.innerHTML = 'Mr. Mustard killed Mr. Boddy ...'
			}
			else if (e.target.id ==='peacock') {
				suspectGuess.innerHTML = 'Mrs. Peacock killed Mr. Boddy ...'

			}
			else if (e.target.id ==='scarlett') {
				suspectGuess.innerHTML = 'Miss Scarlett killed Mr. Boddy ...'

			}
			else if (e.target.id ==='green') {
				suspectGuess.innerHTML = 'Mr. Green killed Mr. Boddy ...'

			}
			else if (e.target.id ==='white') {
				suspectGuess.innerHTML = 'Mrs. White killed Mr. Boddy ...'

			}
			else if (e.target.id ==='plum') {
				suspectGuess.innerHTML = 'Professor Plum killed Mr. Boddy ...'
			}
			suspectBox.style.backgroundColor = 'yellow'
			suspectBox.style.color = 'black'
		})
	}

	//choose rooms
	for (i=0; i<chooseSuspects.length; i++) {
		console.log(chooseSuspects[i].id)
		chooseSuspects[i].addEventListener('click', (e) => {
			if (e.target.id === 'mustard') {
				suspectGuess.innerHTML = 'Mr. Mustard killed Mr. Boddy ...'
			}
			else if (e.target.id ==='peacock') {
				suspectGuess.innerHTML = 'Mrs. Peacock killed Mr. Boddy ...'

			}
			else if (e.target.id ==='scarlett') {
				suspectGuess.innerHTML = 'Miss Scarlett killed Mr. Boddy ...'

			}
			else if (e.target.id ==='green') {
				suspectGuess.innerHTML = 'Mr. Green killed Mr. Boddy ...'

			}
			else if (e.target.id ==='white') {
				suspectGuess.innerHTML = 'Mrs. White killed Mr. Boddy ...'

			}
			else if (e.target.id ==='plum') {
				suspectGuess.innerHTML = 'Professor Plum killed Mr. Boddy ...'
			}
			suspectBox.style.backgroundColor = 'yellow'
			suspectBox.style.color = 'black'
		})
	}
	["dagger", "candlestick", "lead_pipe", "revolver", "rope", "wrench"]
// Weapons listener
	for (j=0; j<chooseSuspects.length; j++) {
		console.log(chooseSuspects[j].id)
		chooseSuspects[j].addEventListener('click', (e) => {
			if (e.target.id === 'dagger') {
				suspectGuess.innerHTML = 'Mr. Mustard killed Mr. Boddy ...'
			}
			else if (e.target.id ==='candlestick') {
				suspectGuess.innerHTML = 'Mrs. Peacock killed Mr. Boddy ...'

			}
			else if (e.target.id ==='lead_pipe') {
				suspectGuess.innerHTML = 'Miss Scarlett killed Mr. Boddy ...'

			}
			else if (e.target.id ==='revolver') {
				suspectGuess.innerHTML = 'Mr. Green killed Mr. Boddy ...'

			}
			else if (e.target.id ==='rope') {
				suspectGuess.innerHTML = 'Mrs. White killed Mr. Boddy ...'

			}
			else if (e.target.id ==='wrench') {
				suspectGuess.innerHTML = 'Professor Plum killed Mr. Boddy ...'
			}
			suspectBox.style.backgroundColor = 'yellow'
			suspectBox.style.color = 'black'
		})
	}
}

