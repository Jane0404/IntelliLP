import React from 'react'
import Board from './Board'
import './styles.css'

export default class Game extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value: 'tic'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        console.log(event)
        alert(this.state.value)
        event.preventDefault()
    }

    render(){
        return(
            <div>
                <h1 className='title'>Welcome to AI-Fei-Go</h1>
                <h2 className='secondTitle'>Your opponent is an AI collabordative learning partner called FeiGo</h2>
                <form className='formStyle' onSubmit={this.handleSubmit}>
                    <label>
                    Pick the game you want to learn:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option>Tic-Tac-Toe 3*3 Standard</option>
                            <option value='go9'>Go game 9*9 Beginner</option>
                            <option value='go13'>Go game 13*13 Beginner</option>
                            <option value='go19'>Go game 19*19 Standard</option>
                        </select>
                    </label>
                    <input type='submit' value='Submit' />
                </form>
            </div> 
        )
    }
}