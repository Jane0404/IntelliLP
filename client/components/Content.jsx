import React from 'react'
import styles from './style.css'

const divBlueStyle={
    color:'blue'
}

export default class Content extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log('styles:', styles)
        console.log('styles.helloRed:', styles.helloRed)
        return <div className={styles.helloRed}><p>I am so gald that you can see me</p></div>
    }
}