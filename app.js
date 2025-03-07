
//TODO: save file for self and remove comments for submission


const pokemon = require('./data.js');

// console.dir(pokemon, { maxArrayLength: null })



const game = {
    party: [],
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],

    gymStatus() {
        const gameTally = {completed: 0, incomplete: 0};

        for (i = 0; i < this.gyms.length; i++) {
            if(this.gyms[i].completed === true) {
                gameTally.completed += 1
            }
            if (this.gyms[i].completed === false) {
                gameTally.incomplete += 1
            }
        }
        console.log(gameTally);
    },

    partyCount() {
        let partyCount = 0
        for (i = 0; i < this.party.length; i++) {
            partyCount += 1
        }
        return partyCount
    }
}




/*
Title: Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = 'Hard'
console.log(game)


/*
Title: Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

// //Title: slice the chosen index into new object array
game.party = pokemon.slice(6,7)

//Todo: get back to this

// for (i = 0; i < pokemon.length; i++) {
//     if (pokemon[i].name === "Bulbasaur") {
//         game.party = pokemon[i].slice(pokemon[i], i = 1)
//     }
// }
console.log(game.party)


/*
Title: Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/


//Title: using .push() to add current index pokemon into array based on the condition in for loop
for (i = 0; i < pokemon.length; i++) {
    if (pokemon[i].type === "fire" && pokemon[i].starter === true && game.party.length <= 3  ) {
        game.party.push(pokemon[i])
    }
    if (pokemon[i].type === "electric" && pokemon[i].starter === true && game.party.length <= 3  ) {
        game.party.push(pokemon[i])
    }
}
console.log(game.party)
//
// /*
// Title: Exercise 6
// 1. Set the `completed` property to true for gyms with a difficulty below 3.
// 2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.
//
//
// Solve Exercise 6 here:
// */
//
for (i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty <= 3) {
        game.gyms[i].completed = true
    }
}

console.log(game.gyms)
//
//
//
// /*
// Title: Exercise 7
// 1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
// 2. How would you replace the current starter Pokémon in your party with its evolved form?
//
// Hint:
//   - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
//   - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
//   - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
//   - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu
//
// More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another.
//
//
// Solve Exercise 7 here:
// */
//
for (i = 0; i < pokemon.length; i++) {
    for(j = 0; j < game.party.length; j++) {
        if(pokemon[i] === game.party[j]) {
            i+=1
            game.party.splice(j,1,pokemon[i])
        }
    }
}
console.log(game.party)

//
// /*
// Title: Exercise 8
// 1. Print the name of each Pokémon in your party.
// 2. Consider using a loop or an array method to access each Pokémon's name.
//
// Solve Exercise 8 here:
// */
//
for (i = 0; i < game.party.length; i++) {
    console.log(game.party[i].name)
}
//
//
// /*
// Title: Exercise 9
// 1. Can you print out all the starter Pokémon from the `pokemon` array?
// 2. Think about how you can identify a starter Pokémon and then log their names.
//
//
// Solve Exercise 9 here:
// */
//
//
pokemon.forEach((choice)=> {
    if(choice.starter === true){
        console.log(choice)
    }
})
//
// /*
// Title: Exercise 10
// Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
//   - Accept an object as a parameter called `pokemonObj`
//   - Add the `pokemonObj` to the `game.party` array.
//   - not return anything
//
// After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
//
// Solve Exercise 10 here:
// */
//
game.catchPokemon = function(pokemonObj) {
    game.party.push(pokemonObj)
}

game.catchPokemon(pokemon[10])
console.log(game.party)
//
//
//
// /*
// Title: Exercise 11
// 1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
// 2. How will you find and update the quantity of pokeballs in the `game.items` array?
//
// Tips:
// For this exercise, it's okay to have a negative number of pokeballs.
// After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
// Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.
//
// Solve Exercise 11 here:
// */
//
//
game.catchPokemon = function(pokemonObj) {
    game.party.push(pokemonObj)
    game.items[1].quantity -=1
}

game.catchPokemon(pokemon[10])

console.log(game.items)
//
//
// /*
// Title: Exercise 12
// 1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
//  (change the value of `complete` in the qualifying objects from false to true).
//
// Solve Exercise 12 here:
// */
//
//
for(i = 0; i< game.gyms.length; i++) {
    if(game.gyms[i].difficulty <= 6) {
        game.gyms[i].completed = true
    }
}

