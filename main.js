const queens = []
const tributeChest = []

const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    queens.push(queenObject)
}

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`
}

const payTribute = (tributeId, tributeDescription, queenId) => {
    const tribute = {
        id: tributeId, 
        description: tributeDescription, 
        queenId: queenId
    }
    
    tributeChest.push(tribute)
}

createQueen(1, "Trinity Terry")
createQueen(2, "Sydney Noh")
createQueen(3, "Christina Ashworth")
createQueen(4, "Aja Washington")

for (const queen of queens) {
    const hailMessage = hailTheQueen(queen.name)
    console.log(hailMessage)
}

    payTribute(1, "Barrel of wine", 2)
    payTribute(2, "Silk", 1)
    payTribute(3, "Bushel of oranges", 3)
    payTribute(4, "Ten gold coins", 1)

    for (const queen of queens) {

    for (const tribute of tributeChest) {
        if (tribute.queenId === queen.id) {
        console.log(`${queen.name} has tribute ${tribute.description}`)
    }
}
    }