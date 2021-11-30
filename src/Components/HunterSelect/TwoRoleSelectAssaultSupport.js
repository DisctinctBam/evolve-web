// This file is all the shared pieces between the Support+Medic selection and the Trapper+Assault selection phases
import { useCallback, useContext } from 'react'
import styled from 'styled-components'
import AssaultThumbnail from '../../Images/Other_Icons/Assault.jpg'
import SupportThumbnail from '../../Images/Other_Icons/Support.jpg'
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
const IconContainerAssault = styled.div`
`

const IconContainerSupport = styled.div`
`

//Actual Class images
const AssaultThumb = styled.img`
`

const SupportThumb = styled.img`
`

function Icons () {
    return (
            <IconContainer>
                <IconContainerAssault>
                    <AssaultThumb alt={"Assault"} src={AssaultThumbnail} />
                </IconContainerAssault>
                <IconContainerSupport>
                    <SupportThumb alt={"Support"} src={SupportThumbnail} />
                </IconContainerSupport>
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
            <SelectedCharacter character={gameState.selectedAssault} />
            <SelectedCharacter character={gameState.selectedSupport} />
        </SelectionContainer>
    )
}

export default function TwoRoleSelectAssaultSupport() {
    return (
        <Container>
            <Icons />
            <Selections />
        </Container>        
    )
}