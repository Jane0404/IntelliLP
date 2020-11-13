import {observer} from 'mobx-react'
import React from 'react'
import {BoardContext} from '../contexts/contexts'
import {BoardStorePrototype} from '../types/board'

@observer
export default class GoBoard extends React.Component{
    static contextType = BoardContext
    declare context: React.ContextType<typeof BoardContext>
    render(){
        return(
            <div>
                <p>The length of the board is {this.context!.length}</p>
                <p>The next Player is {this.context!.player}</p>
                <button onClick={()=> this.context!.move(0)}>{this.context!.player}</button>
            </div>
        )
}
}