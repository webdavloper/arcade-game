/**
 * This class represents one or more Grass objects of the game.
 *
 * @class Grass
 * @extends {Environment}
 */
class Grass extends Environment {
  /**
   * Creates an instance of Grass.
   * @param {string} [sprite="images/grass-block.png"]
   * @memberof Grass
   */
  constructor(sprite = "images/grass-block.png") {
    super(sprite)
    this._positions = [
      [0, 332], [101, 332], [202, 332], [303, 332], [404, 332],
      [0, 415], [101, 415], [202, 415], [303, 415], [404, 415]
    ]
  }

}