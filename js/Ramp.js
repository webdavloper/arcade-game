/**
 * This class represents one or more Ramp objects of the game.
 *
 * @class Ramp
 * @extends {Environment}
 */
class Ramp extends Environment {
  /**
   * Creates an instance of Ramp.
   * @param {string} [sprite="images/ramp-south.png"]
   * @memberof Ramp
   */
  constructor(sprite = "images/ramp-south.png") {

    super(sprite);
    this._positions = [
      [0, -34], [101, -34], [202, -34], [303, -34], [404, -34]
    ];
  }
}
