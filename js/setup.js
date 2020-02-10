'use strict';
(function () {
  var generateData = function (count) {
    var data = [];
    for (var i = 0; i < count; i++) {
      data[i] = {
        name: window.util.getRandom(window.const.WIZARD_NAMES) + ' ' + window.util.getRandom(window.const.WIZARD_SURNAMES),
        coatColor: window.util.getRandom(window.const.COAT_COLORS),
        eyesColor: window.util.getRandom(window.const.EYE_COLORS)
      };
    }
    return data;
  };

  var renderWizards = function (obj) {
    var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var templateElement = template.cloneNode(true);
    templateElement.querySelector('.setup-similar-label').textContent = obj.name;
    templateElement.querySelector('.wizard-coat').style.fill = obj.coatColor;
    templateElement.querySelector('.wizard-eyes').style.fill = obj.eyesColor;
    return templateElement;
  };

  var buildFragment = function (array) {
    var fragment = document.createDocumentFragment();
    array.forEach(function (item) {
      fragment.appendChild(renderWizards(item));
    });
    return fragment;
  };

  var showWizards = function () {
    var similarWizardsBlock = document.querySelector('.setup-similar');
    var similarWizards = similarWizardsBlock.querySelector('.setup-similar-list');
    similarWizards.textContent = '';
    similarWizards.appendChild(buildFragment(generateData(window.const.WIZARDS_COUNT)));
    similarWizardsBlock.classList.remove('hidden');
  };

  showWizards();
})();
