'use strict';

module.exports.generaterandomnumber = async (event) => {
  const randomNumber = parsel(Math.random()*100)
  console.log("The random generated integer is: ".randomNumber);
  return randomNumber;
}