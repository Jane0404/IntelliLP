import React from 'react'
import './styles.css'
import TicBoard from './TicBoard'
import Options from './Options'
import Analytics from './Analytics'
import Prediction from './Prediction'
import GoBoard from './GoBoard'
import {TicStore, GoStore} from '../stores/stores'
import {BoardContext} from '../contexts/contexts'
import {BoardStorePrototype} from '../types/board'

type MyProps = {
    id: string
}

export default class Board extends React.Component<MyProps>{
    render(){
        let component: JSX.Element | null
        let contextStore: BoardStorePrototype | null
       
        switch(this.props.id){
            case 'tic': 
                component = <TicBoard />
                contextStore = new TicStore()
                break
            case 'go9':
                component = <GoBoard/>
                contextStore = new GoStore(9)
                break
            case 'go13':
                component = <GoBoard />
                contextStore = new GoStore(13)
                break
            case 'go19':
                component = <GoBoard />
                contextStore = new GoStore(19)
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
