class Enemy extends Entity {
  /**
   * Creates an instance of Enemy.
   * @param {string} [sprite="images/enemy-bug.png"]
   * @param {*} x
   * @param {*} y
   * @param {*} width
   * @param {*} height
   * @memberof Enemy
   */
  constructor(sprite = "images/enemy-bug.png", x, y, width, height) {
    super(x, y, width, height)
    this._sprite = sprite
    this._positions = []
    this._speed = 1
  }

  set speed(speed) {
    this._speed = speed
  }

  get speed() {
    return this._speed
  }

  get positions() {
    return this._positions
  }


  update(dt) {
    const speed = this.speed > 1 ? (200 + (this.speed * 10)) : this.speed * 200
    this._x += speed * dt
    let rand = Math.floor(Math.random() * 3) * 5
    if (this._x > 505) {
      this.x = -101 - 4
      this.y = this.positions[rand][1]
    }
  }

}