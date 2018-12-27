/**
 * This class represents one or more Plant object of the game.
 *
 * @class Plant
 * @extends {Environment}
 */
class Plant extends Environment {
  /**
   *Creates an instance of Plant.
   * @param {string} [sprite="images/plant.png"]
   * @memberof Plant
   */
  constructor(sprite = "images/plant.png") {
    super(sprite)
    this._positions = [[404, 392]]
  }


  /**
   * Gets the x position of the plant.
   *
   * @readonly
   * @memberof Plant
   */
  get x() {
    return this._positions[0][0]
  }


  /**
   * Gets the y position of the plant.
   *
   * @readonly
   * @memberof Plant
   */
  get y() {
    return this._positions[0][1]
  }

}