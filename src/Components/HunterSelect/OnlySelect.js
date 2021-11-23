import styled from 'styled-components'
import AssaultSupportSelect from './AssaultSupportSelect'
import TrapperMedicSelect from './TrapperMedicSelect'

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.0);
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export default function OnlySelect() {
    return (
        <Container>
            <TrapperMedicSelect />
            <AssaultSupportSelect />
        </Container>
    )
}