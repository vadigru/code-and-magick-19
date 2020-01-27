'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;

var getRandom = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var generateData = function (count) {
  var data = [];
  for (var i = 0; i < count; i++) {
    data[i] = {
      name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES),
      coatColor: getRandom(COAT_COLORS),
      eyesColor: getRandom(EYE_COLORS)
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

var showSetup = function () {
  var setupWindow = document.querySelector('.setup');
  var similarWizards = setupWindow.querySelector('.setup-similar-list');
  var similarWizardsBlock = setupWindow.querySelector('.setup-similar');
  similarWizards.appendChild(buildFragment(generateData(WIZARDS_COUNT)));
  setupWindow.classList.remove('hidden');
  similarWizardsBlock.classList.remove('hidden');
};

showSetup();
