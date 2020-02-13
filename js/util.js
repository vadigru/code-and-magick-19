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
    getRandomValue: function (min, arr) {
      var max = arr;
      return Array.isArray(arr) ?
        arr[Math.floor(Math.random() * max.length)] :
        Math.floor(min + Math.random() * (max + 1 - min));
    },
    shuffleArray: function (arr) {
      var j;
      var k;
      for (var i = arr.length - 1; i > 0; i--) {
        j = window.util.getRandomValue(0, i);
        k = arr[i];
        arr[i] = arr[j];
        arr[j] = k;
      }
      return arr;
    },
    onErrorHandler: function (message) {
      var modal = document.querySelector('.modal-error');
      var modalText = document.querySelector('.modal-error__text');
      modal.classList.remove('modal-error--hidden');
      modalText.textContent = message;
    }
  };
})();
