import { useCallback, useContext } from 'react'
import styled from 'styled-components'
import MarkovThumbnail from '../../Images/Thumbnails/01Markov Profile Pic.png'
import MarkovPortrait from '../../Images/Portraits/01Markov_Portrait.png'
import BlitzThumbnail from '../../Images/Thumbnails/02Blitz Markov.png'
import BlitzPortrait from '../../Images/Portraits/02Blitz_Markov_Portrait.jpg'
import HydeThumbnail from '../../Images/Thumbnails/03Hyde Profile Pic.png'
import HydePortrait from '../../Images/Portraits/03Hyde_Portrait.png'
import ParnellThumbnail from '../../Images/Thumbnails/04Parnell Profile Pic.png'
import ParnellPortrait from '../../Images/Portraits/04Parnell_Portrait.png'
import TorvaldThumbnail from '../../Images/Thumbnails/05Torvald Profile Pic.png'
import TorvaldPortrait from '../../Images/Portraits/05Torvald_Portrait.png'
import LennoxThumbnail from '../../Images/Thumbnails/06Lennox Profile Pic.png'
import LennoxPortrait from '../../Images/Portraits/06Lennox_Portrait.png'
import MaggieThumbnail from '../../Images/Thumbnails/07Maggie Profile Pic.png'
import MaggiePortrait from '../../Images/Portraits/07Maggie_Portrait.png'
import WaggieThumbnail from '../../Images/Thumbnails/08Wasteland Maggie Profile Pic.png'
import WaggiePortrait from '../../Images/Portraits/08Wasteland_Maggie_Portrait.png'
import GriffinThumbnail from '../../Images/Thumbnails/09Griffin Profile Pic.png'
import GriffinPortrait from '../../Images/Portraits/09Griffin_Portrait.png'
import AbeThumbnail from '../../Images/Thumbnails/10Abe Profile Pic.png'
import AbePortrait from '../../Images/Portraits/10Abe_Portrait.png'
import CrowThumbnail from '../../Images/Thumbnails/11Crow Profile Pic.png'
import CrowPortrait from '../../Images/Portraits/11Crow_Portrait.png'
import JackThumbnail from '../../Images/Thumbnails/12Jack Profile Pic.png'
import JackPortrait from '../../Images/Portraits/12Jack_Portrait.png'
import ValThumbnail from '../../Images/Thumbnails/13Val Profile Pic.png'
import ValPortrait from '../../Images/Portraits/13Val_Portrait.png'
import RValThumbnail from '../../Images/Thumbnails/14Rogue Val Profile Pic.png'
import RValPortrait from '../../Images/Portraits/14Rogue Val_Portrait.png'
import LazThumbnail from '../../Images/Thumbnails/15Laz Profile Pic.png'
import LazPortrait from '../../Images/Portraits/15Lazarus_Portrait.png'
import CairaThumbnail from '../../Images/Thumbnails/16Caira Profile Pic.png'
import CairaPortrait from '../../Images/Portraits/16Caira_portrait.png'
import SlimThumbnail from '../../Images/Thumbnails/17Slim Profile Pic.png'
import SlimPortrait from '../../Images/Portraits/17Slim_Portrait.png'
import EmetThumbnail from '../../Images/Thumbnails/18Emet Profile Pic.png'
import EmetPortrait from '../../Images/Portraits/18Emet__Portrait.png'
import HankThumbnail from '../../Images/Thumbnails/19Hank Profile Pic.png'
import HankPortrait from '../../Images/Portraits/19Hank_Portrait.png'
import TechHankThumbnail from '../../Images/Thumbnails/20Tech Hank Profile Pic.png'
import TechHankPortrait from '../../Images/Portraits/20Tech_Sergeant_Hank_Portrait.png'
import BucketThumbnail from '../../Images/Thumbnails/21Bucket Profile Pic.png'
import BucketPortrait from '../../Images/Portraits/21Bucket_Portrait.png'
import CabotThumbnail from '../../Images/Thumbnails/22Cabot Profile Pic.png'
import CabotPortrait from '../../Images/Portraits/22Cabot_Portrait.png'
import SunnyThumbnail from '../../Images/Thumbnails/23Sunny Profile Pic.png'
import SunnyPortrait from '../../Images/Portraits/23Sunny_Portrait.png'
import KalaThumbnail from '../../Images/Thumbnails/24Kala Profile Pic.png'
import KalaPortrait from '../../Images/Portraits/24Kala_Portrait.png'
import TwoRoleSelect from '../HunterSelect/TwoRoleSelect'

import * as Context from '../../Context'

//Container/wrapper for Thumbnails
const Container = styled.div`
    background-color: inherit;
    height: 210px
    padding: 10px
`

