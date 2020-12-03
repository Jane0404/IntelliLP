import React from 'react'
import './styles.scss'
import {observer} from 'mobx-react'

type MyProps = {
    key: number,
    value: string | number | null,
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
