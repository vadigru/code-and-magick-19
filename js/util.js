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
    getRandomValue: function (min, array) {
      var max = array;
      return Array.isArray(array) === true ?
        array[Math.floor(Math.random() * max.length)] :
        Math.floor(min + Math.random() * (max + 1 - min));
    },
    shuffleArray: function (array) {
      var j;
      var k;
      for (var i = array.length - 1; i > 0; i--) {
        j = window.util.getRandomValue(0, i);
        k = array[i];
        array[i] = array[j];
        array[j] = k;
      }
      return array;
    }
  };
})();
