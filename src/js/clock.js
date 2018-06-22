(() => {
  const $clock = document.querySelector('.js_clock');

  const convertDigitInArray = num => {
    const arr = [];
    switch (num) {
      case 0:
        arr.push(0, 1, 2, 3, 4, 5);
        break;
      case 1:
        arr.push(1, 2);
        break;
      case 2:
        arr.push(0, 1, 6, 4, 3);
        break;
      case 3:
        arr.push(0, 1, 2, 3, 6);
        break;
      case 4:
        arr.push(5, 6, 1, 4);
        break;
      case 5:
        arr.push(0, 5, 6, 2, 3);
        break;
      case 6:
        arr.push(0, 2, 3, 4, 5, 6);
        break;
      case 7:
        arr.push(0, 1, 2);
        break;
      case 8:
        arr.push(0, 1, 2, 3, 4, 5, 6);
        break;
      case 9:
        arr.push(0, 1, 2, 3, 5, 6);
        break;
    }
    return arr;
  };

  const displayDigit = (arr) => {
    const $digitItems = document.querySelectorAll('.digit__item');

    for (let i = 0; i < $digitItems.length; i++) {
      $digitItems[i].style.opacity = '0';
      arr.forEach(item => {
        if ($digitItems[i].classList.contains(`digit__item--${item}`)) {
          $digitItems[i].style.opacity = '1';
        }
      });
    }
  };

  displayDigit(convertDigitInArray(5));
})();