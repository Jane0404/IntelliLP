import React from 'react'
import ReactDOM from 'react-dom'
import Content from './components/Content'

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>Hello React was built successfully</div>
    }
}

ReactDOM.render(
<div>
    <Header />
    <Content />
</div>, document.getElementById('root')
)