//Boxes for specific thumbnails
const CharacterContainer = styled.div`
    border: 1px solid black;
    margin: 1px;
    height: 47px;
    width: 64.03px;
`

//Actual Thumbnail images
const CharacterThumbnail = styled.img`    
`

//Click on Thumbnail -> Return Portrait
function Character({data}) {
    const [gameState, setGameState] = useContext(Context.GameStateContext)
    // TODO: check if he's banned
    // TODO: check game state 
    const selectCharacter = useCallback(() => {
        // TODO: obviously, we just want to modify the state, not reset it completely
        console.log("Selecting:", data)
        setGameState(
            {
                selectedAssault: data
            }
        )
    }, [data])
    return (
        <CharacterContainer onClick={selectCharacter}>
            <CharacterThumbnail alt={data.name} src={data.thumbnail} />
        </CharacterContainer>
    )
}

//Container for Thumbnail containers
const AvailableContainer = styled.div`
    background: rgba(255, 255, 255, 0.5);
    flex-wrap: wrap;
`

function Available () {
    // This should be somewhere else; possibly from server? could be here as well
    const characters = [{
        name: 'Markov',
        role: 'Assault',
        thumbnail: MarkovThumbnail,
        portrait: MarkovPortrait
    },{
        name: 'Blitz Markov',
        role: 'Assault',
        thumbnail: BlitzThumbnail,
        portrait: BlitzPortrait
    },{
        name: 'Hyde',
        role: 'Assault',
        thumbnail: HydeThumbnail,
        portrait: HydePortrait
    },{
        name: 'Parnell',
        role: 'Assault',
        thumbnail: ParnellThumbnail,
        portrait: ParnellPortrait
    },{
        name: 'Torvald',
        role: 'Assault',
        thumbnail: TorvaldThumbnail,
        portrait: TorvaldPortrait
    },{
        name: 'Lennox',
        role: 'Assault',
        thumbnail: LennoxThumbnail,
        portrait: LennoxPortrait
    },{
        name: 'Maggie',
        role: 'Trapper',
        thumbnail: MaggieThumbnail,
        portrait: MaggiePortrait
    },{
        name: 'Wasteland Maggie',
        role: 'Trapper',
        thumbnail: WaggieThumbnail,
        portrait: WaggiePortrait
    },{
        name: 'Griffin',
        role: 'Trapper',
        thumbnail: GriffinThumbnail,
        portrait: GriffinPortrait
    },{
        name: 'Abe',
        role: 'Trapper',
        thumbnail: AbeThumbnail,
        portrait: AbePortrait
    },{
        name: 'Crow',
        role: 'Trapper',
        thumbnail: CrowThumbnail,
        portrait: CrowPortrait
    },{
        name: 'Jack',
        role: 'Trapper',
        thumbnail: JackThumbnail,
        portrait: JackPortrait
    },{
        name: 'Val',
        role: 'Medic',
        thumbnail: ValThumbnail,
        portrait: ValPortrait
    },{
        name: 'Rogue Val',
        role: 'Medic',
        thumbnail: RValThumbnail,
        portrait: RValPortrait
    },{
        name: 'Laz',
        role: 'Medic',
        thumbnail: LazThumbnail,
        portrait: LazPortrait
    },{
        name: 'Caira',
        role: 'Medic',
        thumbnail: CairaThumbnail,
        portrait: CairaPortrait
    },{
        name: 'Slim',
        role: 'Medic',
        thumbnail: SlimThumbnail,
        portrait: SlimPortrait
    },{
        name: 'Emet',
        role: 'Medic',
        thumbnail: EmetThumbnail,
        portrait: EmetPortrait
    },{
        name: 'Hank',
        role: 'Support',
        thumbnail: HankThumbnail,
        portrait: HankPortrait
    },{
        name: 'TechHank',
        role: 'Support',
        thumbnail: TechHankThumbnail,
        portrait: TechHankPortrait
    },{
        name: 'Bucket',
        role: 'Support',
        thumbnail: BucketThumbnail,
        portrait: BucketPortrait
    },{
        name: 'Cabot',
        role: 'Support',
        thumbnail: CabotThumbnail,
        portrait: CabotPortrait
    },{
        name: 'Sunny',
        role: 'Support',
        thumbnail: SunnyThumbnail,
        portrait: SunnyPortrait
    },{
        name: 'Kala',
        role: 'Support',
        thumbnail: KalaThumbnail,
        portrait: KalaPortrait
    }]
    return (
        <AvailableContainer>
            {characters.map(c => <Character data={c} />)}
        </AvailableContainer>
    )
}

export default function ThumbnailsHunters() {
    return (
        <Container>
            <Available />
        </Container>        
    )
}