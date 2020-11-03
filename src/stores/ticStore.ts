import {makeAutoObservable} from 'mobx'
import axios from 'axios'

export default class TicStore{   
    player: string
    moves: Array<string | null>
    win: boolean
    clicked: Array<boolean>
    history: {
        moves:Array<Array<string|null>>,
        clicked:Array<Array<boolean>>
    }

    constructor(){
        this.player ='X'
        this.moves = new Array(9).fill(null)
        this.win=false
        this.clicked= new Array(9).fill(false)
        this.history={moves:[], clicked:[]} 
        makeAutoObservable(this)
    }

    nextMove(index:number) : void{
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

    stopPlay():void{
        this.history.moves.push(this.moves.slice())
        this.clicked = new Array(9).fill(true)
        this.history.clicked.push(this.clicked.slice())
    }

    calculateWin(i:number, copy_squares:Array<string|null>):boolean{
        let win = false
        const dim = 3
        let first_dim = Math.floor(i / dim)
        let second_dim = i % dim

        // check the row line 
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

        // check the column line 
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
        
        // check the slash line 
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

    checkWin(line:Array<number>, copy_squares:Array<string|null>):boolean{
        if(copy_squares[line[0]] == copy_squares[line[1]] &&
            copy_squares[line[1]] == copy_squares[line[2]]) {
                return true;
            }
        return false
    }

    clearBoard():void{
        this.player='X'
        this.moves= new Array(9).fill(null)
        this.win=false
        this.clicked= new Array(9).fill(false)
        this.history={moves:[], clicked:[]} 
    }

    async saveBoard():Promise<boolean>{
        return axios.put('/save_board', {'history':this.history}).catch((error)=>{
            return false
        }).then((res)=>{
            return true
        })
    }

    saveBoard2():Promise<boolean>{
        return new Promise((resolve,reject)=>{
            axios.put('/save_board',{'history':this.history})
            .catch(e=>{
                console.log(e)
                reject(false)
            }).then(res=>{
                resolve(true)
            })
        })
    }
}