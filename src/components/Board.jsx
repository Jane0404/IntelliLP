import React from 'react'
import './styles.css'
import TicBoard from './TicBoard'
import Options from './Options'
import Analytics from './Analytics'
import Prediction from './Prediction'

export default class Board extends React.Component{
    render(){
        let component
        switch(this.props.value){
            case 'tic': 
                component = <TicBoard />
                break
            case 'go3':
                component = <GoBoard value={3} />
                break
            case 'go9':
                component = <GoBoard value={9} />
                break
            case 'go19':
                component = <GoBoard value={19} />
                break
            default:
                component = null
        }
        return(
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
        )
    }
}


function GoBoard(props){
    return(
    <p>The length of board is {props.value}</p>
    )
}
