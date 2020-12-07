import React from 'react'

type MyProps={
    length:number
}

export default class SquareCanvas extends React.Component<MyProps>{
    private canvasRef: React.RefObject<any>
    interval: number
    length: number
    constructor(props:MyProps){
        super(props)
        console.log('this.props', this.props.length)
        this.canvasRef= React.createRef()
        this.interval = 100
        this.length = this.props.length * this.interval
    }
    componentDidMount(){
        let canvas = this.canvasRef.current
        canvas.width = this.length
        canvas.height = this.length
        let ctx = canvas.getContext('2d')
        this.drawGoBaord(ctx, this.props.length)
    }
    drawGoBaord(ctx:CanvasRenderingContext2D, num: number):void{
        console.log('square_length:', num)

        for(let row = 0; row < num+1; row++){
            ctx.beginPath()
            ctx.moveTo(0, row*this.interval)
            ctx.lineTo(this.length, row*this.interval)
            ctx.stroke()
        }
        for(let column = 0; column < num+1; column++){
            ctx.beginPath()
            ctx.moveTo(column*this.interval, 0)
            ctx.lineTo(column*this.interval, this.length)
            ctx.stroke()
        }
       
    }

    render(){
        return<canvas ref={this.canvasRef} />
    }
}