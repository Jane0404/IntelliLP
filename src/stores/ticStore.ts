import {makeObservable, observable, action} from 'mobx'
import BoardStore from './boardStore'
import {Board, BoardStorePrototype} from '../types/board'

export default class TicStore extends BoardStore implements BoardStorePrototype {   
    starter: string // the player who starts the game firstly 
    player: string   // the current player
    board: Board // the current board
    clicked: Array<boolean> // squares should be disabled or not
    win: boolean
    length: number

    constructor(){
        super()
        this.starter ='X'
        this.player = this.starter
        this.board = new Array(9).fill(null)
        this.clicked= new Array(9).fill(false)
        this.win = false
        this.length = 3
        makeObservable(this,{
            player: observable,
            board: observable,
            clicked: observable,
            win: observable,
            move: action,
            stop: action,
            checkWin: action,
            reset: action
        })
        
    }

    move(pos:number):void{
        this.board[pos] = this.player
        this.clicked[pos] = true
        if(this.win = this.checkWin(pos)){
            this.stop()
        }else{
            this.player = this.player == 'X' ? 'O':'X'
        }
        super.addToHistory(this.board)
    }

    stop():void{
        this.clicked = new Array(9).fill(true)
    }

    checkWin(pos:number):boolean{
        let win = false
        const dim = 3
        let first_dim = Math.floor(pos / dim)
        let second_dim = pos % dim

        // check the row line 
        switch(first_dim){
            case 0: 
            win=this.checkLineWin([0,1,2])
            break
            case 1: 
            win=this.checkLineWin([3,4,5])
            break
            case 2: 
            win=this.checkLineWin([6,7,8])
        } 

        // check the column line 
        if(!win){
            switch(second_dim){
                case 0: 
                win=this.checkLineWin([0,3,6])
                break
                case 1: 
                win=this.checkLineWin([1,4,7])
                break
                case 2: 
                win=this.checkLineWin([2,5,8])
            }
        }
        
        // check the slash line 
        if(!win){
            if((first_dim == 0 && second_dim == 0) || (first_dim == 2 && second_dim == 2)){
                win=this.checkLineWin([0,4,8])
            }
            
            if((first_dim == 0 && second_dim == 2) || (first_dim == 2 && second_dim == 0)){
                win=this.checkLineWin([2,4,6])
            } 
            if(first_dim == 1 && second_dim == 1){
                win=this.checkLineWin([0,4,8]) || this.checkLineWin([2,4,6])
            }
        }
        return win
    }

    checkLineWin(line:Array<number>):boolean{
        if(this.board[line[0]] == this.board[line[1]] &&
            this.board[line[1]] == this.board[line[2]]) {
                return true;
            }
        return false
    }

    reset():void{
        this.player= this.starter == 'X' ? 'O':'X'
        this.board= new Array(9).fill(null)
        this.clicked= new Array(9).fill(false)
        //todo alert if save the history to the server
    }
}