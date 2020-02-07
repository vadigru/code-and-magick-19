'use strict';
window.util = (function () {
  var ENTER_KEYCODE = 'Enter';
  var ESC_KEYCODE = 'Escape';

  return {
    isEnterEvent: function (evt, action) {
      if (evt.key === ENTER_KEYCODE) {
        action();
      }
    },
    isEscEvent: function (evt, action) {
      if (evt.key === ESC_KEYCODE) {
        action();
      }
    },
    getRandom: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  };
})();
