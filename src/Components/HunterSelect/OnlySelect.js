import styled from 'styled-components'
import AssaultSupportSelect from './AssaultSupportSelect'
import TrapperMedicSelect from './TrapperMedicSelect'

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.0);
    flex: .7;
`

export default function OnlySelect() {
    return (
        <Container>
            <AssaultSupportSelect />
            <TrapperMedicSelect />
        </Container>
    )
}