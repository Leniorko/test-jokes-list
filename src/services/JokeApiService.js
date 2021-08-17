// TODO Allow methods to redefine default behavior. Optionally.
/**
 * This is service to create abstraction on top of bare URL.
 * In the constructor gets defined default behavior.
 *
 * @name JokeApiService
 *
 * @param {number} amount optional. Defines amount of fetched jokes
 */
export default class JokeApiService {
  baseUrl = new URL("https://v2.jokeapi.dev/joke/Any");

  constructor(amount = 10) {
    this.baseUrl.searchParams.set("amount", amount.toString());
  }

  /**
   * Fetching jokes.
   *
   * @param {Function} callback
   */
  async fetchJokes(callback) {
    fetch(this.baseUrl)
      .then((res) => res.json())
      .then((json) => callback(json));
  }
}
