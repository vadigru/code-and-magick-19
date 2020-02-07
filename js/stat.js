'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_TEXT_X = 120;
  var CLOUD_TEXT_Y = 40;
  var GAP = 10;
  var BAR_WIDTH = 40;
  var BAR_X = 140;
  var BAR_Y = 100;
  var BAR_TEXT_TOP = 90;
  var BAR_TEXT_BOTTOM = 260;
  var BAR_SPACE = 50;
  var BAR_DEFAULT_HEIGHT = 150;

  var renderRect = function (ctx, x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  var renderText = function (ctx, text, x, y, color, fontFace) {
    ctx.fillStyle = color || 'rgba(0, 0, 0, 1)';
    ctx.font = fontFace || '16px PT Mono';
    ctx.fillText(text, x, y);
  };

  var getMaxNumber = function (array) {
    var max = array[0];
    array.forEach(function (item) {
      if (item > max) {
        max = item;
      }
    });
    return max;
  };

  var getBarHeight = function (value, array) {
    return Math.round(value * BAR_DEFAULT_HEIGHT / getMaxNumber(array));
  };

  var getRandomSaturation = function () {
    return Math.floor(Math.random() * 100);
  };

  var selectColor = function (el) {
    return (el === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(245,' + getRandomSaturation() + '%, 50%)';
  };

  window.renderStatistics = function (ctx, names, times) {
    renderRect(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
    renderRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(255, 255, 255, 1)');
    renderText(ctx, 'Ура вы победили!', CLOUD_TEXT_X, CLOUD_TEXT_Y);
    renderText(ctx, 'Список результатов:', CLOUD_TEXT_X, CLOUD_TEXT_Y + GAP + GAP);
    names.forEach(function (item, i) {
      var barColor = selectColor(item);
      var barHeight = getBarHeight(times[i], times);
      renderRect(ctx, BAR_X + BAR_WIDTH * i + BAR_SPACE * i, BAR_Y + BAR_DEFAULT_HEIGHT - barHeight - GAP, BAR_WIDTH, barHeight, barColor);
      renderText(ctx, Math.round(times[i]), BAR_X + BAR_WIDTH * i + BAR_SPACE * i, BAR_TEXT_TOP + BAR_DEFAULT_HEIGHT - barHeight - GAP);
      renderText(ctx, item, BAR_X + BAR_WIDTH * i + BAR_SPACE * i, BAR_TEXT_BOTTOM);
    });
  };
})();
