import styled from "styled-components"
import ThumbnailsMaps from "../Thumbnails/ThumbnailsMaps"

const Container = styled.div`
    flex: .2;
`

export default function MapOptions() {
    return (
        <Container>
            <ThumbnailsMaps />
        </Container>
    )
}