/**
 * This program calculates the number of logs that a truck can carry
 *   depending on the user's log's length
 *
 * By:      Rodas Nega
 * Version: 1.0
 * Since:   2022-09-13
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

const userInput = prompt('Enter log length (0.25 m, 0.5 m, or 1.0 m): ')

const logLength = parseFloat(userInput)
const truckInventory = 1100 / (20 * logLength)

console.log(`\nThe truck can hold up to this number of logs: ${truckInventory}`)

console.log('\nDone.')
