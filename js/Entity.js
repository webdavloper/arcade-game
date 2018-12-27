/**
 * Abstract class Entity
 *
 * This class represents the resources of the game entities.
 *
 * @class Entity
 */
class Entity {
  /**
   * Creates an instance of Entity.
   * @param {string} [sprite=""]
   * @param {number} [x=202]
   * @param {number} [y=392]
   * @param {number} [width=101]
   * @param {number} [height=171]
   * @memberof Entity
   */
  constructor(x = 202, y = 392, width = 101, height = 171) {
    this._x = x
    this._y = y
    this._width = width
    this._height = height
    if (new.target === Entity) {
      throw new TypeError(`Cannot instantiate class ${this.constructor.name}`);
    }
  }


  /**
   * Sets the sprite of the entity.
   *
   * @memberof Entity
   */
  set sprite(sprite) {
    this._sprite = sprite
  }


  /**
   * Gets the sprite of the entity.
   *
   * @memberof Entity
   */
  get sprite() {
    return this._sprite
  }


  /**
   * Sets the x position of the entity.
   *
   * @memberof Entity
   */
  set x(x) {
    this._x = x
  }


  /**
   * Gets the x position of the entity.
   *
   * @memberof Entity
   */
  get x() {
    return this._x
  }


  /**
   * Sets the y position of the entity.
   *
   * @memberof Entity
   */
  set y(y) {
    this._y = y
  }

  /**
   * Sets the y position of the entity.
   *
   * @memberof Entity
   */
  get y() {
    return this._y
  }


  /**
   * Gets the width of the entity.
   *
   * @memberof Entity
   */
  get width() {
    return this._width
  }


  /**
   * Sets the width of the entity.
   *
   * @memberof Entity
   */
  set width(width) {
    this._width = width
  }


  /**
   * Gets the height of the entity.
   *
   * @memberof Entity
   */
  get height() {
    return this._height
  }


  /**
   * Sets the height of the entity.
   *
   * @memberof Entity
   */
  set height(height) {
    this._height = height
  }


  /**
   * Renders the entity.
   *
   * @memberof Entity
   */
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

}