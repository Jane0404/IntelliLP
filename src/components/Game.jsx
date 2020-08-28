import React from 'react'
import Board from './Board'
import './styles.css'

export default class Game extends React.Component{
    render(){
        return(<div>
            <p>Welcome to AIFEIGO!</p>
            <Board />
        </div>)
    }
}