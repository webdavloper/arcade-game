/**
 * This class represents one or more Door object
 *
 * @class Door
 * @extends {Environment}
 */
class Door extends Environment {
  /**
   * Creates an instance of Door.
   * @param {string} [sprite="images/door-tall-open.png"]
   * @memberof Door
   */
  constructor(sprite = "images/door-tall-open.png") {
    super(sprite)
    this._positions = [
      [-33, 104], [-33, 304], [-33, 204]
    ]
  }
}