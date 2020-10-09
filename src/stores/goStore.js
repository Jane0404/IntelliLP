import {makeAutoObservable} from 'mobx'

export default class GoStore {
    player = 'X'
    length = 9
    constructor(length){
        makeAutoObservable(this)
        this.length = length
    }
    click(){
        this.player = this.player == 'X' ? 'O' : 'X'
    }
    clearBoard(){
        this.player ='X'
    }    
}