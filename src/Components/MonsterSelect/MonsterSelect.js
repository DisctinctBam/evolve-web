import { useCallback, useContext } from 'react'
import styled from 'styled-components'
import MonsterPortrait from './MonsterPortrait'
import ThumbnailsMonsters from '../Thumbnails/ThumbnailsMonsters'
import * as Context from '../../Context'

//Container/wrapper for Portraits & Thumbnails
const Container = styled.div`
    background-color: rgba(255, 255, 0, 0.5);
    margin: 5px
    display: grid;
`

export default function MonsterSelect() {
    return (
        <Container>
            <MonsterPortrait />
            <ThumbnailsMonsters />
        </Container>        
    )
}