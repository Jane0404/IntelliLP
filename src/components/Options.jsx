import React from 'react'
import {observer} from 'mobx-react'
import {BoardContext} from '../contexts/contexts'

@observer
export default class Options extends React.Component{
    static contextType = BoardContext
    async saveBoard(){
        const isOk = await this.context.saveBoard()
        if(isOk){
            console.log('saved data')
        }else{
            console.log('error occurred to save data')
        }
    }
    
    render(){
        return(
            <div className='optionsLayout'>
                <button>Choose Opponent</button>
                <button onClick={this.context.clearBoard.bind(this.context)}>Clear Board</button>
                <button>Go to Last Board</button>
                <button>End Game </button>
                {/* <button onClick={this.context.saveBoard.bind(this.context)}>Store Board</button> */}
                <button onClick={this.saveBoard.bind(this)}>Store Board</button>
                <button>Board Analytics</button>
            </div>
        )
    }
}