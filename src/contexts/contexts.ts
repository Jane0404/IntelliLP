import React from 'react'
import  {BoardStorePrototype} from '../types/board'
import {TicStore} from '../stores/stores'


const BoardContext = React.createContext<BoardStorePrototype | null>(null)

export{
    BoardContext
}