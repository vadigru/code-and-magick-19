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
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: white; color: red; line-height: 50px; padding: 25px; box-shadow: 10px 10px 0 0 rgba(0, 0, 0, 0.8); cursor: pointer;';
    node.style.position = 'absolute';
    node.style.left = '30%';
    node.style.right = '30%';
    node.style.top = '15%';
    node.style.fontSize = '30px';
    node.classList.add('modal-error');
    node.textContent = errorMessage;
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

  window.backend.load(onLoadSuccessHandle, onLoadErrorHandle);
})();
