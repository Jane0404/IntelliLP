import React from 'react'
import ReactDOM from 'react-dom'
import Game from './components/Game'

ReactDOM.render(<Game />, document.getElementById('root'))


//import './index.css'

// class Square extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={tag: null}
//         this.displayXO = this.displayXO.bind(this)
//     }

//     displayXO(){
//         if(this.props.player == 'X'){
//             this.setState({tag: 'X'})
//         }else{
//             this.setState({tag:'O'})
//         }
//         this.props.changePlayer()
//     }

//     render(){
//         return(
//             <button className='square' onClick={this.displayXO}>
//                 {this.state.tag}
//             </button>
//         )
//     }
// }

// class Board extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={player: 'X'}
//         this.changePlayer = this.changePlayer.bind(this)
//     }
//     changePlayer(){
//         if(this.state.player == 'X'){
//             this.setState({player: 'O'})
//         }else{
//             this.setState({player: 'X'})
//         }
//     }
//     renderSquare(i){
//         return <Square changePlayer={this.changePlayer} player={this.state.player} position={i}/>
//     }

//     render(){
//         const status = 'Next player: X'
//         return(
//             <div>
//                 <div className='status'>{status}</div>
//                 <div className='board-row'>
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className='board-row'>
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className='board-row'>
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         )
//     }
// }

// class Game extends React.Component{
//     render(){
//         return(
//             <div className='game'>
//                 <div className='game-board'>
//                     <Board />
//                 </div>
                
//                 <div className='game-info'>
//                     <div>{/* status*/}</div>
//                     <ol>{/*ToDO */}</ol>
//                 </div>
//             </div>
//         )
//     }
// }

