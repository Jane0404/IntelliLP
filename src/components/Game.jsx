import React from 'react'
import TicBoard from './TicBoard'
import './styles.css'
import { 
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom'

export default class Game extends React.Component{
  
    render(){
        return(
            <Router>
                <div>
                    <header>
                        <h1 className='title'>Welcome to AI-FeiGo</h1>
                        <h2 className='secondTitle'>Your opponent is an AI collabordative learning partner called FeiGo</h2>
                    </header>
                    <nav>
                        <ul className='nav-ul'>
                            <li className='nav-li'>
                                <Link to = '/'>Home</Link>
                            </li>
                            <li className='nav-li'>
                                <Link to='/tic'>Tic-Tac-Toe</Link>
                            </li>
                            <li className='nav-li'>
                                <Link to='/go3'>Go game 3*3 board</Link>
                            </li>
                            <li className='nav-li'>
                                <Link to='/go9'>Go game 9*9 board</Link>
                            </li> 
                            <li className='nav-li'>
                                <Link to='/go19'>Go game 19*19 board</Link>
                            </li>
                        </ul>
                    </nav>
                <hr />
                <Switch>
                    <Route exact path='/'><Home /></Route>
                    <Route path='/tic'><TicBoard /></Route>
                    <Route path='/go3'><GoBoard value={3} /></Route>
                    <Route path='/go9'><GoBoard value={9} /></Route> 
                    <Route path='/go19'><GoBoard value={19} /></Route>  
                </Switch>
                </div> 
            </Router>
        )
    }
}

function GoBoard(props){
    return(
    <p>The length of board is {props.value}</p>
    )
}
function Home(){
    return(
        <p>AI-FeiGo is a collaborative learning platform of learning games</p>
    )
}