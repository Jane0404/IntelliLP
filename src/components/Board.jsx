import React from 'react'
import './styles.css'
import Square from './Square'

export default class Board extends React.Component{
    constructor(props){
        super(props)
        this.state={
            squares_values: [1,2,3,4,5,6,7,8,9]
        }
    }
    render(){
        let squares = []
        for(let i=0; i < 9; i++){
            squares.push(<Square value={this.state.squares_values[i]}/>)
        }

        return(
            <div className='board'>
                {squares}
            </div>
        )
    }
}