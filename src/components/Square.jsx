import React from 'react'
import './styles.css'
import {observer} from 'mobx-react'

@observer
export default class Square extends React.Component{
    render(){
        return(
            <button className='square' disabled={this.props.disabled} onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        )
    }
}
