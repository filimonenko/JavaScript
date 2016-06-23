
//imitation function indexOf
function findInArr(arr, el) {
  var found = -1;
  for (var i = 0; i < arr.length; i++) {
     if (arr[i] === el) {
        found = i;
        break;
     }
  }
  return found;
}

var arrayTestFunctionfindInArr = [10,20,45,7,12,45];
console.log(findInArr(arrayTestFunctionfindInArr, 45));

//imitation function lastIndexOf
function findInArrFronTheEnd(arr, el){
	var found = -1;
	for (var i = arr.length - 1; i >= 0; i--) {
		if (arr[i] === el) {
			found = i;
			break;
		}
	}
	return found;
}

var arrayTestFunctionfindInArrFronTheEnd = [10,20,45,7,45,12];
console.log(findInArrFronTheEnd(arrayTestFunctionfindInArrFronTheEnd, 45));

/*imitation function reverse
method 1*/
function reverse1(arr) {
  var result = [];
  for (var i = arr.length - 1; i >= 0; i--) {
  	result.push(arr[i])
  }
  return result;
}

// method 2  low performance
function reverse2(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
  	result.unshift(arr[i])
  }
  return result;
}

var arrayTestFunctionReverse = [1,2,3,4,5,6,7,8,9,10,11];
console.log(reverse1(arrayTestFunctionReverse));
console.log(reverse2(arrayTestFunctionReverse));

// function returns an array of multiple numbers
function aliquot(arr, num) {
  var arrayMultipleNumbers = [];
  for (var i = 0; i < arr.length; i++) {
  	if (arr[i] % num === 0 ) {
  		arrayMultipleNumbers.push(arr[i])
  	}
  }
  return arrayMultipleNumbers;
}
var arrTestFunctionAliquot = [10, 20, 30, 44, 77, 13, 25];

console.log(aliquot(arrTestFunctionAliquot, 5));

//  function returns all equals numbers indexes
function indexOfAllElements (arr, num){
	var arrIndexes = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === num){
			arrIndexes.push(i);
		}
	}
	return arrIndexes
}

var arrTestFunctionIndexOfAllElements = [10, 20, 30, 44, 77, 13, 44, 25, 44];
console.log(getindexesEquivalentNumbers(arrTestFunctionGetindexesEquivalentNumbers, 44))