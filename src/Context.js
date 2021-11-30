import React, { useState } from 'react'
import { GameState } from './GameState'

const GameStateContext = React.createContext({})

export default function Context({children}) {
    const [gameState, setGameState] = useState(new GameState({ 
        stageData: [],
        workingData: {} // data for the current stage, as it's being decided
    }))
    const setGameStateWrapper = (newState) => {
        setGameState(new GameState(newState))
    }
    return (
        <GameStateContext.Provider value={[gameState, setGameStateWrapper]}>
            {children}
        </GameStateContext.Provider>
    )
}

export { GameStateContext }