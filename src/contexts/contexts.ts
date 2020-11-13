import React from 'react'
import  {BoardStorePrototype} from '../types/board'

const BoardContext = React.createContext<BoardStorePrototype|null>(null)

export{
    BoardContext
}