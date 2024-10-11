// Lesson-3 Code
let horseName = "Tatum" ;
console.log(horseName);
horseName = "Simba";
console.log(horseName);
let horseAge = 3;
console.log(horseAge);
let isHorseInside = true;
console.log(isHorseInside);

// Lesson-4 Code
console.log(typeof 67848);
const STABLE_MONTHLY_FEE = 9975;
console.log(STABLE_MONTHLY_FEE); // Constant declared

console.log(STABLE_MONTHLY_FEE*3);
console.log("Your Monthly Stable Fee is " + (STABLE_MONTHLY_FEE*3 - 20)); // concatenation
console.log("whats "+"happenin");
console.log(`My Horse's name is "${horseName}" and costs $${STABLE_MONTHLY_FEE} to ride per month`);

    // Lab FOUR
horseName = "Nickolas";
let horseNickname = "Nic";
console.log(`My Horse's name is ${horseName} but his nickname is ${horseNickname}`);
console.log("Usually 3 month stay is $" + (STABLE_MONTHLY_FEE*3) + ", but with a 10% discount it would be $" + (STABLE_MONTHLY_FEE*3)*0.10);

// Lesson 5
let visitingHorseName = "Mushroom";

if (visitingHorseName === "Mushroom") {
    console.log( visitingHorseName + " has come to visit the stables");
} else {
    console.log(horseName + " is lonely");
}
    // Lab 5
if (isHorseInside) {
    console.log (horseName + " is outside");
} else {
    console.log(horseName + " is inside");
}

// Lesson 6
let word = "Wordd";
console.log(word.charAt(2));

let horseNames = [horseName, visitingHorseName, "Fluffy"];
let horseAges = [horseAge, 23, 18];
let horseLocation = [isHorseInside, false, true];
console.log(horseNames.length);
console.log(horseNames);
horseNames.push("Bradd");
console.log(horseNames);
console.log(horseNames.length);
console.log(horseNames[2]);
console.log(horseAges[2]);
console.log(`Welcome to my stable, there are ${horseNames.length} horses in my stable right now. Their names are ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}, ${horseNames[3]}`);
if(horseLocation[2]) {
    console.log(horseNames[2] + " is inside");
}

console.log( );
    // Lab 6
    horseLocation.push(true);
    horseAges.push(86);
    let horseLocationName = ["inside", "outside"] ;
    console.log(`Do you want to meet the horses in my stable? Well you have to, ITS NOT A CHOICE! 
I have ${horseNames.length} right now. There names are ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}, ${horseNames[3]}.`);
        console.log(`${horseNames[0]}, ${horseNames[2]} and ${horseNames[3]} are ${horseLocationName[0]} but ${horseNames[1]} is ${horseLocationName[1]}.`); 