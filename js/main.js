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
let triesLeft  = 10

function handleClick() {
	getMurderer()
}


function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

typewriter.addEventListener('animationend', (e) => {
	e.target.style.display = 'none'
	var startButton = document.getElementById('start-game')
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
	console.log (`${who} ${where} ${withWhat}`)
	playGame()
}


function playGame () {
	let chooseWeapons = document.querySelectorAll('.weapons')
	let chooseSuspects = document.querySelectorAll('.suspects')
	let chooseRooms = document.querySelectorAll('.room')
	let suspectGuess = document.getElementById('who')
	let suspectBox = document.getElementById('suspect-guess')
	let roomGuess = document.getElementById('where')
	let roomBox = document.getElementById('room-guess')
	let weaponGuess = document.getElementById('with')
	let weaponBox = document.getElementById('weapon-guess')

	for (i=0; i<chooseSuspects.length; i++) {
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
	for (j=0; j<chooseRooms.length; j++) {
		chooseRooms[j].addEventListener('click', (e) => {
			if (e.target.id === 'kitchen') {
				roomGuess.innerHTML = 'in the Kitchen'
			}
			else if (e.target.id ==='ballroom') {
				roomGuess.innerHTML = 'in the Ballroom'

			}
			else if (e.target.id ==='conservatory') {
				roomGuess.innerHTML = 'in the Conservatory'

			}
			else if (e.target.id ==='dining') {
				roomGuess.innerHTML = 'in the Dining Room'

			}
			else if (e.target.id ==='billiards') {
				roomGuess.innerHTML = 'in the Billiards Room'

			}
			else if (e.target.id ==='library') {
				roomGuess.innerHTML = 'in the Library'

			}
			else if (e.target.id ==='lounge') {
				roomGuess.innerHTML = 'in the Lounge'

			}
			else if (e.target.id ==='hall') {
				roomGuess.innerHTML = 'in the Hall'

			}
			else if (e.target.id ==='study') {
				roomGuess.innerHTML = 'in the Study'

			}
			roomBox.style.backgroundColor = 'yellow'
			roomBox.style.color = 'black'
		})
	}

// Weapons listener
	for (k=0; k<chooseWeapons.length; k++) {
		chooseWeapons[k].addEventListener('click', (e) => {
			if (e.target.id === 'dagger') {
				weaponGuess.innerHTML = '... with a dagger'
			}
			else if (e.target.id ==='candlestick') {
				weaponGuess.innerHTML = '... with a candlestick'

			}
			else if (e.target.id ==='lead_pipe') {
				weaponGuess.innerHTML = '...with a lead pipe'

			}
			else if (e.target.id ==='revolver') {
				weaponGuess.innerHTML = '...with a revolver'

			}
			else if (e.target.id ==='rope') {
				weaponGuess.innerHTML = '... with a rope'

			}
			else if (e.target.id ==='wrench') {
				weaponGuess.innerHTML = '...with a wrench'
			}
			weaponBox.style.backgroundColor = 'yellow'
			weaponBox.style.color = 'black'
		})
	}

	if (weaponBox.style.backgroundColor === 'yellow' && roomBox.style.backgroundColor === 'yellow' && suspectBox.style.backgroundColor === 'yellow') {
		console.log('submit suggestion')
	}
}

