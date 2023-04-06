# Roman-Numeral-Converter

This is a JavaScript function that converts an integer to a Roman numeral. The function takes an integer as input and returns a string that represents the Roman numeral equivalent of the input integer.
Usage

To use this function, simply call the convertToRoman() function and pass in an integer as the input. The function will return a string that represents the Roman numeral equivalent of the input integer.

How it Works

The convertToRoman function works by first breaking down the input integer into its individual digits, and then converting each digit to its corresponding Roman numeral representation. The Roman numerals are defined in an object that maps integer values to Roman numeral strings. The function loops through this object and finds the largest Roman numeral that is less than or equal to the input integer, and then subtracts the value of that Roman numeral from the input integer. This process is repeated until the input integer has been completely converted to Roman numerals.

Examples

Here are some examples of how to use this function:

const romanNumeral1 = convertToRoman(1);
console.log(romanNumeral1); // Output: 'I'

const romanNumeral2 = convertToRoman(3999);
console.log(romanNumeral2); // Output: 'MMMCMXCIX'

const romanNumeral3 = convertToRoman(2022);
console.log(romanNumeral3); // Output: 'MMXXII'

Limitations

This function is designed to work with integers between 1 and 3999. If an input integer outside of this range is provided, the function will return an empty string.


Credits

This project was created by Brian Mahlatse Malau as a solution to the Roman Numeral Converter challenge on freeCodeCamp.
