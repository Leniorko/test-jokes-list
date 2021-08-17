/**
 * Class that describes request result for jokes.
 */
export class JokesRequestResult {
  /**
   * @type {boolean}
   */
  error;
  /**
   * @type {number}
   */
  amount;
  /**
   * @type {Array<Joke>}
   */
  jokes;
}

export class Joke {
  /**
   * @type {string}
   */
  category;
  /**
   * Can be "single" or "twopart"
   * @type {string}
   */
  type;
  /**
   * Appears in twopart type jokes only.
   * @type {string}
   */
  setup;
  /**
   * Appears in twopart jokes only.
   * @type {string}
   */
  delivery;
  /**
   * Appars only in single type jokes only
   * @type {string}
   */
  joke;
  /**
   * @type {Array<Flags>}
   */
  flags;
  /**
   * @type {number}
   */
  id;
  /**
   * @type {boolean}
   */
  safe;
  /**
   * @type {string}
   */
  lang;
}

export class Flags {
  /**
   * @type {boolean}
   */
  nsfw;
  /**
   * @type {boolean}
   */
  religious;
  /**
   * @type {boolean}
   */
  political;
  /**
   * @type {boolean}
   */
  racist;
  /**
   * @type {boolean}
   */
  sexist;
  /**
   * @type {boolean}
   */
  explicit;
}
