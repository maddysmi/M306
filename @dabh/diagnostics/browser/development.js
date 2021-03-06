var create = require('../diagnostics');

/**
 * Create a new diagnostics logger.
 *
 * @param {String} namespace The namespace it should enable.
 * @param {Object} options Additional options.
 * @returns {Function} The logger.
 * @public
 */
var diagnostics = create(function dev(namespace, options) {
  options = options || {};
  options.namespace = namespace;
  options.prod = false;
  options.dev = true;

  if (!dev.enabled(namespace) && !(options.force || dev.force)) {
    return dev.nope(options);
  }

  return dev.yep(options);
});

//
// Configure the logger for the given environment.
//
diagnostics.modify(require('../modifiers/namespace'));
diagnostics.use(require('../adapters/localstorage'));
diagnostics.use(require('../adapters/hash'));
diagnostics.set(require('../logger/console'));

//
// Expose the diagnostics logger.
//
module.exports = diagnostics;
