const log = (...args) => (console.log(...args), args[args.length - 1])

const checkersBoard = new CheckerGrid(8, 8, document.getElementById('grid'))