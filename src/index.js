"use strict";

const fibonacci = () => {
  let array = [0, 1]; //vou guardar a série aqui
  let [currentLength, a1, a2, newElement] = [2, 0, 1, 0];

  while (newElement < 350) {
    newElement = a1 + a2;
    array = array.concat(newElement);
    currentLength += 1;
    a1 = a2;
    a2 = newElement;
  }
  return array;
};

const isFibonnaci = (num) => {
  let array = fibonacci();
  return array.includes(num);
};

console.log(fibonacci());

module.exports = {
  fibonacci,
  isFibonnaci,
};
