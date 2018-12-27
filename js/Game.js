/**
 * It's the master class and contain instances of objects from other classes.
 *
 * @class Game
 */
class Game {

  /**
   * Creates an instance of Game.
   * @memberof Game
   */
  constructor() {
    // Self properties
    this._enemies = []
    this._score = 0
    this._level = 1
    this.running = true

    // Characters
    this._characters = new Character

    // Environment
    this._ramp = new Ramp
    this._dirtyblock = new DirtyBlock
    this._stone = new Stone
    this._grass = new Grass
    this._shadow = new Shadow
    this._tree = new Tree
    this._plant = new Plant
    this._door = new Door

    // Entity
    this._player = new Player
  }


  /**
   * Gets a Door object instantiated in constructor.
   *
   * @readonly
   * @memberof Door
   * @returns {Door}
   */
  get door() {
    return this._door
  }


  /**
   * Gets a DirtyBlock object instantiated in constructor.
   *
   * @readonly
   * @memberof Game
   */
  get dirtyblock() {
    return this._dirtyblock
  }


  /**
   * Gets a Plant object instantiated in constructor.
   *
   * @readonly
   * @memberof Game
   */
  get plant() {
    return this._plant
  }


  /**
   * Gets a Tree object instantiated in constructor.
   *
   * @readonly
   * @memberof Game
   */
  get tree() {
    return this._tree
  }


  /**
   * Gets a Shadow object instantiated in constructor.
   *
   * @readonly
   * @memberof Game
   */
  get shadow() {
    return this._shadow
  }


  /**
   * Gets a Water object instantiated in constructor.
   *
   * @readonly
   * @memberof Game
   */
  get ramp() {
    return this._ramp
  }


  /**
   * Gets a Stone object instantiated in constructor.
   *
   * @readonly
   * @memberof Game
   */
  get stone() {
    return this._stone
  }


  /**
   * Gets a Grass object instantiated in constructor.
   *
   * @readonly
   * @memberof Game
   */
  get grass() {
    return this._grass
  }


  /**
   * Gets the first Enemy object instantiated in constructor.
   *
   * @readonly
   * @memberof Game
   * @returns {object}
   */
  get enemy() {
    return this._enemies[0]
  }


  /**
   * Gets all Enemy objects instantiated in constructor.
   *
   * @returns {Array|object}
   */
  get enemies() {
    return this._enemies
  }


  /**
   * Gets all Character objects instantiated in constructor.
   *
   * @readonly
   * @memberof Game
   * @returns {Array}
   */
  get characters() {
    return this._characters
  }


  /**
   * Gets the Player object instantiated in constructor.
   *
   * @readonly
   * @memberof Game
   * @returns {Player}
   */
  get player() {
    return this._player
  }


  /**
   * Gets the score
   *
   * @memberof Game
   * @returns {number}
   */
  get score() {
    return this._score
  }


  /**
   * Sets the score of the Game
   *
   * @memberof Game
   * @param {number} score
   * @returns {number}
   */
  set score(score) {
    this._score = score
  }


  /**
   * This sets the amount of enemies the game will start.
   * This function also generates random positions for newly created enemies.
   * By default it starts with 3. The maximum number of enemies must be 6
   *
   * @memberof Game
   */
  set enemies(quantity = 1) {
    // Clean up the amount of enemies already in existence
    this._enemies = []

    // rand is used to store random values (indexes of positions) that can not be repeated
    const rand = []
    const maximum = 6

    let total = quantity < maximum ? quantity : maximum

    // This inserts random values to the rand while the rand variable size is less than the configured quantity.
    while (rand.length < total) {
      const index = Math.floor(Math.random() * this.stone.positions.length)
      !rand.includes(index) ? rand.push(index) : false
    }

    rand.forEach((rand, index) => {
      this.enemies.push(new Enemy)
      // Mapping positions of the Stone object, since the positions of the enemies are the same
      this.stone.positions.map(position => {
        const [x, y] = position
        this.enemies[index].positions.push([x, y - 23])
      })
      const [...positions] = this.enemy.positions
      this.enemies[index].x = positions[rand][0]
      this.enemies[index].y = positions[rand][1]
    })
  }


