// Iteration 1: Names and Input
let hacker1 = "Ranier"
console.log("The driver's is" + " " + hacker1);

let hacker2 = "Alberto"
console.log("The navigator's name is" + " " + hacker2)

// Iteration 2: Conditionals

let hacker1Index = hacker1.length
let hacker2Index = hacker2.length
console.log(hacker1Index)
console.log(hacker2Index)
console.log(`It seems that the navigator has the longest name, it has ${hacker2Index} characters`)


// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {

    console.log(hacker1[i].toUpperCase())
}

for (let i = 0; i < hacker2.length; i++) {
    console.log(hacker2.split("").reverse().join(""));
    break;
  }

  let orderHackers = hacker1.localeCompare(hacker2)

  if (orderHackers > 0) {
    console.log("Yo, the navigator goes first definitely.")
  } else if (orderHackers < 0) {
      console.log("The driver's name goes first.")
  } else {
    console.log("What?! You both have the same name?")
  }