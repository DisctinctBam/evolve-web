import { useCallback, useContext } from 'react'
import styled from 'styled-components'
import GoliathThumbnail from '../../Images/Thumbnails/25Goliath Profile Pic.png'
import GoliathPortrait from '../../Images/Portraits/Monster/25Goliath_Portrait.png'
import MeteorGoliathThumbnail from '../../Images/Thumbnails/26Meteor Goliath Profile Pic.png'
import MeteorGoliathPortrait from '../../Images/Portraits/Monster/26Meteor_Goliath_Portrait.png'
import KrakenThumbnail from '../../Images/Thumbnails/27Kraken Profile Pic.png'
import KrakenPortrait from '../../Images/Portraits/Monster/27Kraken_Portrait.png'
import WraithThumbnail from '../../Images/Thumbnails/28Wraith Profile Pic.png'
import WraithPortrait from '../../Images/Portraits/Monster/28Wraith_Portrait.png'
import BehemothThumbnail from '../../Images/Thumbnails/29Behemoth Profile Pic.png'
import BehemothPortrait from '../../Images/Portraits/Monster/29Behemot_Portrait.png'
import GorgonThumbnail from '../../Images/Thumbnails/30Gorgon Profile Pic.png'
import GorgonPortrait from '../../Images/Portraits/Monster/30Gorgon_Portrait.png'
import * as Context from '../../Context'

//Container/wrapper for Thumbnails
const Container = styled.div`
    flex: .1;
`

//-------------------------------------------Thumbnails---------------------------------------
//Container for icon containers
const MonsterAvailableContainer = styled.div`
`

//Boxes for specific thumbnails
const MonsterContainer = styled.div`
    border: 1px solid black;
    margin: 1px;
    height: 47px;
    width: 64.03px;
`

//Actual Thumbnail images
const MonsterThumbnail = styled.img`    
`

//Click on Thumbnail -> Return Portrait
function Monster({data}) {
    const [gameState, setGameState] = useContext(Context.GameStateContext)
    // TODO: check if he's banned
    // TODO: check game state 
    const selectMonster = useCallback(() => {
        // TODO: obviously, we just want to modify the state, not reset it completely
        console.log("Selecting:", data)
        setGameState(
            {
                selectedMonster: data
            }
        )
    }, [data])
    return (
        <MonsterContainer onClick={selectMonster}>
            <MonsterThumbnail alt={data.name} src={data.thumbnail} />
        </MonsterContainer>
    )
}

function MonsterAvailable () {
    // This should be somewhere else; possibly from server? could be here as well
    const Monsters = [{
        name: 'Goliath',
        role: 'Monster',
        thumbnail: GoliathThumbnail,
        portrait: GoliathPortrait
    },{
        name: 'Meteor Goliath',
        role: 'Monster',
        thumbnail: MeteorGoliathThumbnail,
        portrait: MeteorGoliathPortrait
    },{
        name: 'Kraken',
        role: 'Monster',
        thumbnail: KrakenThumbnail,
        portrait: KrakenPortrait
    },{
        name: 'Wraith',
        role: 'Monster',
        thumbnail: WraithThumbnail,
        portrait: WraithPortrait
    },{
        name: 'Behemoth',
        role: 'Monster',
        thumbnail: BehemothThumbnail,
        portrait: BehemothPortrait
    },{
        name: 'Gorgon',
        role: 'Monster',
        thumbnail: GorgonThumbnail,
        portrait: GorgonPortrait
    }]

    return (
        <MonsterAvailableContainer>
            {Monsters.map(c => <Monster data={c} />)}
        </MonsterAvailableContainer>
    )
}

export default function ThumbnailsMonsters() {
    return (
        <Container>
            <MonsterAvailable />
        </Container>        
    )
}