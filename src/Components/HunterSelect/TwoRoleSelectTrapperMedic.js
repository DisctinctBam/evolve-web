import { useCallback, useContext } from 'react'
import styled from 'styled-components'
import TrapperThumbnail from '../../Images/Other_Icons/Trapper.jpg'
import MedicThumbnail from '../../Images/Other_Icons/Medic.jpg'
import * as Context from '../../Context'

//Container/wrapper for Class icons, Portraits
const Container = styled.div`
    background-color: inherit;
    flex-direction: column;
`

//-------------------------------------------Class Icons---------------------------------------
//Wrapper for Class icons (headers)
const IconContainer = styled.div`
    flex: .2
`

//Containers for Class icons (headers)
const IconContainerTrapper = styled.div`
`

const IconContainerMedic = styled.div`
`

//Actual Class images
const MedicThumb = styled.img`
`

const TrapperThumb = styled.img`
`

function Icons () {
    return (
            <IconContainer>
                <IconContainerTrapper>
                    <TrapperThumb alt={"Trapper"} src={TrapperThumbnail} />
                </IconContainerTrapper>
                <IconContainerMedic>
                    <MedicThumb alt={"Medic"} src={MedicThumbnail} />
                </IconContainerMedic>
            </IconContainer>
    )
}

//-------------------------------------------Portraits---------------------------------------
//Container for selected portrait
const SelectedCharacterContainer = styled.div`
`

//Portraitdata
function SelectedCharacter({character}) {
    return (
        <SelectedCharacterContainer>
            {character && <SelectedCharacterImage src={character.portrait} />}
        </SelectedCharacterContainer>
    )
}

//Actual Portrait Images
const SelectedCharacterImage = styled.img`
    object-fit: cover;
`

//Container for Background behind Portraits
const SelectionContainer = styled.div`
    background: rgba(255, 255, 255, 0.5);
`

function Selections () {
    const [gameState, setGameState] = useContext(Context.GameStateContext)
    return (
        <SelectionContainer>
            <SelectedCharacter character={gameState.selectedTrapper} />
            <SelectedCharacter character={gameState.selectedMedic} />
        </SelectionContainer>
    )
}

export default function TwoRoleSelectTrapperMedic() {
    return (
        <Container>
            <Icons />
            <Selections />
        </Container>        
    )
}
