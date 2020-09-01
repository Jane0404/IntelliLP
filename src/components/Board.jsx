import React from 'react'
import './styles.css'
import Square from './Square'

export default class Board extends React.Component{
    constructor(props){
        super(props)
        this.state={
            squares_values: Array(9).fill(null),
            player: 'X'
        }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(i){
        let copy_squares = this.state.squares_values.slice()
        if(this.state.player == 'X'){
            copy_squares[i]='X'
            this.setState({squares_values:copy_squares, player:'O'})
        }else{
            copy_squares[i]='O'
            this.setState({squares_values:copy_squares, player:'X'})
        }
    }

    render(){
        let squares = []
        for(let i=0; i < 9; i++){
            squares.push(<Square key = {i} value={this.state.squares_values[i]} onClick={()=>this.handleClick(i)}/>)
        }

        return(
            <div className='board'>
                {squares}
            </div>
        )
    }
}