import {makeAutoObservable} from 'mobx'

export default class TicStore{   
    player='X'
    moves= new Array(9).fill(null)
    win=false
    clicked= new Array(9).fill(false)
    history={moves:[], clicked:[]} 

    constructor(){
        makeAutoObservable(this)
    }

    nextMove(index){
        this.history.moves.push(this.moves.slice())
        this.history.clicked.push(this.clicked.slice())
        this.moves[index] = this.player
        this.clicked[index] = true
        this.win = this.calculateWin(index, this.moves.slice())
        if(this.win){
            this.stopPlay()
        }else{
            this.player = this.player == 'X' ? 'O':'X'
        }
    }

    stopPlay(){
        this.history.moves.push(this.moves.slice())
        this.clicked = new Array(9).fill(true)
        this.history.clicked.push(this.clicked.slice())
    }

    calculateWin(i, copy_squares){
        let win = false
        const dim = 3
        let first_dim = Math.floor(i / dim)
        let second_dim = i % dim

        // the first line is a row line 
        switch(first_dim){
            case 0: 
            win=this.checkWin([0,1,2], copy_squares)
            break
            case 1: 
            win=this.checkWin([3,4,5], copy_squares)
            break
            case 2: 
            win=this.checkWin([6,7,8], copy_squares)
        } 

        // the second line is a column line 
        if(!win){
            switch(second_dim){
                case 0: 
                win=this.checkWin([0,3,6], copy_squares)
                break
                case 1: 
                win=this.checkWin([1,4,7], copy_squares)
                break
                case 2: 
                win=this.checkWin([2,5,8], copy_squares)
            }
        }
        
        // the third line is slash line for corned squares and the center square
        if(!win){
            if((first_dim == 0 && second_dim == 0) || (first_dim == 2 && second_dim == 2)){
                win=this.checkWin([0,4,8], copy_squares)
            }
            
            if((first_dim == 0 && second_dim == 2) || (first_dim == 2 && second_dim == 0)){
                win=this.checkWin([2,4,6], copy_squares)
            } 
            if(first_dim == 1 && second_dim == 1){
                win=this.checkWin([0,4,8], copy_squares) || this.checkWin([2,4,6], copy_squares)
            }
        }
        return win
    }

    checkWin(line, copy_squares){
        if(copy_squares[line[0]] == copy_squares[line[1]] &&
            copy_squares[line[1]] == copy_squares[line[2]]) {
                return true;
            }
        return false
    }

    clearBoard(){
        this.player='X'
        this.moves= new Array(9).fill(null)
        this.win=false
        this.clicked= new Array(9).fill(false)
        this.history={moves:[], clicked:[]} 
    }
}