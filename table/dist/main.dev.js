"use strict";

function _load() {
  var name = document.querySelector('#name');
  var email = document.querySelector('#email');
  var date = document.querySelector('#date');
  var num = document.querySelector('#num');
  /*
  const nameLabel = document.querySelector('[for="name"]');
  const emailLabel = document.querySelector('[for="email"]');
  const dateLabel = document.querySelector('[for="date"]');
  const numLabel = document.querySelector('[for="num"]');
  */

  var inputs = document.querySelectorAll('.col input');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var inp = _step.value;
      inp.required = true;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  email.addEventListener('blur', function () {
    var wrong = document.getElementById("wrong-format-msg");

    if (email.validity.valid === false) {
      //console.log("Nem valid")
      wrong.textContent = "Wrong email format";
    } else {
      //console.log("Valid")
      wrong.textContent = "";
    }
  });
  var b_time = new Date(Date.now() + 120 * 60000);
  date.min = b_time.toISOString().substr(0, 16);
  date.addEventListener('blur', function () {
    b_time = new Date(Date.now() + 120 * 60000);
    date.min = b_time.toISOString().substr(0, 16);
  });
  var btn = document.querySelector('input[type="button"]');
  btn.addEventListener("click", function () {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = inputs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var ip = _step2.value;
        console.log(ip.value);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  });
}

window.addEventListener('load', _load);