console.log(game.gyms)
//
//
//
//
// /*
// Title: Exercise 13
// 1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
// 2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.
//
// This method should:
//   - Not accept any arguments.
//   - Initially create a constant `gymTally`, which is an object that has two
//     properties: `completed` and `incomplete`, both of which are initially set to 0.
//   - Iterate through the objects in the `game.gyms` array and update the
//     properties on `gymTally` as follows:
//     - `completed` should count how many gyms in the array have a value of `true`
//       for their `completed` property.
//     - `incomplete` should count how many gyms in the array have a value of
//       `false` for their `completed` property.
//   - Log the value of `gymTally`.
//   - The method should not return anything.
//
// For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.
//
// Solve Exercise 13 here:
// */
//
//
//
//
game.gymStatus()
console.log(game.gyms)
//
//
//
// /*
// Title: Exercise 14
// 1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.
//
// This method should:
//   - Not accept any arguments.
//   - Count the number of Pokemon in the party.
//   - return the found number of Pokemon in the party.
//
// Solve Exercise 14 here:
// */
//
//
console.log(game.partyCount())
//
//
// /*
// Title: Exercise 15
// 1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
// (change the value of `complete` in the qualifying objects from false to true).
//
// Solve Exercise 15 here:
// */
//
for(i = 0; i< game.gyms.length; i++) {
    if(game.gyms[i].difficulty <= 8) {
        game.gyms[i].completed = true
    }
}

console.log(game.gyms)
game.gymStatus()


// Test for the difficulty property
console.assert(game.difficulty === 'Hard', 'Test Failed: Difficulty should be Hard');

// Test for adding a Pokémon to the party (Exercise 4)
console.assert(game.party.length === 1, 'Test Failed: Party should contain one Pokémon after adding the starter');

// Test for adding more Pokémon to the party (Exercise 5)
console.assert(game.party.length === 3, 'Test Failed: Party should contain three Pokémon after adding more');

// Test for gym completion status (Exercise 6)
let completedGyms = game.gyms.filter(gym => gym.completed === true).length;
console.assert(completedGyms === 3, 'Test Failed: Three gyms with difficulty below or equal to 3 should be marked completed');

// Test for evolving Pokémon (Exercise 7)
let evolvedPokemon = game.party.some(pokemon => pokemon.name === "Ivysaur" || pokemon.name === "Charmeleon" || pokemon.name === "Wartortle" || pokemon.name === "Raichu");
console.assert(evolvedPokemon === true, 'Test Failed: Starter Pokémon should evolve in the party');

// Test for the `catchPokemon` method (Exercise 10)
let beforeCatch = game.party.length;
game.catchPokemon(pokemon[10]); // Catch another Pokémon
console.assert(game.party.length === beforeCatch + 1, 'Test Failed: Party should contain one more Pokémon after catching');

// Test for decrementing the number of Pokéballs after catching a Pokémon (Exercise 11)
let beforeCatchPokeballs = game.items[1].quantity;
game.catchPokemon(pokemon[11]); // Catch another Pokémon
console.assert(game.items[1].quantity === beforeCatchPokeballs - 1, 'Test Failed: Pokéball quantity should decrease by 1 after catching a Pokémon');

// Test for gym completion status (Exercise 12)
let completedGymsAfterDifficulty6 = game.gyms.filter(gym => gym.completed === true).length;
console.assert(completedGymsAfterDifficulty6 === 6, 'Test Failed: Gyms with difficulty below or equal to 6 should be completed');

// Test for `gymStatus` method (Exercise 13)
let gymTally = { completed: 0, incomplete: 0 };
for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].completed) gymTally.completed++;
    else gymTally.incomplete++;
}
console.assert(gymTally.completed === 6 && gymTally.incomplete === 2, 'Test Failed: gymStatus should tally completed and incomplete gyms correctly');

// Test for `partyCount` method (Exercise 14)
console.assert(game.partyCount() === 5, 'Test Failed: Party count should be 5 after adding Pokémon');

// Test for gym completion status (Exercise 15)
let completedGymsAfterDifficulty8 = game.gyms.filter(gym => gym.completed === true).length;
console.assert(completedGymsAfterDifficulty8 === 8, 'Test Failed: Gyms with difficulty below or equal to 8 should be completed');

// Test if `gymStatus` method correctly tallies after exercise 15
game.gymStatus();
