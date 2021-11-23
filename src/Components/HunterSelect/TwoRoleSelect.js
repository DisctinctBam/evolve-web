// This file is all the shared pieces between the Support+Medic selection and the Trapper+Assault selection phases
import { useCallback, useContext } from 'react'
import styled from 'styled-components'
import AssaultThumbnail from '../../Images/Other_Icons/Assault.jpg'
import SupportThumbnail from '../../Images/Other_Icons/Support.jpg'
import TrapperThumbnail from '../../Images/Other_Icons/Trapper.jpg'
import MedicThumbnail from '../../Images/Other_Icons/Medic.jpg'
import GriffinThumbnail from '../../Images/Thumbnails/09Griffin Profile Pic.png'
import GriffinPortrait from '../../Images/Portraits/09Griffin_Portrait.png'
import * as Context from '../../Context'

//Container/wrapper for Class icons, Portraits, Thumbnails
const Container = styled.div`
    background-color: inherit;
    flex-direction: column;
`

//-------------------------------------------Class Icons---------------------------------------
//Wrapper for Class icons (headers)
const IconContainer = styled.div`
    height: 40%;
`

//Containers for Class icons (headers)
const IconContainerAssault = styled.div`
    background-color: rgba(0, 0, 0, 0.0);
    width: 50%;
    background-image: url(${AssaultThumbnail});
    background-size: cover;
`

const IconContainerSupport = styled.div`
    background-color: rgba(0, 0, 0, 0.0);
    width: 50%;
    background-image: url(${SupportThumbnail});
    background-size: cover;
`

//Actual Class images
const ClassThumbnail = styled.img`
`

function Icons () {
    return (
            <IconContainer>
                <IconContainerAssault></IconContainerAssault>
                <IconContainerSupport></IconContainerSupport>
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
    height: 350px
`

function Selections () {
    const [gameState, setGameState] = useContext(Context.GameStateContext)
    return (
        <SelectionContainer>
            <SelectedCharacter character={gameState.selectedAssault} />
            <SelectedCharacter character={gameState.selectedTrapper} />
        </SelectionContainer>
    )
}

export default function TwoRoleSelect() {
    return (
        <Container>
            <Icons />
            <Selections />
        </Container>        
    )
}
