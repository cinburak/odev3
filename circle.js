// circle.js

const circleArea = (r) => {
  console.log(`Dairenin Alanı: ${(Math.PI * r * r).toFixed(2)}`);
};

const circleCircumference = (r) => {
  console.log(`Dairenin Çevresi: ${(2 * Math.PI * r).toFixed(2)}`);
};

module.exports = {
  circleArea,
  circleCircumference
};
