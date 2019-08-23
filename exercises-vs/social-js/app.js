// Create a model to represent the database of a new social media platform you're creating. It can be about whatever you want, but it needs the following:

// At least 3 nested levels of data (including objects and arrays)
// At least 1 method
// Span across at least 50 lines of code. (No empty lines)

// After you create the base object, you need to:

// Add 2 properties to one of the objects (doesn't matter what level of nested data you do this to)
// Add 2 items to at least one of the arrays in your data

var userInformation = {
	firstName: "Randon",
	lastName: "Shaw",
	age: 29,
	cars: [],
	family: [
		{
			firstName: "Reagan",
			lastName: "Shaw",
			age: 31,
			cars: [
				{
					carMake: "Pontiac",
					carModel: "Vibe",
					carYear: 2010
				},
				{
					carMake: "Cheverolet",
					carModel: "Astro",
					carYear: 1993
				}
			]
		},
		{
			firstName: "Ryan",
			lastName: "Shaw",
			age: 37,
			cars: [
				{
					carMake: "Honda",
					carModel: "Odyssey",
					carYear: 2015
				},
				{
					carMake: "Jeep",
					carModel: "Wrangler",
					carYear: 2018
				}
			]
		}
	],
	birthday: function () {
		this.age++;
		// console.log(this.age);
	},
	userNameChange: function (newFirstName, newLastName) {
		this.firstName = newFirstName;
		this.lastName = newLastName;
	},

}
//userInformation.userNameChange("Sandy", "Smith");
// console.log(userInformation.firstName, userInformation.lastName);
userInformation.cars.push({
	carMake: "Geo",
	carModel: "Metro",
	carYear: 1990
});
console.log(userInformation.cars);
userInformation.family[1].cars[1].carType = "Sport Utility Vehicle";
console.log(userInformation.family[1].cars[1]);
console.log(userInformation);