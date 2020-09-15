import React from 'react'

export default class Options extends React.Component{
    render(){
        return(
            <div className='optionsLayout'>
                <button>Choose Opponent</button>
                <button>Clear Board</button>
                <button>Go to Last Board</button>
                <button>End Game </button>
                <button>Store Board</button>
                <button>Board Analytics</button>
            </div>
        )
    }
}