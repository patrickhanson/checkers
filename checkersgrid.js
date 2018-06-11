let darkCellArray = []

function CheckerGrid(row, col, destination) {
    Grid.call(this, row, col, destination)
    this.boundClickEvent = this.eventListeners.click.bind(this)
}

CheckerGrid.prototype = Object.create(Grid.prototype);
CheckerGrid.prototype.constructor = CheckerGrid;

CheckerGrid.prototype.eventListeners = {
    click: function (event) {
        let clickedCell = event.target
        console.log(clickedCell)
    }
}

CheckerGrid.prototype.fillRow = function (rowIndex, rowDiv) {


    const gridRow = this.gridArray[rowIndex];
    for(let colIndex = 0; colIndex < gridRow.length; colIndex++) {
        let cell = undefined;
        
        if (rowIndex % 2 === 0) {
            if(colIndex % 2 === 0) {
                cell = new BasicCell(rowIndex, colIndex, rowDiv, "cell basiccell")
            } else {
                cell = new DarkCell(rowIndex, colIndex, rowDiv, "cell darkcell")
                darkCellArray.push(cell)
            }
        } else {
            if(colIndex % 2 === 0) {
                cell = new DarkCell(rowIndex, colIndex, rowDiv, "cell darkcell")
                darkCellArray.push(cell)
            } else {
                cell = new BasicCell(rowIndex, colIndex, rowDiv, "cell basiccell")
            }
        }
        cell.element.dataset.rowIndex = rowIndex
        cell.element.dataset.colIndex = colIndex
        gridRow[colIndex] = cell
        rowDiv.appendChild(cell.element)
    }
}

CheckerGrid.prototype.addCheckers = function () {
    for(let i = 0; i < darkCellArray.length; i++) {
        
    }
}