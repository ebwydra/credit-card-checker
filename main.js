// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
function validateCred(array) {
  var newArray = [];
  var sum = 0;
  for (i = array.length - 1; i >= 0; i--) {
    if ((array.length - 1 - i) % 2 === 0) {
      newArray.push(array[i]); // add the number as is
    } else {
      let valueToAdd = array[i] * 2; // double the number
      if (valueToAdd > 9) { // but if the number is now > 9...
        valueToAdd = valueToAdd - 9; // ...subtract 9
      };
      newArray.push(valueToAdd); // add that digit to the array
    }
  }
  // console.log(newArray);
  for (j = 0; j < newArray.length; j++) { // iterate through newArray
    sum += newArray[j]; // add to the sum
  }
  if (sum % 10 === 0) { // check if the sum is divisible by 10
    return true; // if it is, the number is valid
  } else {
    return false; // if it's not, the number isn't valid!
  }
}

function findInvalidCards(nestedArray) {
  let invalidCards = []; // empty array
  for (let k = 0; k < nestedArray.length; k++) {
    // console.log(validateCred(nestedArray[k]))
    if (validateCred(nestedArray[k]) === false) {
      invalidCards.push(nestedArray[k]);
    }
  }
  return invalidCards; // return a nested array of invalid cards
};

// console.log(findInvalidCards(batch))
// console.log(findInvalidCards(batch).length)

function idInvalidCardCompanies(arrayOfInvalidCards) {
  let arrayOfCompanies = []; // array of credit card companies
  for (let l = 0; l < arrayOfInvalidCards.length; l++) { // iterate through invalid cards
    switch(arrayOfInvalidCards[l][0]) { // check the first digit
      case 3: // 3 corresponds to Amex
        if (!arrayOfCompanies.includes('Amex')) { // if Amex is not in the array already...
          arrayOfCompanies.push('Amex'); // ...add it
        }
        break;
      case 4: // 4 corresponds to Visa
        if (!arrayOfCompanies.includes('Visa')) {
          arrayOfCompanies.push('Visa');
        }
        break;
      case 5: // 5 corresponds to Mastercard
        if (!arrayOfCompanies.includes('Mastercard')) {
          arrayOfCompanies.push('Mastercard');
        }
        break;
      case 6: // 6 corresponds to Discover
        if (!arrayOfCompanies.includes('Discover')) {
          arrayOfCompanies.push('Discover');
        }
        break;
      default: // if it's some other digit...
        console.log('Company not found!')
    }
  }
  return arrayOfCompanies; // an array of strings
}

// Get a nested array of invalid card numbers
invalidCards = findInvalidCards(batch)
// Get an array of the companies
companies = idInvalidCardCompanies(invalidCards)
// Log it to the console
console.log(companies)
