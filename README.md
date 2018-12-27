# Arcade Game

#### A simple project required by [Udacity Advanced Front-End Nanodegree](https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001-br-advanced).

The project is about re-creating a classic game based on the famous arcade game [Frogger](https://en.wikipedia.org/wiki/Frogger) of the 80's.

![alt text](https://i.imgur.com/sdR0Hxl.png)

# Getting Started

Access https://davidsilvasp.github.io/arcade-game/

You can also:
  - Clone this repository running `git clone https://github.com/davidsilvasp/arcade-game-master-pt-br.git`
  - Download this repository to your computer

___

# How the game works

The game area consists of 20 tiles, and the player is free to move through all of them, except through fixed objects (tree and plant). The main objective of the game is to make the player reach the opposite side without being hit by any of the enemies.

If the user chooses a new game, it starts with:

| players 	| enemies 	| lives 	| score 	| level 	|
|---------	|---------	|-------	|-------	|-------	|
| 1       	| 3       	| 5     	| 0     	| 1     	|

Game data is saved in localStorage.

If the user chooses to load the game, the game starts with the previous settings that have been saved.

There is an intentional delay for the user to be ready to start over.
The delay happens when:
- The game is restarted
- The player has been hit
- The player has reached the other side


### Game Description
- Enemies appear randomly in the area of stones
- Every level that the player reaches, the enemy's speed is increased
- Every 2 levels, 1 new enemy is added to the game
- The maximum number of enemies is 6
- If the player reaches the opposite side without being hit, the level is increased to +1
- The score is relatively increased as the player levels up. Ex: if the level is 2, the score is 138, if the level is 3 is 276...
- If the player has been hit, the number of lives is decreased -1
- If the total lives of the player is zero, the intro screen should appear for the user to play again
- There is no bonus for lives
- There is no score limit
- There is no level limit

___

# How to play
![alt text](https://i.imgur.com/SHRpsi0.gif)
  1. Use the mouse to choose your character.
  2. Click on new game button or press enter to start.
  3. Use <kbd>←</kbd><kbd>↑</kbd><kbd>→</kbd><kbd>↓</kbd> keys to move the player.
  4. Try to cross the area of stones without being hit.
  5. Have fun :satisfied:

## Controls

| Shortcut key     | Description                    |
|------------------|--------------------------------|
| <kbd>←</kbd>     | Moves the player to the left.  |
| <kbd>↑</kbd>     | Moves the player up.           |
| <kbd>→</kbd>     | Moves the player to the right. |
| <kbd>↓</kbd>     | Moves player down.             |
| <kbd>M</kbd>     | Mute the game.                 |
| <kbd>R</kbd>     | Restarts the game.             |
| <kbd>space</kbd> | Play/pause the game.           |

___

# Resources:
All the audios utilized are from [Freesound](https://freesound.org)
