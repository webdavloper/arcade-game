/**
 * Abstract class Environment
 * This class represents all the resources of the game environment objects.
 *
 * @class Environment
 */
class Environment {
  /**
   * Creates an instance of Environment.
   * @param {string} [sprite="images/grass-block.png"]
   * @param {number} [width=101]
   * @param {number} [height=171]
   * @memberof Environment
   */
  constructor(sprite = "images/grass-block.png", width = 101, height = 171) {
    this._width = width
    this._height = height
    this._sprite = sprite
    if (new.target === Environment) {
      throw new TypeError(`Cannot instantiate class ${this.constructor.name}`);
    }
  }


  /**
   * Gets the positions.
   *
   * @memberof Environment
   */
  get positions() {
    return this._positions
  }


  /**
   * Sets the positions.
   *
   * @memberof Environment
   */
  set positions(positions) {
    this._positions = [positions]
  }


  /**
   * Gets the sprite of the object..
   *
   * @memberof Environment
   */
  get sprite() {
    return this._sprite
  }


  /**
   * Sets the sprite of the object.
   *
   * @memberof Environment
   */
  set sprite(sprite) {
    this._sprite = sprite
  }


  /**
   * Gets the width.
   *
   * @memberof Environment
   */
  get width() {
    return this._width
  }


  /**
   * Sets the width.
   *
   * @memberof Environment
   */
  set width(width) {
    this._width = width
  }


  /**
   * Gets the height.
   *
   * @memberof Environment
   */
  get height() {
    return this._height
  }


  /**
   * Sets the height.
   *
   * @memberof Environment
   */
  set height(height) {
    this._height = height
  }


   /**
   * Renders the object.
   *
   * @memberof Environment
   */
  render() {
    this.positions.forEach(([x, y]) => ctx.drawImage(Resources.get(this.sprite), x, y))
  }

}