  /**
   * This method saves the game data in localStorage
   *
   * @memberof Game
   */
  save() {
    const { score, _level } = this
    const { lives, sprite } = this.player
    const data = { _level, score, sprite, lives, enemies: this.enemies.length }
    localStorage.setItem('game', JSON.stringify(data))
  }


  /**
   * This method loads the game data into localStorage if they exist.
   *
   * @returns {boolean}
   * @memberof Game
   */
  load() {
    const data = JSON.parse(localStorage.getItem('game'))
    if (data) {
      this.player.lives = data.lives
      this.player.sprite = data.sprite
      this._level = data._level
      this.enemies = data.enemies
      this.score = data.score
      return true
    }
    return false
  }


  /**
   * Returns a Boolean value that represents whether there was a collision
   *
   * @returns {boolean}
   * @memberof Game
   */
  crash() {
    let collision = false
    const space = 70

    this.enemies.forEach(enemy => {
      if ((enemy.x + space > this.player.x
        && enemy.x + space < this.player.x + this.enemy.width
        || enemy.x >= this.player.x
        && enemy.x < this.player.x + space)
        && enemy.y === this.player.y) {

        collision = true
      }
    })

    return collision
  }


  /**
   * Updates Game data. This method is used in engine.js
   *
   * @memberof Game
   */
  update() {

    // Updates only if the game is running
    if (this.running) {
      // updating level
      if (this.level()) {
        this.restart()
        this.score = this._level * Math.ceil(110 / 0.8)
        this._level++
        if (this._level % 2 == 0) {
          this.stop()
          setTimeout(() => {
            this.enemies = this.enemies.length + 1
            this.enemies.forEach(enemy => enemy.speed = this._level)
          }, CONF.DELAY + 10)
        }
        this.save()
      }

      // updating lives
      if (this.crash()) {
        this.player.die()
        this.restart()
        this.save()
      }

    }

  }


  /**
   * Checks if the player has reached his goal.
   *
   * @returns {boolean}
   * @memberof Game
   */
  level() {
    return this.player.y < 60 || false
  }


  /**
   * Start the game with the default settings only if it is not running.
   *
   * @memberof Game
   */
  start() {
    if (!this.running) {
      this.running = true
      this.player.alive = true
      this.enemies.forEach(enemy => enemy.speed = this._level)
    }
  }


  /**
   * This only executes the stop() method.
   *
   * @memberof Game
   */
  pause() {
    this.stop()
  }


  /**
   * Stops the game only if it is running.
   *
   * @memberof Game
   */
  stop() {
    if (this.running) {
      this.enemies.forEach(enemy => enemy.speed = 0)
      this.running = false
    }
  }


  /**
   * Restarts the game with a programmed delay.
   *
   * @memberof Game
   */
  restart() {
    this.stop()
    setTimeout(() => {
      this.player.restart()
      this.enemies = this.enemies.length
      this.start()
    }, this.player.lives < 1 ? 0 : CONF.DELAY)
  }


  /**
   * Resets the game and starts with the default settings
   *
   * @memberof Game
   */
  reset() {
    this.init()
    this.save()
    setTimeout(() => this.stop(), 10)
  }


  /**
   * Sets default settings
   *
   * @memberof Game
   */
  init() {
    this.score = 0
    this._level = 1
    this.enemies = 3
    this.player.lives = 5

    this.stop()
  }


  /**
   * Returns an array of sprites
   *
   * @returns {Array}
   * @memberof Game
   */
  resources() {
    return [
      this.stone.sprite, this.ramp.sprite, this.grass.sprite, this.enemy.sprite, this.tree.sprite,
      this.shadow.sprite, this.plant.sprite, this.dirtyblock.sprite, this.door.sprite,
      this.characters.boy, this.characters.cat, this.characters.horn,
      this.characters.pink, this.characters.princess
    ]
  }


  /**
   * Renders all objects needed for the canvas
   *
   * @memberof Game
   */
  render() {
    this.ramp.render()
    this.stone.render()
    this.dirtyblock.render()
    this.grass.render()
    this.shadow.render()
    this.enemies.forEach(enemy => enemy.render())
    this.player.render()
    this.tree.render()
    this.door.render()
    this.plant.render()
    !this.player.alive ? Filter.invert() : Filter.none()
  }

}
