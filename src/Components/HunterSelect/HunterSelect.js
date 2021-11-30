import styled from 'styled-components'
import OnlySelect from './OnlySelect'
import ThumbnailsHunters from '../Thumbnails/ThumbnailsHunters'

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.0);
    flex-direction: column;
    margin: 10px
`

export default function HunterSelect() {
    return (
        <Container>
            <OnlySelect />
            <ThumbnailsHunters />
        </Container>
    )
}