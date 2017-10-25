(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.howLongUntilLunch = factory());
}(this, (function () { 'use strict';

/**
 * Helpers.
 */

function howLongUntilLunch(hours, minutes) {}

return howLongUntilLunch;

})));
