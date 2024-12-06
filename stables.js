//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ########
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                                     %% ####### #########
//                 %%% ########################### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #####
//         %%%%%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ########################################
//      %%%%%%%% ########################################
//      %%%%%%%%% #######################################
//     %%%%%%%%%% ########################################
//   %%%%%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
//  %%%%%%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %%%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##

//------------------------- Setting up shop -------------------------//

// Variables
let horses = [];
let welcomeMessage = "Welcome to my Stables, Let me know if you would like to book a tour or if you have any questions."
let lateFee = 49;
let availableStalls = 8;

//------------------------- First day -------------------------//

// We need a Horse Table
function Horse(name, nickname, age, monthlyRent, favTreat, isInside, coatColor, personality) {
this.name = name;
this.nickname = nickname;
this.age = age;
this.monthlyRent = monthlyRent;
this.favTreat = favTreat;
this.isInside = isInside;
this.coatColor = coatColor;
this.personality = personality;
this.introduction = function() {
    console.log(`This is ${this.name}, also known as ${this.nickname}. He's ${this.age} years old and his favorite treat is ${this.favTreat}.`);
}
this.yearOfBirth = function() {
    let currentYear = 2024;
    console.log(this.name + " was born in " + currentYear-this.age + ".")
}
}
// Now we need Horses
horses.push(new Horse("Charles", "Chucky", 3, 399, "chickpeas", true, "white", "playful"));
horses.push(new Horse("Lewis", "Louie", 7, 499, "cheese", false, "black", "serious"));
horses.push(new Horse("Carlos", "Smooth", 4, 449, "carrots", true, "brown", "calm"));

// Yayy More Horses
let newHorse =
    {
        name: "Estaban",
        nickname: "Stebby",
        age: 2,
        monthlyRent: 299,
        favTreat: "ginger",
        coatColor: "tan",
        personality: "nervous"
    }
    horses.push(newHorse);

// Do we need them to feed?
for (let i = 0; i < horses.length; i++) {
    horses[i].isHungry = false;
  }

//------------------------- Stable roster -------------------------//


//       name: 'Charles',
//       nickname: 'Chucky',
//       age: 3,
//       monthlyRent: 399,
//       favTreat: 'chickpeas',
//       isInside: true,
//       coatColor: 'white',
//       personality: 'playful',
//       introduction: [Function (anonymous)],
//       yearOfBirth: [Function (anonymous)],
//       isHungry: false

//       name: 'Lewis',
//       nickname: 'Louie',
//       age: 7,
//       monthlyRent: 499,
//       favTreat: 'cheese',
//       isInside: false,
//       coatColor: 'black',
//       personality: 'serious',
//       introduction: [Function (anonymous)],
//       yearOfBirth: [Function (anonymous)],
//       isHungry: false

//       name: 'Carlos',
//       nickname: 'Smooth',
//       age: 4,
//       monthlyRent: 449,
//       favTreat: 'carrots',
//       isInside: true,
//       coatColor: 'brown',
//       personality: 'calm',
//       introduction: [Function (anonymous)],
//       yearOfBirth: [Function (anonymous)],
//       isHungry: false

//       name: 'Estaban',
//       nickname: 'Stebby',
//       age: 2,
//       monthlyRent: 299,
//       favTreat: 'ginger',
//       coatColor: 'tan',
//       personality: 'nervous',
//       isHungry: false


//---------------------- Growing business ----------------------//

// How many stalls do we have?
availableStalls = availableStalls - horses.length;

// Do we need more stalls?
if (availableStalls < 2) {
    console.log("We need to build more stalls");
} else { 
    console.log(`We have ${availableStalls} stalls available!`);
}

// Knock Knock It's The Landlord
function calculateLatePayment(horses) {
    console.log(horses.name + " will owe $" + (horses.monthlyRent + lateFee) + " if rent is paid late.");
  }
calculateLatePayment(horses[0]);

// Treat Finder
let treatInHand = "carrots";
for (let i = 0; i < horses.length; i++) {
    if (horses[i].favTreat === treatInHand) {
      console.log(`${horses[i].name} loves ${treatInHand}!`);
      break;
    } else {
      console.log(`${horses[i].name} made a "yuck" face when I fed him ${treatInHand}.`);
    }
  }
// Nickname Finder
  function getNickname(index) {
    return horses[index].nickname;
  }
  console.log(getNickname(1));
//------------------------- Day to day operations -------------------------//

// Whose the Brown Horse?
function findingBrownHorse() {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].coatColor === "brown") {
          console.log(`${horses[i].name} has a ${horses[i].coatColor} coat.`);
        }
    }
}
findingBrownHorse();

// Bath The Sun
function morningStroll() {
    for (let i = 0; i < horses.length; i++) {
       if (horses[i].isInside === true) {
            horses[i].isInside = false;
            console.log(`${horses[i].name} is now outside sun bathing.`);
        }
    }
}
morningStroll();

// Location Switch
function Horse(name, nickname, age, monthlyRent, favTreat, isInside, coatColor, personality) {
    this.name = name;
    this.nickname = nickname;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.favTreat = favTreat;
    this.isInside = isInside;
    this.coatColor = coatColor;
    this.personality = personality;
  
    this.isInside = !this.isInside;
    
  }

// Time To Eat
function timeToEat() {
    for (let i = 0; i < horses.length; i++) {
        if (!horses[i].isInside)
            horses[i].isInside = true;
            console.log(`${horses[i].name} has been fed ${horses[i].favTreat}.`)
    }
}
timeToEat();

// Bedtime!
let isThereDaylight = false;
function bedTime() {
    horses.forEach(horses => {
      if (horses.isInside === false && isThereDaylight === false) {
        horses.isInside = !horses.isInside;
        console.log(`${horses.name} has been moved inside for the night.`);
      }
    });
  }