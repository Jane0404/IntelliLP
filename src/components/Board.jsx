import React from 'react'
import './styles.css'
import TicBoard from './TicBoard'
import Options from './Options'
import Analytics from './Analytics'
import Prediction from './Prediction'
import GoBoard from './GoBoard'
import {
    TicStore, 
    Go9Store, 
    Go13Store, 
    Go19Store
} from '../stores/stores'
import {
   BoardContext
} from '../contexts/contexts'

export default class Board extends React.Component{
    render(){
        let component
        let contextStore
        switch(this.props.value){
            case 'tic': 
                component = <TicBoard />
                contextStore = TicStore
                break
            case 'go9':
                component = <GoBoard/>
                contextStore = Go9Store
                break
            case 'go13':
                component = <GoBoard />
                contextStore = Go13Store
                break
            case 'go19':
                component = <GoBoard />
                contextStore = Go19Store
                break
            default:
                component = null
                contextStore = null
        }
        return(
            <BoardContext.Provider value={contextStore}>
                <div className='boardLayout'>
                    <div className='optionsLayout'>
                        <Options />
                    </div>
                    <div className='middleLayout'> 
                        {component}
                    </div>
                    <div className='secondRowLayout'>
                        <Prediction />
                        <Analytics />
                    </div>
                </div>
            </BoardContext.Provider>
        )
    }
}
