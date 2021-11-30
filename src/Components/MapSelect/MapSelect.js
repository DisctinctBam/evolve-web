import { useCallback, useContext } from 'react'
import styled from 'styled-components'
import * as Context from '../../Context'

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    margin: 5px
`

//-------------------------------------------Portrait---------------------------------------
//Container for Background behind Maps
const MapSelectionContainer = styled.div`
`

//Container for selected Map
const SelectedMapContainer = styled.div`
`

//Map data
function SelectedMap({Map}) {
    return (
        <SelectedMapContainer>
            {Map && <SelectedMapImage src={Map.portrait} />}
        </SelectedMapContainer>
    )
}

//Actual Map Images
const SelectedMapImage = styled.img`
    object-fit: scale-down;
`

function MapSelection () {
    const [gameState, setGameState] = useContext(Context.GameStateContext)
    return (
        <MapSelectionContainer>
            <SelectedMap Map={gameState.selectedMap} />
        </MapSelectionContainer>
    )
}

export default function MapSelect() {
    return (
        <Container>
            <MapSelection />
        </Container>
    )
}