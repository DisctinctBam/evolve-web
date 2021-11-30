import { useContext } from "react"
import styled from "styled-components"
import * as Context from "../../Context"
import ThumbnailsMaps from "../Thumbnails/ThumbnailsMaps"

const Container = styled.div`
    flex: .2;
`

export default function MapOptions() {
    const [gameState, setGameState] = useContext(Context.GameStateContext)

    return (
        <Container className={gameState.isMapSelect ? 'red-outline' : undefined}>
            <ThumbnailsMaps />
        </Container>
    )
}