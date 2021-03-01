function line(grid) {
    let currentRow = 0;
    let currentColumn = 0;
    let orientation;
    let solutions = [];
    for (let i = 0; i < grid.length; i++){ //finding the start of the path
      if(grid[i].indexOf("X") !== -1){
        currentRow = i;
        currentColumn = grid[i].indexOf("X");
        break;
      }
    }
    function stepForward(row, column){
        
        let currentSymbol = grid[row][column];
        
        if(currentSymbol === "X" && row !== currentRow && column !== currentColumn){  //recursion end
            solutions.push([row, column]);
        
        }else if(currentSymbol === "X"){   //first step search
            if(grid[row - 1] !== undefined){ //if there is a symbol above, set orientation to call the function
                if (grid[row-1][column] !== " "){
                    orientation = "up";
                    stepForward(row - 1, column);
                }else(console.log('X to up'))
            } 
            if(grid[row][column + 1] !== undefined){ //if there is a symbol to the right, set orientation and call the function
                if(grid[row][column + 1] !== " "){
                    orientation = "right";
                    stepForward(row, column + 1);
                }else(console.log('X to right'))
            }
            if(grid[row + 1] !== undefined){//if there is a symbol below, set orientation and call the function
                if (grid[row + 1][column] !== " "){
                    orientation = "down";
                    console.log(row, column)
                    stepForward(row + 1, column);
                }else(console.log("X to down"))
            }
            if(grid[row][column - 1] !== undefined){//if there is a symbol to the left, set orientation and call the function
                if (grid[row][column - 1] !== " "){
                    orientation = "left";
                    stepForward(row, column - 1);
                }else(console.log('X to left'))
            }
        }else if(orientation === "up"){
            if (currentSymbol === "|"){
                if(grid[row - 1] !== undefined){ 
                    if (grid[row-1][column] !== " "){
                        orientation = "up";
                        stepForward(row - 1, column);
                    }else(console.log([row, column]))
                }
            }else if(currentSymbol === "+"){
                if(grid[row][column + 1] !== undefined){ 
                    if(grid[row][column + 1] !== " "){
                        orientation = "right";
                        stepForward(row, column + 1);
                    }else(console.log([row, column]))
                    if(grid[row][column - 1] !== undefined){
                        if (grid[row][column - 1] !== " "){
                            orientation = "left";
                            stepForward(row, column - 1);
                        }else(console.log([row, column]))
                    }
                }
            }
        }else if(orientation === "right"){
            if (currentSymbol === "-"){
                if(grid[row][column + 1] !== undefined){ 
                    if (grid[row][column + 1] !== " "){
                        orientation = "right";
                        stepForward(row, column + 1);
                    }else(console.log([row, column]))
                }
            }else if(currentSymbol === "+"){
                if(grid[row + 1] !== undefined){
                    if(grid[row + 1][column] !== " "){
                        orientation = "down";
                        stepForward(row + 1, column);
                    }else(console.log([row, column]))
                }if(grid[row - 1] !== undefined){
                    if (grid[row - 1][column] !== " "){
                            orientation = "up";
                            stepForward(row - 1, column);
                    }else(console.log([row, column]))
                }
            }
        }else if(orientation === "down"){
            if (currentSymbol === "|"){
                if(grid[row + 1] !== undefined){ 
                    if (grid[row + 1][column] !== " "){
                        orientation = "down";
                        stepForward(row + 1, column);
                    }else(console.log([row, column]))
                }
            }else if(currentSymbol === "+"){
                if(grid[row][column + 1] !== undefined){ 
                    if(grid[row][column + 1] !== " "){
                        orientation = "right";
                        stepForward(row, column + 1);
                    }else(console.log([row, column]))
                }else if(grid[row][column - 1] !== undefined){
                    if (grid[row][column - 1] !== " "){
                            orientation = "left";
                            stepForward(row, column - 1);
                    }else(console.log([row, column]))
                }
            }
        }else if(orientation === "left"){
            if (currentSymbol === "-"){
                if(grid[row][column - 1] !== undefined){ 
                    if (grid[row][column - 1] !== " "){
                        orientation = "left";
                        stepForward(row, column - 1);
                    }else(console.log([row, column]))
                }
            }else if(currentSymbol === "+"){
                if(grid[row + 1] !== undefined){ 
                    if(grid[row + 1] !== " "){
                        orientation = "down";
                        stepForward(row + 1, column);
                    }else(console.log([row, column]))
                }if(grid[row - 1] !== undefined){
                    if (grid[row - 1][column] !== " "){
                            orientation = "up";
                            stepForward(row - 1, column);
                    }else(console.log([row, column]))
                }
            }
        }
    }
    stepForward(currentRow, currentColumn);
    if (solutions.length === 1){
        console.log (solutions);
    }else{
        console.log(solutions);
    }
  }


let ex1 = [
    "     ",
    "  X  ",
    "  |  ",
    "  |  ",
    "  X  "
    ];

line(ex1);


