/**
 * Trailpack Configuration
 * (app.config.main)
 *
 * @see http://trailsjs.io/doc/config/main
 */
const path = require('path')

module.exports = {

  /**
   * Order does *not* matter. Each module is loaded according to its own
   * requirements.
   */
  packs: [
    require('trailpack-core'),
    require('trailpack-repl'),
    require('trailpack-router'),
    require('trailpack-express4'), 
require('trailpack-waterline'), 
require('trailpack-footprints')
  ],

  /**
   * Define application paths here. "root" is the only required path.
   */
  paths: {
    root: path.resolve(__dirname, '..'),
    temp: path.resolve(__dirname, '..', '.tmp')
  }
}
