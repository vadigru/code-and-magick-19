'use strict';
(function () {
  var renderWizards = function (obj) {
    var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var templateElement = template.cloneNode(true);
    templateElement.querySelector('.setup-similar-label').textContent = obj.name;
    templateElement.querySelector('.wizard-coat').style.fill = obj.colorCoat;
    templateElement.querySelector('.wizard-eyes').style.fill = obj.colorEyes;
    return templateElement;
  };

  var buildFragment = function (array) {
    var fragment = document.createDocumentFragment();
    array.forEach(function (item) {
      fragment.appendChild(renderWizards(item));
    });
    return fragment;
  };

  var showWizards = function (arr) {
    var similarWizardsBlock = document.querySelector('.setup-similar');
    var similarWizards = similarWizardsBlock.querySelector('.setup-similar-list');
    similarWizards.textContent = '';
    similarWizards.appendChild(buildFragment(window.util.shuffleArray(arr).slice(0, window.const.WIZARDS_COUNT)));
    similarWizardsBlock.classList.remove('hidden');
  };

  var onLoadSuccessHandle = function (data) {
    showWizards(data);
  };

  var onLoadErrorHandle = function (errorMessage) {
    window.util.onErrorHandler(errorMessage);
  };

  window.backend.load(onLoadSuccessHandle, onLoadErrorHandle);
})();
