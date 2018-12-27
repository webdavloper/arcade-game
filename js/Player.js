/**
 * This class represents the player's resources.
 *
 * @class Player
 * @extends {Entity}
 */
class Player extends Entity {
  /**
   * Creates an instance of Player.
   * @param {string} [sprite="images/char-boy.png"]
   * @param {*} x
   * @param {*} y
   * @param {*} width
   * @param {*} height
   * @memberof Player
   */
  constructor(sprite = "images/char-boy.png", x, y, width, height) {
    super(x, y, width, height)
    this._sprite = sprite
    this._lives = 5
    this._alive = true
  }


  /**
   * Get the lives of the player
   *
   * @memberof Player
   * @returns {number}
   */
  get lives() {
    return this._lives
  }


  /**
   * Sets the lives of the player
   *
   * @memberof Player
   */
  set lives(lives) {
    this._lives = lives
  }


  /**
   * Gets the player's surviving status. (true or false)
   *
   * @returns {boolean}
   * @memberof Player
   */
  get alive() {
    return this._alive
  }

  /**
   * Sets the status of the player. (true or false)
   *
   * @memberof Player
   */
  set alive(status) {
    this._alive = status
  }


  /**
   * Restarts the positions and player survival status.
   *
   * @memberof Player
   */
  restart() {
    this.x = 202
    this.y = 392
    this.alive = true
  }


  /**
   * Subtracts a player's life and sets the survival status as false.
   *
   * @memberof Player
   */
  die() {
    this.lives = this.lives > 0 ? --this.lives : 0
    this.alive = false
  }

}
