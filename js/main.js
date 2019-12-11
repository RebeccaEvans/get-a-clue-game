var typewriter = document.getElementById('typewriter')
var parent = document.getElementById('clue-game')
var counter = document.getElementById('counter')
var suggestionButton = document.getElementById('submit')
var message = document.getElementById('message')
var guessAgain = document.getElementById('new-guess')
var chooseWeapons = document.querySelectorAll('.weapons')
var chooseSuspects = document.querySelectorAll('.suspects')
var chooseRooms = document.querySelectorAll('.room')
var suspectGuess = document.getElementById('who')
var suspectBox = document.getElementById('suspect-guess')
var roomGuess = document.getElementById('where')
var roomBox = document.getElementById('room-guess')
var weaponGuess = document.getElementById('with')
var weaponBox = document.getElementById('weapon-guess')
var startButton = document.getElementById('start-game')
var playAgain = document.getElementById('play-again')
const suspectList = ["mustard", "green", "peacock", "scarlett", "white", "plum"]
const weaponList = ["dagger", "candlestick", "lead_pipe", "revolver", "rope", "wrench"]
const roomList = ["kitchen", "ballroom", "conservatory", "dining", "billiards", "library", "lounge", "hall", "study"]
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

guessAgain.style.visibility = 'hidden'
playAgain.style.visibility = 'hidden'

//function for event listener
function handleClick() {
	startButton.style.visibility = 'hidden'
	counter.style.visibility = 'visible'
	document.getElementById('murder').style.visibility = 'visible'
	setTimeout(function(){
		document.getElementById('murder').style.visibility = 'hidden'}, 5000);
	getMurderer()
}

//event listeners
startButton.addEventListener('click',handleClick, true)

function playNewGame() {
	guessAgain.style.visibility = 'hidden'
	playAgain.style.visibility = 'hidden'
	who = ''
	where = ''
	withWhat = ''
	whoGuess = ''
	whereGuess = ''
	withGuess = ''
	guessArr = []
	solveArr = []
	triesLeft = 10
	counter.innerText = `TRIES LEFT: 10`
	resetMessage()
	resetSuggestions()
	document.getElementById('murder').style.visibility = 'visible'
	setTimeout(function(){
		document.getElementById('murder').style.visibility = 'hidden'}, 5000);
	getMurderer()
}
//check player suggestion against solve game conditions and display message
function checkSuggestion() {
	suggestionButton.style.visibility = 'hidden'
	suggestionButton.removeEventListener('click', checkSuggestion)
	triesLeft -= 1
	counter.innerText = `TRIES LEFT: ${triesLeft}`

	if (triesLeft === 2) {
		counter.style.backgroundColor = 'red'
		giveHint()
	}
	if (`${who}` === `${whoGuess}` && `${where}` === `${whereGuess}` && `${withWhat}` === `${withGuess}`) {
		message.innerText = 'YOU WON!'
		playAgain.style.visibility = 'visible'
		playAgain.addEventListener('click', playNewGame)
	}
	else if (triesLeft === 0) {
		message.innerText = 'SORRY, YOU ARE OUT OF TRIES -- PLAY AGAIN.' 
		playAgain.style.visibility = 'visible'
		playAgain.addEventListener('click', playNewGame)
	}
	else {
		giveHint()
	}
}

//give random hint to player
function giveHint () {
	let hintNum = Math.floor(Math.random() * 3)
	if (hintNum === 0) {
		if (`${who}` === `${whoGuess}`) {
			message.innerText = 'CLUE: YOU GUESSED THE CORRECT SUSPECT -- REMEMBER TO KEEP TRACK OF YOUR CLUES!!!' 
		}
		else {
			message.innerText = 'CLUE: YOU DID NOT GUESS THE CORRECT SUSPECT -- REMEMBER TO KEEP TRACK OF YOUR CLUES!!!' 
		}
	}
	if (hintNum === 1) {
		if (`${where}` === `${whereGuess}`) {
			message.innerText = 'CLUE: YOU GUESSED THE CORRECT LOCATION -- REMEMBER TO KEEP TRACK OF YOUR CLUES!!!' 
		}
		else {
			message.innerText = 'CLUE: YOU DID NOT GUESS THE CORRECT LOCATION -- REMEMBER TO KEEP TRACK OF YOUR CLUES!!!' 
		}
	}
	if (hintNum === 2) {
		if (`${withWhat}` === `${withGuess}`) {
			message.innerText = 'CLUE: YOU GUESSED THE CORRECT WEAPON -- REMEMBER TO KEEP TRACK OF YOUR CLUES!!!' 
		}
		else {
			message.innerText = 'CLUE: YOU DID NOT GUESS THE CORRECT WEAPON -- REMEMBER TO KEEP TRACK OF YOUR CLUES!!!' 
		}
	}
	message.style.color = '#fcba03'
	guessAgain.style.visibility = 'visible'
	guessAgain.addEventListener('click', newGuess)
}

function newGuess ()  {
	guessAgain.style.visibility = 'hidden'
	message.innerText = 'CLICK ON THE PICTURES BELOW TO FILL THE GUESS BOXES.'
	whoGuess = ''
	whereGuess = ''
	withGuess = ''
	guessArr = []
	resetSuggestions()
}

function resetSuggestions () {
	suspectGuess.innerText = 'suspect guess'
	suspectBox.style.backgroundColor = 'black'
	suspectBox.style.color = 'white'
	roomGuess.innerText = 'room guess'
	roomBox.style.backgroundColor = 'black'
	roomBox.style.color = 'white'
	weaponGuess.innerText = 'weapon guess'
	weaponBox.style.backgroundColor = 'black'
	weaponBox.style.color = 'white'
	suggestionButton.style.visibility = 'hidden'
	suggestionButton.removeEventListener('click', checkSuggestion)
}
function resetMessage () {
	message.style.color = 'white'
	message.innerText = `You have 10 chances to solve the mystery of who killed Mr. Body. Keep track of the clues and solve the mystery before time runs out!`
}

//game chooses murderer, location and weapon randomly
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

//track player suggestions and update counter
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
		suggestionButton.addEventListener('click', checkSuggestion)
	}
	}
}

//listen for player suggestions and submission
function makeSuggestions () {

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
			resetMessage()
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
			resetMessage()
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
			resetMessage()
			
		})
	}
	return whoGuess, whereGuess, withGuess
}

