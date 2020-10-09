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
                            <Link to='/go9'>Go game 9*9 board</Link>
                        </li> 
                        <li className='nav-li'>
                            <Link to='/go13'>Go game 13*13 board</Link>
                        </li>
                        <li className='nav-li'>
                            <Link to='/go19'>Go game 19*19 board</Link>
                        </li>
                    </ul>
                </nav>
            <hr />
            <Switch>
                <Route exact path='/'> <Home/> </Route>
                <Route path='/:id' children={<CallBoard />}/>
            </Switch>
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
        <p>AI-FeiGo is a collaborative learning platform for learning games. <br/>It is augmented with deep learning technologies and learning theories like collaborative learning and gamification. <br/>Its goal is to enhance learners' decision-making skills in board games by real-time evaluations and predictions generated from deep neural networks.</p>
    )
}
