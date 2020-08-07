import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>Hello React was built successfully</div>
    }
}

ReactDOM.render(
    <Header />, document.getElementById('root')
)