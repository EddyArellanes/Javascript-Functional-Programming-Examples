/*---------------------------
*   High-Order Functions
# You always will input a function and function will output other funtion
*--------------------------*/

function createEmail(provider){
	return function (username){
		return `${username}@${provider}`
	}
}

let createEmailGmail = createEmail("gmail")
let createEmailOutlook = createEmail("outlook")

console.log(createEmailGmail("eddydeveloper"))
console.log(createEmailOutlook("eddydesigner"))