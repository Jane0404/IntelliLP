import BoardStore from '../stores/boardStore'

//It stores the current board with all moves  
type Board = Array<string|number|null>
//It declares all data properties and methods that all board games should have
interface BoardStorePrototype extends BoardStore{
    //todo create a player type using enumeration which facilitates to use pictures for represeting players

    starter: string // the player who starts the game firstly 
    player: string   // the current player
    board: Board // the current board
    clicked: Array<boolean> // squares should be disabled or not
    win: boolean //if a player wins or not
    length: number // the size of the square board
    
    checkWin:(pos:number)=>boolean  // does a player win or not
    move(pos:number):void // when a move happend, it is triggered
    stop():void // end the game by disabling all squares on the board  
    reset():void // reset the board to the clean state
}

export {
    Board,
    BoardStorePrototype
}