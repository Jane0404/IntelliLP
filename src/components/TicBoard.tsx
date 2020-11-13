import React from 'react'
import './styles.css'
import Square from './Square'
import {observer} from 'mobx-react'
import {BoardContext} from '../contexts/contexts'
import {BoardStorePrototype} from '../types/board'
import Board from './BoardGame'

@observer
export default class TicBoard extends React.Component{
    static contextType = BoardContext
    declare context: React.ContextType<typeof BoardContext>

    render(){
        let keys: Array<number> = new Array(0,1,2,3,4,5,6,7,8)
        let boardSquares = keys.map(item=>
                <Square 
                    key={item}
                    onClick={() => this.context!.move(item)} 
                    disabled={this.context!.clicked[item]}
                    value={this.context!.board[item]}>
                </Square>)        

        let boardState: string
        if(this.context!.win){
            boardState = 'The winner is ' + this.context!.player + '.'
        }else{
            boardState = 'The next player is ' + this.context!.player + '.'
        }
            
        return(
            <div>
                <p className='playerInfo'>{boardState}</p>
                <div className='ticBoard'>{boardSquares}</div>
            </div>
        )
    }
}