function line(grid) {
    let currentRow = 0;
    let currentColumn = 0;
    let orientation;
    let solutions = [];
    let globalHistory = [];
    for (let i = 0; i < grid.length; i++){ //finding the start of the path
      if(grid[i].indexOf("X") !== -1){
        currentRow = i;
        currentColumn = grid[i].indexOf("X");
        break;
      }
    }
    function stepForward(row, column, history){
    if (history.indexOf(JSON.stringify([row, column])) === -1){     //check if the path has crossed back on itself, if so, that brach stops
        history.push(JSON.stringify([row, column])); 
        let currentSymbol = grid[row][column];
        console.log(row, column, currentSymbol, history)
        
        if(currentSymbol === "X" && (row !== currentRow || column !== currentColumn)){  //recursion end
            console.log(currentSymbol)
            solutions.push([row, column]);
        
        }else if(currentSymbol === "X"){   //first step search
            if(grid[row - 1] !== undefined){ //if there is a symbol above, set orientation to call the function
                if (grid[row-1][column] !== " "){
                    orientation = "up";
                    stepForward(row - 1, column, history);
                }
            } 
            if(grid[row][column + 1] !== undefined){ //if there is a symbol to the right, set orientation and call the function
                if(grid[row][column + 1] !== " "){
                    orientation = "right";
                    stepForward(row, column + 1, history);
                }
            }
            if(grid[row + 1] !== undefined){//if there is a symbol below, set orientation and call the function
                if (grid[row + 1][column] !== " "){
                    orientation = "down";
                    stepForward(row + 1, column, history);
                }
            }
            if(grid[row][column - 1] !== undefined){//if there is a symbol to the left, set orientation and call the function
                if (grid[row][column - 1] !== " "){
                    orientation = "left";
                    stepForward(row, column - 1, history);
                }
            }
        
        }else if(orientation === "up"){
            if (currentSymbol === "|"){
                if(grid[row - 1] !== undefined){ 
                    if (grid[row-1][column] !== " "){
                        orientation = "up";
                        stepForward(row - 1, column, history);
                    }
                }
            }else if(currentSymbol === "+"){
                if(grid[row][column + 1] !== undefined){ 
                    if(grid[row][column + 1] !== " "){
                        orientation = "right";
                        stepForward(row, column + 1, history);
                    }
                }
                if(grid[row][column - 1] !== undefined){
                    if (grid[row][column - 1] !== " "){
                        orientation = "left";
                        stepForward(row, column - 1, history);
                    }
                }
            }
        
        }else if(orientation === "right"){
            if (currentSymbol === "-"){
                if(grid[row][column + 1] !== undefined){ 
                    if (grid[row][column + 1] !== " "){
                        orientation = "right";
                        stepForward(row, column + 1, history);
                    }
                }
            }else if(currentSymbol === "+"){
                if(grid[row + 1] !== undefined){
                    if(grid[row + 1][column] !== " "){
                        orientation = "down";
                        stepForward(row + 1, column, history);
                    }else(console.log([row, column]))
                }
                if(grid[row - 1] !== undefined){
                    if (grid[row - 1][column] !== " "){
                            orientation = "up";
                            stepForward(row - 1, column, history);
                    }
                }
            }
        
        }else if(orientation === "down"){
            if (currentSymbol === "|"){
                if(grid[row + 1] !== undefined){ 
                    if (grid[row + 1][column] !== " "){
                        orientation = "down";
                        stepForward(row + 1, column, history);
                    }
                }
            }else if(currentSymbol === "+"){
                if(grid[row][column + 1] !== undefined){ 
                    if(grid[row][column + 1] !== " "){
                        orientation = "right";
                        stepForward(row, column + 1, history);
                    }
                }
                if(grid[row][column - 1] !== undefined){ 
                    if (grid[row][column - 1] !== " "){console.log("left at +", row, column, history)
                            orientation = "left";
                            stepForward(row, column - 1, history);
                    }
                }
            }
        
        }else if(orientation === "left"){
            if (currentSymbol === "-"){
                if(grid[row][column - 1] !== undefined){
                    if (grid[row][column - 1] !== " "){
                        orientation = "left";
                        stepForward(row, column - 1, history);
                    }
                }
            }else if(currentSymbol === "+"){
                if(grid[row + 1] !== undefined){ 
                    if(grid[row + 1] !== " "){
                        orientation = "down";
                        stepForward(row + 1, column, history);
                    }
                }
                if(grid[row - 1] !== undefined){
                    if (grid[row - 1][column] !== " "){
                        orientation = "up";
                        stepForward(row - 1, column, history);
                    }
                }
            }
        }
    }else{console.log ("branch ends")}
    }         
    stepForward(currentRow, currentColumn, globalHistory);
    if (solutions.length === 1){
        console.log (solutions, "true");
    }else{
        console.log(solutions, "false");
    }
  }


let ex1 = [
    "                      ",    
    "   +-------+          ",
    "   |      +++---+     ",
    "X--+      +-+   X      "
    ];

line(ex1);


