# number-seprator

A Node.js package that check and extract all the available numbers in from the given string. And return all the possible different combinations and format for the numbers containing in input string.
A basis number seprator npm package.


## Usage

First, install the package using npm:

    npm install number-seprator --save

Then, require the package and use it like so:

    var numberSeprator = require('number-seprator');

    OR

    import numberSeprator from 'number-seprator';

    console.log(numberSeprator("this3545is4235number-extractor43789example")); 
   result:-

   numberTypeArray: (3) [3545, 4235, 43789]

   numberTypeNumberArray: (13) [3, 5, 4, 5, 4, 2, 3, 5, 4, 3, 7, 8, 9]

   numberTypeNumberSet: 3545423543789

   stringTypeArray: (3) ["3545", "4235", "43789"]

   stringTypeNumberArray: (13) ["3", "5", "4", "5", "4", "2", "3", "5", "4", "3", "7", "8", "9"]

   stringTypeNumberSet: "3545423543789"


## License

MIT