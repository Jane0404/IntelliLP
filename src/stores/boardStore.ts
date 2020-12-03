import axios from 'axios'
import {Board} from '../types/board'

export default class BoardStore {
    //todo add tags to marker general information like the time, players, rounds, id 

    history: Array<Board> = []

    addToHistory(current_board:Board):void{
        this.history.push(current_board.slice())
    }

    historyBoard(index:number=-1):Board{
        return this.history[index]
    }

    get allBoards():Array<Board>{
        return this.history
    }

    async fetchBoardy():Promise<boolean|Array<Board>>{
        return axios.get('/fetch_board')
        .catch((error)=>{
            console.log(error)
            return false
        }).then((res)=>{
            console.log(res)
            //todo return boards being fetched from the server
            return true
        })
    }

    async storeBoard():Promise<boolean>{
        return axios.put('/save_board', {'history':this.history})
        .catch((error)=>{
            console.log(error)
            return false
        }).then((res)=>{
            console.log(res)
            return true
        })
    }
}