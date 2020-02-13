'use strict';
(function () {
  var setupWindow = document.querySelector('.setup');
  var buttonSetupOpen = document.querySelector('.setup-open');
  var setupCharacter = setupWindow.querySelector('.setup-player');
  var fireball = setupCharacter.querySelector('.setup-fireball-wrap');
  var wizardEyes = setupCharacter.querySelector('.wizard-eyes');
  var wizardCoat = setupCharacter.querySelector('.setup-wizard .wizard-coat');

  var popupOpen = function () {
    var setupName = setupWindow.querySelector('.setup-user-name');
    var buttonSetupClose = setupWindow.querySelector('.setup-close');
    setupWindow.classList.remove('hidden');
    fireball.addEventListener('click', onFireballClick);
    wizardEyes.addEventListener('click', onEyesClick);
    wizardCoat.addEventListener('click', onCoatClick);
    buttonSetupClose.addEventListener('click', onSetupClickClose);
    buttonSetupClose.addEventListener('keydown', onSetupEnterPressClose);
    document.addEventListener('keydown', onSetupEscPress);
    setupName.addEventListener('focus', function () {
      document.removeEventListener('keydown', onSetupEscPress);
    });
    setupName.addEventListener('blur', function () {
      document.addEventListener('keydown', onSetupEscPress);
    });
  };

  var popupClose = function () {
    setupWindow.classList.add('hidden');
    setupWindow.style.left = '';
    setupWindow.style.top = '';
    document.removeEventListener('keydown', onSetupEscPress);
  };

  var onSetupClickOpen = function () {
    popupOpen();
  };

  var onSetupClickClose = function () {
    popupClose();
  };

  var onSetupEnterPressOpen = function (evt) {
    window.util.isEnterEvent(evt, popupOpen);
  };

  var onSetupEnterPressClose = function (evt) {
    window.util.isEnterEvent(evt, popupClose);
  };

  var onSetupEscPress = function (evt) {
    window.util.isEscEvent(evt, popupClose);
  };

  var onFireballClick = function (evt) {
    var target = evt.currentTarget;
    var fireballInput = fireball.querySelector('input[name="fireball-color"]');
    var fireballColor = window.util.getRandomValue(0, window.const.FIREBALL_COLORS);
    target.style.background = fireballColor;
    fireballInput.value = fireballColor;
  };

  var onEyesClick = function (evt) {
    var target = evt.target;
    var eyesInput = setupCharacter.querySelector('input[name="eyes-color"]');
    var eyesColor = window.util.getRandomValue(0, window.const.EYE_COLORS);
    target.style.fill = eyesColor;
    eyesInput.value = eyesColor;
  };

  var onCoatClick = function (evt) {
    var target = evt.target;
    var coatInput = setupCharacter.querySelector('input[name="coat-color"]');
    var coatColor = window.util.getRandomValue(0, window.const.COAT_COLORS);
    target.style.fill = coatColor;
    coatInput.value = coatColor;
  };
  // send formdata and success error handler ----------------------------------

  var form = document.querySelector('.setup-wizard-form');

  var onSubmitSuccessHandle = function () {
    form.classList.add('hidden');
  };

  var onSubmitErrorHandle = function () {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: white; color: red; line-height: 50px; padding: 25px; box-shadow: 10px 10px 0 0 rgba(0, 0, 0, 0.8); cursor: pointer;';
    node.style.position = 'absolute';
    node.style.left = '30%';
    node.style.right = '30%';
    node.style.top = '30%';
    node.style.fontSize = '30px';
    node.classList.add('modal-error');

    node.textContent = 'При отправке данных произошла ошибка.';
    document.body.insertAdjacentElement('afterbegin', node);

    var nodeIn = document.createElement('div');
    nodeIn.style = 'z-index: 101; color: black; cursor: pointer;';
    nodeIn.style.position = 'absolute';
    nodeIn.style.right = '10px';
    nodeIn.style.top = '0';
    nodeIn.style.fontSize = '16px';
    nodeIn.classList.add('modal-error__close');
    nodeIn.textContent = 'закрыть';
    node.insertAdjacentElement('afterbegin', nodeIn);
  };

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), onSubmitSuccessHandle, onSubmitErrorHandle);
    evt.preventDefault();
  });

  // close error dialog window ------------------------------------------------

  document.addEventListener('click', function (evt) {
    var target = evt.target;
    var div = document.querySelector('.modal-error');
    if (target.className === 'modal-error' || target.className === 'modal-error__close') {
      document.body.removeChild(div);
    }
  });

  buttonSetupOpen.addEventListener('click', onSetupClickOpen);
  buttonSetupOpen.addEventListener('keydown', onSetupEnterPressOpen);
})();
