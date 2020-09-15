import React from 'react'
import './styles.css'
import { 
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    useParams
} from 'react-router-dom'
import Board from './Board'

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
                    <Route exact path='/'> <Home /> </Route>
                    <Route path='/:id' children={<CallBoard />}/>
                </Switch>
                </div> 
            </Router>
        )
    }
}

function CallBoard() {
    let {id} = useParams()
    return(
        <Board value={id}/>
    )
}

function Home(){
    return(
        <p>AI-FeiGo is a collaborative learning platform of learning games</p>
    )
}
