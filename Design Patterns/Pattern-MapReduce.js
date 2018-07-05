/*---------------------------
*   Functional Programming
*--------------------------*/
//Pattern in Old Js
let numbers = [34, 56, 78]
numbers.map(function(number){
	return Math.pow(number, 2)
})
console.log(numbers)

//Pattern using Arrow Functions and Implicit Return
let newNum = numbers.map( number => Math.pow(number, 2))
console.log(newNum)


/*---------------------------
*   Imperative Programming
*--------------------------*/
let numbers2 = [32,12,12]
//Inmpure Function, it's polished the numbers2
function transformNumbers(numbers2){
	for(let i=0; i<numbers2.length; i++){
		numbers[i] = Math.pow(numbers[i], 2)
	}
}
console.log(transformNumbers(numbers2))