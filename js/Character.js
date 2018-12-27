/**
 * This class contains all characters of the game.
 *
 * @class Character
 */
class Character {
  /**
   * Creates an instance of Character.
   * @memberof Character
   */
  constructor() {
    this._boy = "images/char-boy.png"
    this._cat = "images/char-cat-girl.png"
    this._horn = "images/char-horn-girl.png"
    this._pink = "images/char-pink-girl.png"
    this._princess = "images/char-princess-girl.png"
  }


  /**
   * Gets the boy character.
   *
   * @readonly
   * @memberof Character
   */
  get boy() {
    return this._boy
  }


  /**
   * Gets the cat character.
   *
   * @readonly
   * @memberof Character
   */
  get cat() {
    return this._cat
  }


  /**
   * Gets the horn character.
   *
   * @readonly
   * @memberof Character
   */
  get horn() {
    return this._horn
  }


  /**
   * Gets the pink character.
   *
   * @readonly
   * @memberof Character
   */
  get pink() {
    return this._pink
  }


  /**
   * Gets the princess character.
   *
   * @readonly
   * @memberof Character
   */
  get princess() {
    return this._princess
  }

}