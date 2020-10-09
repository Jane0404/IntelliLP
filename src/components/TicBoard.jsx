import React from 'react'
import './styles.css'
import Square from './Square'
import {observer} from 'mobx-react'
import {BoardContext} from '../contexts/contexts'

@observer
export default class TicBoard extends React.Component{
    static contextType = BoardContext
    render(){
        this.board = this.context
        let keys = new Array(0,1,2,3,4,5,6,7,8)
        let boardSquares = keys.map(item=><Square 
            key={item} 
            onClick={() => this.board.nextMove(item)} 
            disabled={this.board.clicked[item]}
            value={this.board.moves[item]}>
            </Square>)
        let boardState
        if(this.board.win){
            boardState = 'The winner is ' + this.board.player + '.'
        }else{
            boardState = 'The next player is ' + this.board.player + '.'
        }
            
        return(
            <div>
                <p className='playerInfo'>{boardState}</p>
                <div className='ticBoard'>{boardSquares}</div>
            </div>
        )
    }
}