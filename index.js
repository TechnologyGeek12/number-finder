module.exports = function numberSeparator(string) {
  if (typeof string !== "string") throw new TypeError("Number Extractor wants a string!");
  if (!isNaN(parseInt(string.replace(/\D/g, '')))) {
    let numberTypeArray = string.match(/\d+/g).map(Number);
    let stringTypeArray = string.match(/\d+/g);
    let stringTypeNumberSet = string.replace(/\D/g, '');
    let numberTypeNumberSet = parseInt(string.replace(/\D/g, ''));
    let stringTypeNumberArray = string.replace(/\D/g, '').split('');
    let numberTypeNumberArray = string.replace(/\D/g, '').split('').map(Number);
    return { stringTypeNumberSet, numberTypeNumberSet, stringTypeArray, numberTypeArray, stringTypeNumberArray, numberTypeNumberArray };
  }
  else
    return { stringTypeNumberSet: "", numberTypeNumberSet: "", stringTypeArray: [], numberTypeArray: [], stringTypeNumberArray: [], numberTypeNumberArray: [] }
};