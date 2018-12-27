/**
 * This class contains some filters to use in the game.
 *
 * @class Filter
 */
class Filter {

  /**
   * Static method to get a filter with initial value (none).
   */
  static none() {
    ctx.filter = "none"
  }

  /**
   * Static method to get a grayscale filter.
   */
  static grayscale() {
    ctx.filter = "grayscale(100%)"
  }


  /**
   * Static method to get a inverted filter.
   */
  static invert() {
    ctx.filter = "invert(100%)"
  }

}