import React from 'react'
import { deflateRaw } from 'zlib'

type MyProps={
    length:number
}

export default class SquareCanvas extends React.Component<MyProps>{
    private canvasRef: React.RefObject<any>
    constructor(props:MyProps){
        super(props)
        this.canvasRef= React.createRef()
    }
    componentDidMount(){
        let canvas = this.canvasRef.current
        canvas.width = 1000
        canvas.height = 1000
        let ctx = canvas.getContext('2d')
        this.drawGoBaord(ctx)
    }
    drawGoBaord(ctx:CanvasRenderingContext2D):void{
        let interval = 100
        let length = 900
        for(let row = 0; row < 10; row++){
            ctx.beginPath()
            ctx.moveTo(0, row*interval)
            ctx.lineTo(length, row*interval)
            ctx.stroke()
        }
        for(let column = 0; column < 10; column++){
            ctx.beginPath()
            ctx.moveTo(column*interval, 0)
            ctx.lineTo(column*interval, length)
            ctx.stroke()
        }
       
    }

    render(){
        return<canvas ref={this.canvasRef} />
    }
}