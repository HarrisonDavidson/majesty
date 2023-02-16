/*
Define a function with a single parameter. When the function
is invoked, an argument is required.
*/

// This function returns a string.

// const athena = hailTheQueen("Athena Perez") // Argument value is "Athena Perez"
// console.log(athena)

// const charisse = hailTheQueen("Charisse Ford") // Argument value is "Charisse Ford"
// console.log(charisse)

// const jenna = hailTheQueen("Jenna Solis") // Argument value is "Jenna Solis"
// console.log(jenna)

// const erica = hailTheQueen("Erica Hall") // Argument value is "Erica Hall"
// console.log(erica)

// const caylea = hailTheQueen("Caylea Harrison") // Argument vaue is "Caylea Harrison"
// console.log(caylea)

// const ramona = hailTheQueen("Ramona")
// console.log(ramona)

const hailTheQueen = (nameString) => {
        return `Hail Her Majesty, ${nameString}.`
    }

for (const queenObject of queens) {
    const hailMessage = hailTheQueen(queenObject.name)
    console.log(hailMessage)
}