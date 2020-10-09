import {observer} from 'mobx-react'
import React from 'react'
import {BoardContext} from '../contexts/contexts'

@observer
export default class GoBoard extends React.Component{
    static contextType = BoardContext
    render(){
        return(
            <div>
                <p>The length of the board is {this.context.length}</p>
                <p>The next Player is {this.context.player}</p>
                <button onClick={this.context.click.bind(this.context)}>{this.context.player}</button>
            </div>
        )
    }
}