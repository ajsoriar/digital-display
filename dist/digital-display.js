/**
 * digital-display
 * Javascript library to draw 7-segment displays
 * @version v1.0.0 - 2019-04-28
 * @link https://github.com/ajsoriar/digital-display
 * @author Andres J. Soria R. <ajsoriar@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
 
function DigitalDisplay(text, conf) {
  "use strict";

  var digitWidth = 100;
  var BASE_UNIT = 10;

  this.draw = function() {
      console.log("!");
  }

  this.addDigits = function(num, str) {

  };

  this.getWidth = function() {
      return acc;
  };

  this.getHeight = function() {
      return acc;
  };

  this.domEl = null;

  var acc = 0;

  var accWidth = function(num) {
      if (num != null) acc += num * 1;
      return acc;
  };

  function drawDisplayDigit(x, y) {
      if (!x) x = 0;
      if (!y) y = 0;

      x = x + acc;
      accWidth(digitWidth);
      var str = '';
      str += '<div class="text" style="position:absolute; top: ' + y + 'px; left: ' + x +
          'px;" data-text="Hi hello man!">' +
          '<div class="display-digit" data-display="H" data-position="1" style="position: absolute; top:0; left: 0">' +
          '<div data-segment="a" style="" class="segment segment-a"></div>' +
          '<div data-segment="b" style="" class="segment segment-b"></div>' +
          '<div data-segment="c" style="" class="segment segment-c"></div>' +
          '<div data-segment="d" style="" class="segment segment-d"></div>' +
          '<div data-segment="e" style="" class="segment segment-e"></div>' +
          '<div data-segment="f" style="" class="segment segment-f"></div>' +
          '<div data-segment="g" style="" class="segment segment-g"></div>' +
          '</div>' +
          '</div>';
      return str;
  }

  function drawSpecialCharacter(x, y, char) {
      if (!x) x = 0;
      if (!y) y = 0;
      x = x + acc;
      accWidth(60);
      var str = '';
      if (char === ':') {
          str += '<div class="text" style="position:absolute; top: ' + y + 'px; left: ' + x +
              'px;" data-text="Hi hello man!">' +
              '<div class="display-colon" data-display="H" data-position="1" style="position: absolute; top:0; left: 0">' +
              '<div data-segment="a" style="" class="segment on dot-up"></div>' +
              '<div data-segment="b" style="" class="segment on dot-down"></div>' +
              '</div>' +
              '</div>';
      } else {

      }
      return str;
  }

  function getCharacterSegment(c, n) {
      var r = 0;
      var num = {
          "index": "abcdefg",
          0: "1111110",
          1: "0110000",
          2: "1101101",
          3: "1111001",
          4: "0110011",
          5: "1011011",
          6: "0011111",
          7: "1110000",
          8: "1111111",
          9: "1110011",
          " ": "0000000",
          "a": "1110111",
          "b": "0011111",
          "c": "1001110",
          "d": "0111101",
          "e": "1101111",
          "f": "1000111",
      };
      r = num[c].charAt(n) * 1
      console.log(r);
      return r;
  }

  function turnSegmentOn(el) {

      el.classList.add("on");
  }

  function turnSegmentOff(el) {
      el.classList.remove("on");
  }

  function isSpecialCharacter(char) {
      if (char === ":") return true;
  }

  function printDigit(el, character, udateOffSegments) {
      console.log(character);

      if (isSpecialCharacter(character)) {
          return
      }

      var segments = el.children[0].children;

      for (var segmentNum = 0; segmentNum < segments.length; segmentNum++) {
          if (getCharacterSegment(character, segmentNum)) {
              turnSegmentOn(segments[segmentNum]);
          } else {
              if (udateOffSegments != false) turnSegmentOff(segments[segmentNum]);
          }
      }
  }

  var that = this;

  this.displayText = function(text) {
      console.log("displayText() text:", text);
      var lon = text.length;
      var i;
      var digits = that.domEl.children;
      for (i = 0; i < lon; i++) {
          printDigit(digits[i], text[i]);
      }
  };

  function createEl(text, conf) {
      console.log("createEl() text:", text);
      var lon = text.length;
      var id = "digital-display-" + Date.now();
      var target;

      if (conf.el) {
          target = document.getElementById(conf.el);
          if (conf.class) target.setAttribute("class", conf.class);
          var node = document.createElement('div');
          target.appendChild(node);
          that.domEl = target.children[0];
          console.log(that.domEl);
      } else {
          that.domEl = document.createElement('div');
      }

      that.domEl.setAttribute("id", id);
      that.domEl.setAttribute("class", "digital-display");
      that.domEl.style.position = "absolute";
      that.domEl.style.top = conf.y + "px";
      that.domEl.style.left = conf.x + "px";
      var str = '',
          i, c;
      for (i = 0; i < lon; i++) {
          c = text.charAt(i);
          if (isSpecialCharacter(c)) {
              str += drawSpecialCharacter(i, 0, c);
          } else
              str += drawDisplayDigit(i, 0);
      }

      that.domEl.innerHTML = str;
      if (conf.el) {

      } else {
          document.body.appendChild(that.domEl);
      }

      that.displayText(text);
      if (conf.width) {
          var scale;
          scale = "0.5";
          scale = accWidth() / conf.width;
          scale = conf.width / accWidth();
          that.domEl.style.transform = 'scale(' + scale + ')';
      }
  };

  createEl(text, conf);
  return this;
}