var typewriter = document.getElementById('typewriter')
var parent = document.getElementById('clue-game')
var counter = document.getElementById('counter')
var suggestionButton = document.getElementById('submit')
const suspectList = ["mustard", "green", "peacock", "scarlett", "white", "plum"]
const weaponList = ["dagger", "candlestick", "lead_pipe", "revolver", "rope", "wrench"]
const roomList = ["kitchen", "ballroom", "conservatory", "dining", "billiards", "library", "lounge", "hall", "study"]
var startButton = document.getElementById('start-game')
let suspectIndex = Math.floor(Math.random()*5)
let roomIndex = Math.floor(Math.random()*8)
let weaponIndex = Math.floor(Math.random()*5)
let who = ''
let where = ''
let withWhat = ''
let whoGuess = ''
let whereGuess = ''
let withGuess = ''
let guessArr = []
let solveArr = []

let triesLeft  = 10

//function for event listener
function handleClick() {
	startButton.style.visibility = 'hidden'
	counter.style.visibility = 'visible'
	getMurderer()
}

function checkSuggestion() {
	triesLeft -= 1
	if (triesLeft < )
	counter.innerText = `TRIES LEFT: ${triesLeft}`
	if (`${who}` === `${whoGuess}` && `${where}` === `${whereGuess}` && `${withWhat}` === `${withGuess}`) {
		console.log('you win!!')
	}
	console.log(`${whoGuess}`,`${whereGuess}`,`${withGuess}`)
	console.log(`${who}`, `${where}`,`${withWhat}`)
}

//event listeners
startButton.addEventListener('click',handleClick, true)
suggestionButton.addEventListener('click', checkSuggestion)

function getMurderer() {
	let suspectIndex = Math.floor(Math.random()*5)
	let roomIndex = Math.floor(Math.random()*8)
	let weaponIndex = Math.floor(Math.random()*5)
	who = suspectList[suspectIndex]
	where = roomList[roomIndex]
	withWhat = weaponList[weaponIndex]
	document.getElementById('start-game').removeEventListener('click', handleClick, true)
	console.log (`${who} ${where} ${withWhat}`)
	makeSuggestions()
}

function trackSuggestion () {
	guessArr = [`${whoGuess}`,`${whereGuess}`,`${withGuess}`]
	console.log(guessArr)
	let arrCount = 0
	for (var i = 0; i<3; i++) {
		if (guessArr[i] != '') {
			arrCount += 1
		}
	
	if (arrCount === 3) {
		console.log('ready to check suggestions')
		suggestionButton.style.visibility = 'visible'
	}
	}
}

function makeSuggestions () {
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
				whoGuess = 'mustard'

			}
			else if (e.target.id ==='peacock') {
				suspectGuess.innerHTML = 'Mrs. Peacock killed Mr. Boddy ...'
				whoGuess = 'peacock'
			}
			else if (e.target.id ==='scarlett') {
				suspectGuess.innerHTML = 'Miss Scarlett killed Mr. Boddy ...'
				whoGuess = 'scarlett'
			}
			else if (e.target.id ==='green') {
				suspectGuess.innerHTML = 'Mr. Green killed Mr. Boddy ...'
				whoGuess = 'green'
			}
			else if (e.target.id ==='white') {
				suspectGuess.innerHTML = 'Mrs. White killed Mr. Boddy ...'
				whoGuess = 'white'
			}
			else if (e.target.id ==='plum') {
				suspectGuess.innerHTML = 'Professor Plum killed Mr. Boddy ...'
				whoGuess = 'plum'
			}
			suspectBox.style.backgroundColor = 'yellow'
			suspectBox.style.color = 'black'
			trackSuggestion()
		})
	}

	//choose rooms
	for (j=0; j<chooseRooms.length; j++) {
		chooseRooms[j].addEventListener('click', (e) => {
			if (e.target.id === 'kitchen') {
				roomGuess.innerHTML = 'in the Kitchen'
				whereGuess = 'kitchen'
			}
			else if (e.target.id ==='ballroom') {
				roomGuess.innerHTML = 'in the Ballroom'
				whereGuess = 'ballroom'
			}
			else if (e.target.id ==='conservatory') {
				roomGuess.innerHTML = 'in the Conservatory'
				whereGuess = 'conservatory'
			}
			else if (e.target.id ==='dining') {
				roomGuess.innerHTML = 'in the Dining Room'
				whereGuess = 'dining'
			}
			else if (e.target.id ==='billiards') {
				roomGuess.innerHTML = 'in the Billiards Room'
				whereGuess = 'billiards'
			}
			else if (e.target.id ==='library') {
				roomGuess.innerHTML = 'in the Library'
				whereGuess = 'library'
			}
			else if (e.target.id ==='lounge') {
				roomGuess.innerHTML = 'in the Lounge'
				whereGuess = 'lounge'
			}
			else if (e.target.id ==='hall') {
				roomGuess.innerHTML = 'in the Hall'
				whereGuess = 'hall'
			}
			else if (e.target.id ==='study') {
				roomGuess.innerHTML = 'in the Study'
				whereGuess = 'study'
			}
			roomBox.style.backgroundColor = 'yellow'
			roomBox.style.color = 'black'
			trackSuggestion()
		})
	}

// Weapons listener
	for (k=0; k<chooseWeapons.length; k++) {
		chooseWeapons[k].addEventListener('click', (e) => {
			if (e.target.id === 'dagger') {
				weaponGuess.innerHTML = '... with a dagger'
				withGuess = 'dagger'
			}
			else if (e.target.id ==='candlestick') {
				weaponGuess.innerHTML = '... with a candlestick'
				withGuess= 'candlestick'
			}
			else if (e.target.id ==='lead_pipe') {
				weaponGuess.innerHTML = '...with a lead pipe'
				withGuess = 'lead_pipe'
			}
			else if (e.target.id ==='revolver') {
				weaponGuess.innerHTML = '...with a revolver'
				withGuess = 'revolver'
			}
			else if (e.target.id ==='rope') {
				weaponGuess.innerHTML = '... with a rope'
				withGuess = 'rope'
			}
			else if (e.target.id ==='wrench') {
				weaponGuess.innerHTML = '...with a wrench'
				withGuess = 'wrench'
			}
			weaponBox.style.backgroundColor = 'yellow'
			weaponBox.style.color = 'black'
			trackSuggestion()
		})
	}
	return whoGuess, whereGuess, withGuess
}

