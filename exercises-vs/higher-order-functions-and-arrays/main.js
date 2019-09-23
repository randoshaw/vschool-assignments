const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  // for(let i = 0; i < companies.length; i++) {
  //     console.log(companies[i]);
  // }


//  FOREACH

// companies.forEach(function(company) {
//   console.log(company);
// })

//////////

// FILTER

// Get all ages 21 and over
// longest way:
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// good way:
// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// });

// best way - es6 arrow function:
// const canDrink = ages.filter(age => age >= 21);

// console.log(canDrink);

// Filter retail companies:

// Long way:
// const retailCompanies = companies.filter(function(company){
//   if(company.cagegory === 'Retail') {
//     return true;
//   }
// });

// console.log(retailCompanies);

// ES6 arrow function:
// const retailCompanies = companies.filter(company => company.category === 'Retail');

// console.log(retailCompanies);

// Filter all companies from the 80s

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// console.log(eightiesCompanies)

// Filter all companies that lasted 10 years or more

// const lastedTenYears = companies.filter(company => (company.end - company.start > 10));

// console.log(lastedTenYears)

//////////

// MAP -create new arrays from current arrays

// Create array of company names
// const companyNames = companies.map(function(company) {
//   return company.name;
// });

// console.log(companyNames)

// console.log(companyNames)

const testMap = companies.map(function(company) {
  return 1;
})

console.log(testMap);