import styled from 'styled-components'
import TwoRoleSelect from './TwoRoleSelect'

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.0);
    Grid Column: 1
`

export default function AssaultSupportSelect() {
    return (
        <Container>
            <TwoRoleSelect />
        </Container>
    )
}