import { useCallback, useContext } from 'react'
import styled from 'styled-components'
import * as Context from '../../Context'

//Container/wrapper for Portraits & Thumbnails
const Container = styled.div`
    background: rgba(0, 255, 255, 0.5);
    height: 50%;
    grid-template-columns: 1fr 1fr;
`

//-------------------------------------------Portrait---------------------------------------
//Container for Background behind Portraits
const MonsterSelectionContainer = styled.div`
`

//Container for selected portrait
const SelectedMonsterContainer = styled.div`
`

//Portraitdata
function SelectedMonster({Monster}) {
    return (
        <SelectedMonsterContainer>
            {Monster && <SelectedMonsterImage src={Monster.portrait} />}
        </SelectedMonsterContainer>
    )
}

//Actual Portrait Images
const SelectedMonsterImage = styled.img`
    object-fit: cover;
`

function MonsterSelection () {
    const [gameState, setGameState] = useContext(Context.GameStateContext)
    return (
        <MonsterSelectionContainer>
            <SelectedMonster Monster={gameState.selectedMonster} />
        </MonsterSelectionContainer>
    )
}

export default function MonsterPortrait() {
    return (
        <Container>
            <MonsterSelection />
        </Container>        
    )
}