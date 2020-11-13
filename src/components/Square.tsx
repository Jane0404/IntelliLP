import React from 'react'
import './styles.css'
import {observer} from 'mobx-react'

type MyProps = {
    key: number,
    value: string,
    disabled: boolean,
    onClick: ()=>void
}

@observer
export default class Square extends React.Component<MyProps>{
    render(){
        return(
            <button 
                className='square' 
                disabled={this.props.disabled} 
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        )
    }
}
