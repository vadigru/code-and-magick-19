'use strict';
(function () {
  var setupWindow = document.querySelector('.setup');
  var setupUserPic = document.querySelector('.upload');

  setupUserPic.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var isDragged = false;
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      isDragged = true;
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      setupWindow.style.top = setupWindow.offsetTop - shift.y + 'px';
      setupWindow.style.left = setupWindow.offsetLeft - shift.x + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      if (isDragged) {
        var onUserPicClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          setupUserPic.removeEventListener('click', onUserPicClickPreventDefault);
        };
        setupUserPic.addEventListener('click', onUserPicClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
