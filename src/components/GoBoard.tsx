import React from 'react'
import {BoardContext} from '../contexts/contexts'
import Canvas from './SquareCanvas'
import './styles.scss'

type MyProps={
    length: number
}

export default class GoBoard extends React.Component<MyProps>{
    static contextType = BoardContext
    declare context: React.ContextType<typeof BoardContext>
    constructor(props:MyProps){
        super(props)
        console.log('constructor:GoBoard:', this.props.length)
    }
    render(){
        console.log('render:', this.props.length)
        return(
            <div>
                <p>The next Player is {this.context!.player}</p>
                <Canvas length={this.props.length}/>
            </div>
        )
    }
    
}