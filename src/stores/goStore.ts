import {makeObservable, observable, action} from 'mobx'
import {BoardStorePrototype, Board} from '../types/board'
import BoardStore from './boardStore'

//todo extends boardStore and implement board prototype
export default class GoStore extends BoardStore implements BoardStorePrototype {
    starter: string // the player who starts the game firstly 
    player: string   // the current player
    board: Board // the current board
    clicked: Array<boolean> // squares should be disabled or not
    length: number
    win: boolean 

    constructor(length:number){
        super()
        this.starter = '' 
        this.player = ''
        this.board = []
        this.clicked = []
        this.length = length
        this.win = false
        
        makeObservable(this, {
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

    click(){
        this.player = this.player == 'X' ? 'O' : 'X'
    }

    clearBoard(){
        this.player ='X'
    }

    checkWin(pos:number){
        return false
    }
    move(pos:number){
        return null
    }
    stop(){
        return null
    }  
    reset(){
        return null
    }

}