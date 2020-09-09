import React from 'react'
import './styles.css'

export default class Square extends React.Component{
    render(){
        return(
            <button className='square' onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        )
    }
}
