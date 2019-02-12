# number-finder
https://img.shields.io/apm/l/:packageName.svg
https://img.shields.io/github/manifest-json/v/:user/:repo.svg
A Node.js package that check and extract all the available numbers in from the given string. And return all the possible different combinations and format for the numbers containing in input string.
A basis number finder npm package.


## Usage

First, install the package using npm:

    npm install number-finder --save

Then, require the package and use it like so:

    var numberfinder = require('number-finder');

    OR

    import numberfinder from 'number-finder';

    console.log(numberfinder("this3545is4235number-extractor43789example")); 
   result:-

   numberTypeArray: [3545, 4235, 43789]

   numberTypeNumberArray: [3, 5, 4, 5, 4, 2, 3, 5, 4, 3, 7, 8, 9]

   numberTypeNumberSet: 3545423543789

   stringTypeArray: ["3545", "4235", "43789"]

   stringTypeNumberArray: ["3", "5", "4", "5", "4", "2", "3", "5", "4", "3", "7", "8", "9"]

   stringTypeNumberSet: "3545423543789"


## License

MIT