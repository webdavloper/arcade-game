/**
 * This class represents one or more Tree objects of the game.
 *
 * @class Tree
 * @extends {Environment}
 */
class Tree extends Environment {
  /**
   * Creates an instance of Tree.
   * @param {string} [sprite="images/tree-tall.png"]
   * @memberof Tree
   */
  constructor(sprite = "images/tree-tall.png") {
    super(sprite)
    this._positions = [[101, 309]]
  }


  /**
   * Gets the x position of the tree.
   *
   * @readonly
   * @memberof Tree
   */
  get x() {
    return this._positions[0][0]
  }


  /**
   * Gets the y position of the tree.
   *
   * @readonly
   * @memberof Tree
   */
  get y() {
    return this._positions[0][1]
  }

}