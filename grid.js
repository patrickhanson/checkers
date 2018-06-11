function Grid (row, col, destination) {
    this.gridArray = new Array(row).fill().map(() => new Array(col).fill())
    this.destination = destination
    this.fillGrid()
    this.destination.addEventListener("click", this.boundClickEvent)
}

Grid.prototype.fillGrid = function () {
    let howManyTimesHaveWeLooped = 0
    for(let rowIndex = 0; rowIndex < this.gridArray.length; rowIndex++) {
        const rowDiv = document.createElement('div')
        rowDiv.classList.add('row')
        this.destination.appendChild(rowDiv)
        this.fillRow(rowIndex, rowDiv)
    }
}

Grid.prototype.fillRow = function (rowIndex, rowDiv) {
    const gridRow = this.gridArray[rowIndex];
    for(let colIndex = 0; colIndex < gridRow.length; colIndex++) {
        let cell = new Cell(rowIndex, colIndex, rowDiv, 'cell')
        gridRow[colIndex] = cell
        rowDiv.appendChild(cell.element)
    }
}