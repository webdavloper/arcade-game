// Setting for the delay.
// The delay occurs when:
// 1 - The player dies
// 2 - The player levels up
// 3 - The game restarts
const CONF = {
    DELAY: 600
}


// Instantiates a new Game object.
// This is the master object that is composed of all other required objects.
const game = new Game

// Start the game with the default settings.
game.init()


/*************************************************
 *
 *  DOM
 *
 ***********************************************
*/

const intro = document.querySelector('.intro')
const shortcuts = document.querySelector('.shortcuts')
const lives = document.querySelector('[data-lives]')
const score = document.querySelector('[data-score]')
const level = document.querySelector('[data-level]')
const start = document.querySelector('[new-game]')
const load = document.querySelector('[load-game]')
const players = document.querySelectorAll('.player')

const audioBg = document.getElementById("audioBg")
const audioLevelUp = document.getElementById("audioLevelUp")
const audioCrash = document.getElementById("audioCrash")


document.addEventListener('keyup', function (e) {

    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        32: 'space',
        13: 'enter',
        77: 'm',
        82: 'r',
    };

    handleInput(allowedKeys[e.keyCode])
});



function handleInput(key) {

    // Player Movements.
    // Only if the game is runing. If the game is stopped, the moves will not work.
    if (game.running) {

        const { player, plant, tree } = game

        switch (key) {
            case 'up':
                player.y > 0 && (player.y !== tree.y + 83 || player.x !== tree.x)
                    ? player.y -= 83
                    : player.y
                break;
            case 'right':
                player.x < 404 && (player.y !== tree.y || player.x !== tree.x - 101)
                    && (player.y !== plant.y || player.x !== plant.x - 101)
                    ? player.x += 101
                    : player.x
                break;
            case 'down':
                player.y < 392 && (player.y !== tree.y - 83 || player.x !== tree.x)
                    && (player.y !== plant.y - 83 || player.x !== plant.x)
                    ? player.y += 83
                    : player.y
                break;
            case 'left':
                player.x > 0 && (player.y !== tree.y || player.x !== tree.x + 101)
                    ? player.x -= 101
                    : player.x
                break;
        }
    }

    // General controls
    // Commands for play/pause, restart, mute, etc
    if (intro.classList.contains('hide')) {
        switch (key) {
            case 'space':
                game.running ? game.pause() : game.start()
                !audioBg.paused ? audioBg.pause() : audioBg.play()
                break;
            case 'r':
                audioBg.pause()
                game.restart()
                audioBg.pause()
                audioBg.currentTime = 0
                setTimeout(() => audioBg.play(), CONF.DELAY)
                break;
            case 'm':
                audioBg.volume ? audioBg.volume = 0 : audioBg.volume = 1
                audioCrash.volume ? audioCrash.volume = 0 : audioCrash.volume = 1
                audioLevelUp.volume ? audioLevelUp.volume = 0 : audioLevelUp.volume = 1
                break;
        }
    } else {
        key === "enter" ? newGame() : undefined
    }

}

/**
 * Function to start a NEW GAME
 */
function newGame() {
    localStorage.removeItem('game')
    game.init()
    game.start()
    startGame()
    game.save()
}

/**
 * Function to load game
 */
function loadGame() {
    game.load()
    game.start()
    startGame()
}


/**
 * Function to start the game
 */
function startGame() {
    setTimeout(() => audioBg.play(), 400)
    intro.classList.add('hide')
    shortcuts.classList.remove('hide')
    lives.innerHTML = game.player.lives
    score.innerHTML = game.score
    level.innerHTML = game._level
}

/**
 * Function to select player
 */
function selectPlayer({ target, currentTarget }) {
    players.forEach(player => player.classList.remove('active'))

    const selected = document.querySelector('#selected')
    selected.parentElement.parentElement.querySelector(".name").innerHTML = target.alt
    currentTarget.classList.add('active')

    selected.src = target.src
    selected.parentElement.id = currentTarget.id

    game.player.sprite = game.characters[selected.parentElement.id]
}

/**
 * Function to update the DOM data.
 *
 * This function only updates if:
 * 1 - The player went up level
 * 2 - The player has been hit
 *
 * This function must be used in the engine update function.
 */
function updateDocument() {
    if (game.level() || game.crash()) {
        lives.innerHTML = game.player.lives
        score.innerHTML = game.score
        level.innerHTML = game._level
    }

    if (game.player.lives === 0) {
        intro.classList.remove('hide')
        shortcuts.classList.add('hide')
        audioBg.currentTime = 0
        audioBg.pause()
        game.reset()
    }

    if (game.crash()) {
        audioCrash.play()
    }

    if (game.level()) {
        audioLevelUp.play()
    }
}


// Adding addEventListener to elements
players.forEach(player => player.addEventListener('click', selectPlayer))
start.addEventListener('click', newGame)
load.addEventListener('click', loadGame)
