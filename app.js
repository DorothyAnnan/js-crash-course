// Declaring a variable
// keyword identifier/variableName = value;
var firstName = "Dorothy";
let lastName = "Annan";
let age = 27;
let isMarried = true;
let children = ["Charity", "Ebenezer", "Dora"];
let other = {
    favoriteColor:"Gold",
    favoriteSport:"Volleyball",
    favoriteFruit:"Pear",
};
const fullName = firstName + " " + lastName; //concatenation
const mySelf = `My name is ${firstName} ${lastName}.`;
console.log(mySelf);

// STRINGS
let sentence = "This is a story about my programming journey";
console.log(sentence.length);
console.log(sentence.split(" "));
console.log(sentence.replace("Dorothy", "Dora"));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.startsWith("T"));
console.log(sentence.endsWith("Journey"));
console.log(sentence.includes("Story"));

// ARRAY
let days = ["Monday", "Tuesday", "Wednday", "Thursday", "Friday"];
console.log(days.length);
days.push("Saturday");
console.log(days);
console.log(days.pop());
days.unshift("Sunday");
console.log(days);
console.log(days.shift());
console.log(days.indexOf("Sunday"));
console.timeLog(days[5]);  //retrieving Data
days[5]="Sunday";
console.timeLog(days);

//OBJECT
let person = {
    firstName : "Dorothy",
    lastName : "Annan",
    age :27,
};
console.log(person["firstName"]);
console.log(person.firstName);
console.log(object.keys(person));
console.log(object.values(person));
console.log(object.entries(person));




