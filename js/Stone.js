/**
 * This class represents one or more Stone objects of the game.
 *
 * @class Stone
 * @extends {Environment}
 */
class Stone extends Environment {
  /**
   * Creates an instance of Stone.
   * @param {string} [sprite="images/stone-block.png"]
   * @memberof Stone
   */
  constructor(sprite = "images/stone-block.png") {
    super(sprite)
    this._positions = [
      [0, 83], [101, 83], [202, 83], [303, 83], [404, 83],
      [0, 166], [101, 166], [202, 166], [303, 166], [404, 166],
      [0, 249], [101, 249], [202, 249], [303, 249], [404, 249],
    ]
  }

}