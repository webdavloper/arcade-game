/**
 * This class represents one or more Shadow objects of the game.
 *
 * @class Shadow
 * @extends {Environment}
 */
class Shadow extends Environment {
  /**
   * Creates an instance of Shadow.
   * @param {string} [sprite="images/shadow-west.png"]
   * @memberof Shadow
   */
  constructor(sprite = "images/shadow-west.png") {
    super(sprite)
    this._positions = [[40, 249], [40, 166], [40, 83]]
  }

}