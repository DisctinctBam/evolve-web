import styled from 'styled-components'
import HeaderMap from './HeaderMap'
import HeaderTeamA from './HeaderTeamA'
import HeaderTeamB from './HeaderTeamB'

const Container = styled.div`
    background: rgba(0, 0, 0);
    flex-direction: column;
    font-family: impact;
    margin: 5px
`

export default function HeaderMap() {
    return (
        <Container>
            <HeaderTeamA />
            <HeaderMap />
            <HeaderTeamB />
        </Container>
    )
}