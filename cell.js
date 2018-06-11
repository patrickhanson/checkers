function Cell(rowIndex, colIndex, rowDiv, classList) {
    this.rowIndex = rowIndex
    this.colIndex = colIndex
    this.rowDiv = rowDiv
    this.createCell(rowIndex, colIndex, rowDiv, classList)
}


Cell.prototype.createCell = function (rowIndex, colIndex, rowDiv, classList) {
    this.element = document.createElement('div')
    this.element.className = classList
    this.element.dataset.rowIndex = rowIndex
    this.element.dataset.colIndex = colIndex
    rowDiv.appendChild(this.element)
}

Cell.prototype.constructor = Cell

function BasicCell(rowIndex, colIndex, rowDiv, classList) {
    Cell.call(this, rowIndex, colIndex, rowDiv, classList)
    this.className = 'basiccell'
}

BasicCell.prototype = Object.create(Cell.prototype)
BasicCell.prototype.constructor = BasicCell

function DarkCell(rowIndex, colIndex, rowDiv, classList) {
    BasicCell.call(this, rowIndex, colIndex, rowDiv, classList)
    this.className = 'darkcell'
}

DarkCell.prototype = Object.create(BasicCell.prototype)
DarkCell.prototype.constructor = DarkCell