import React from 'react'
import './styles.css'
//import Square from './Square'

function Square(props){
    return(
        <button disabled={props.disabled} className='square' onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default class Board extends React.Component{
    constructor(props){
        super(props)
        this.state={
            squares_values: Array(9).fill(null),
            squares_disabled: Array(9).fill(false),
            player: 'X'
        }

        this.handleClick = this.handleClick.bind(this)

    }

    BoardInitilization(){
        const num = 3
        const squares = []
        for(let i=0; i<num; i++){
            squares[i] = Array(3).fill(null)
        }
        return squares
    }

    handleClick(i){
        let copy_squares = this.state.squares_values.slice()
        let copy_disabled = this.state.squares_disabled.slice()
        copy_disabled[i]=true
        if(this.state.player == 'X'){
            copy_squares[i]='X'
            this.setState({squares_values:copy_squares, squares_disabled: copy_disabled, player:'O'})
        }else{
            copy_squares[i]='O'
            this.setState({squares_values:copy_squares, squares_disabled: copy_disabled, player:'X'})
        }
    }

    render(){
        let squares = []
        for(let i=0; i < 9; i++){
            squares.push(<Square key = {i} value={this.state.squares_values[i]} disabled={this.state.squares_disabled[i]} onClick={()=>this.handleClick(i)}/>)
        }

        return(
            <div>
                <div className='playerInfo'>
                    Next player is {this.state.player}
                </div>
                <div className='board'>
                    {squares}
                </div>
            </div>
        )
    }
}