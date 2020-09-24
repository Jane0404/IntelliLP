import React from 'react'
import './styles.css'
import Square from './Square'

export default class TicBoard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            values: Array(9).fill(null),      // values of squares 
            disabled: Array(9).fill(false),   // disable the square (button) after click
            player: 'X', // current player
            win: false, // if there is a winner
        }
        this.history = new Array()
        this.handleClick = this.handleClick.bind(this) // click the square on the board
        this.clearBoard = this.clearBoard.bind(this) // clear the board
        this.calculateWin = this.calculateWin.bind(this) // calculate if there is win state
        this.stopPlay = this.stopPlay.bind(this) // when there is win state, all squares are disabled
        this.checkWin = this.checkWin.bind(this) // calcualte if there is win state 
    }

    // after a square is clicked, check if the click can trigger a win state. The calculation is only excuted for
    // those winning lines which include the clicked square 
    calculateWin(i, copy_squares){
        let win = false
        const dim = 3
        let first_dim = Math.floor(i / dim)
        let second_dim = i % dim
        console.log('first_dim', first_dim)
        console.log('second_dim', second_dim)
        
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

    stopPlay(){
        this.setState({disabled: Array(9).fill(true)})
    }
    
    // After click, four things are exected. 1. store the value into this.state.values for displaying it
    //2. check if there is win state. If there is, stop the play. 3. if there is no win, make the button disabled.
    //4. Change the player 
    handleClick(i){
        let copy_squares = this.state.values.slice()
        let copy_disabled = this.state.disabled.slice()
        
        this.history.push(copy_squares)

        let next_player = this.state.player == 'X'? 'O': 'X'
        copy_squares[i] = this.state.player == 'X'? 'X' : 'O'
        copy_disabled[i]=true
        let win = this.calculateWin(i, copy_squares)
        
        this.setState({values:copy_squares, win:win})
       
        if(win){
            this.stopPlay()
        }else{
            this.setState({disabled:copy_disabled, player:next_player})
        }
    }

    clearBoard(){
        this.setState({values: Array(9).fill(null), disabled: Array(9).fill(false), player: 'X', win:false})
    }

    render(){
        let squares = []
        for(let i=0; i < 9; i++){
            squares.push(<Square key = {i} value={this.state.values[i]} disabled={this.state.disabled[i]} onClick={()=>this.handleClick(i)}/>)
        }

        let displayInfo;
        displayInfo = this.state.win? 'The winner is ' + this.state.player : 'The next player is ' + this.state.player
        
        return(
            <div>
                <button type='button' onClick={this.clearBoard} >Clear Board</button>
                <p className='playerInfo'>
                    {displayInfo}
                </p>
                <div className='ticBoard'>
                    {squares}
                </div>
            </div>
        )
    }
}