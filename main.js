let currentPlayer = 'X'; // X is the starting player.
let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

function checkForWin(winningCombination, playerSelection) {
    for (let index = 0; index < winningCombination.length; index++) {
        const currentWinningcombo = winningCombination[index];
        let matches = 0
        for (let index = 0; index < currentWinningcombo.length; index++) {
            const currentValue = currentWinningcombo[index];
            if (playerSelection.includes(currentValue)) {
                matches += 1
                if (matches === 3) {
                    return true
                }
            }

        }

    }
    return false
}

// Get all .grid-cell elements from the DOM and store in cellElementArray (see Resources links below):
const cellElementArray = document.querySelectorAll('.grid-cell');

// Loop over each element in our cellElementArray:
for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {
    // Set the cell element at cellElementArray[cellIndex] to the currentCell variable:
    const currentCellElement = cellElementArray[elementIndex]

    // Add an event listener to the currentCellElement:
    currentCellElement.addEventListener('click', function (event) {
        // event.target tells us which element the user clicked (see Resources links below):
        const clickedCellElement = event.target;
        if (currentPlayer === 'X') {
            clickedCellElement.innerHTML = 'X'
            playerXSelections.push(Number(clickedCellElement.id))
            console.log(playerXSelections);
            if (checkForWin(winningCombinations, playerXSelections)) {
                alert('X wins')
            }


            currentPlayer = 'O'

        } else {
            clickedCellElement.innerHTML = 'O'
            playerOSelections.push(Number(clickedCellElement.id))
            console.log(playerOSelections);
            if (checkForWin(winningCombinations, playerOSelections)) {
                alert('O wins')

            }

            currentPlayer = 'X'
        }
        // Log the ID of the cell which was just clicked:
        console.log("You clicked on cell number: " + clickedCellElement.id)
    });
}
