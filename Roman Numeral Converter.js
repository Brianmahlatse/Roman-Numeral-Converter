// Define a function named 'getRoman' that takes an integer as input
function getRoman(num){
    // Create an object that maps integer values to Roman numeral strings
    const romanNumerals={
        1:'I',
        4:'IV',
        5:'V',
        9:'IX',
        10:'X',
        40:'XL',
        50:'L',
        90:'XC',
        100:'C',
        400:'CD',
        500:'D',
        900:'CM',
        1000: 'M'
    };

    // Create an empty array to store the required Roman numerals
    const requiredRomansNumbers=[];

    // Determine the number of digits in the input number
    const numberOfDigits=num.toString().length;

    // Loop through the romanNumerals object and find the Roman numerals that are less than or equal to the input number
    for(let index in romanNumerals){
        // If the current Roman numeral value is less than or equal to the input number and has the same number of digits as the input number
        if(index<=num && index.toString().length===numberOfDigits){
            // Add the current Roman numeral and its corresponding integer value to the requiredRomanNumbers array
            requiredRomansNumbers.push([parseInt(index),romanNumerals[index]]);
        };
    };

    // Return the last Roman numeral in the requiredRomanNumbers array, which is the largest Roman numeral that is less than or equal to the input number
    return requiredRomansNumbers[requiredRomansNumbers.length-1];
};


// This function takes a number as input and returns an array of its individual digits.
function getUnits(num){
    
    // Convert the number to a string so that it can be split into individual digits.
    const numStr = new String(num);
    
    // Split the string into individual digits, then map over the resulting array to convert each digit from a string to an integer.
    const numIntoUnits = numStr.split('').map(num => parseInt(num));
    
    // Return the resulting array of digits.
    return numIntoUnits;
};


function convertToRoman(num) {
     if(num>3999 || num<=0){
          return '';
     };
    // Get an array of the individual digits of the input number
    const numIntoUnits=getUnits(num);
    // Initialize an empty string to store the resulting Roman numeral
    let romanNumber='';
    // Initialize a variable to store the Roman numeral that is less than or equal to the current digit being converted
    let lessOrEqualRoman;
   
    // Loop through the individual digits of the input number
    for(let i=0;i<numIntoUnits.length;i++){
         // Get the current digit and pad it with zeroes based on its position in the number
         let currentNum=numIntoUnits[i];
         for(let j=numIntoUnits.length-1;j>i;j--){
                    currentNum+='0';
              };
        // Convert the padded current number to an integer
        currentNum=parseInt(currentNum);
        // Convert the current number to its Roman numeral equivalent using the 'getRoman' function
        // and add the resulting Roman numeral to the overall Roman numeral string
          while(currentNum!==0){
                 lessOrEqualRoman=getRoman(currentNum);
                 romanNumber+=lessOrEqualRoman[1];
                 // Subtract the value of the current Roman numeral from the current number until the current number is zero
                 currentNum-=lessOrEqualRoman[0];
           };

    };
    // Return the resulting Roman numeral string
      return romanNumber;
};

const assert = require('assert');

assert.strictEqual(convertToRoman(2), 'II');
assert.strictEqual(convertToRoman(3), 'III');
assert.strictEqual(convertToRoman(4), 'IV');
assert.strictEqual(convertToRoman(5), 'V');
assert.strictEqual(convertToRoman(9), 'IX');
assert.strictEqual(convertToRoman(12), 'XII');
assert.strictEqual(convertToRoman(16), 'XVI');
assert.strictEqual(convertToRoman(29), 'XXIX');
assert.strictEqual(convertToRoman(44), 'XLIV');
assert.strictEqual(convertToRoman(45), 'XLV');
assert.strictEqual(convertToRoman(68), 'LXVIII');
assert.strictEqual(convertToRoman(83), 'LXXXIII');
assert.strictEqual(convertToRoman(97), 'XCVII');
assert.strictEqual(convertToRoman(99), 'XCIX');
assert.strictEqual(convertToRoman(400), 'CD');
assert.strictEqual(convertToRoman(500), 'D');
assert.strictEqual(convertToRoman(501), 'DI');
assert.strictEqual(convertToRoman(649), 'DCXLIX');
assert.strictEqual(convertToRoman(798), 'DCCXCVIII');
assert.strictEqual(convertToRoman(891), 'DCCCXCI');
assert.strictEqual(convertToRoman(1000), 'M');
assert.strictEqual(convertToRoman(1004), 'MIV');
assert.strictEqual(convertToRoman(1006), 'MVI');
assert.strictEqual(convertToRoman(1023), 'MXXIII');
assert.strictEqual(convertToRoman(2014), 'MMXIV');
assert.strictEqual(convertToRoman(3999), 'MMMCMXCIX');
