import { useCallback, useContext } from 'react'
import styled from 'styled-components'
import ArmoryThumbnail from '../../Images/Map_Thumbs/Armory_IMG.PNG'
import ArmoryMap from '../../Images/Maps/Armory_map.jpg'
import BarracksThumbnail from '../../Images/Map_Thumbs/Barracks_IMG.PNG'
import BarracksMap from '../../Images/Maps/Barracks_map.jpg'
import DamThumbnail from '../../Images/Map_Thumbs/Dam_IMG.PNG'
import DamMap from '../../Images/Maps/Dam_map.jpg'
import DistilleryThumbnail from '../../Images/Map_Thumbs/Distillery_IMG.PNG'
import DistilleryMap from '../../Images/Maps/Distillery_map.jpg'
import Fusion_PlantThumbnail from '../../Images/Map_Thumbs/Fusion_Plant_IMG.PNG'
import Fusion_PlantMap from '../../Images/Maps/Fusion_plant_map.jpg'
import MedlabThumbnail from '../../Images/Map_Thumbs/Medlab_IMG.PNG'
import MedlabMap from '../../Images/Maps/Medlab_map.jpg'
import Orbital_drillThumbnail from '../../Images/Map_Thumbs/Orbital_drill_IMG.PNG'
import Orbital_drillMap from '../../Images/Maps/Orbital_drill_map.jpg'
import Refueling_TowerThumbnail from '../../Images/Map_Thumbs/Refueling_Tower_IMG.PNG'
import Refueling_TowerMap from '../../Images/Maps/Refueling_tower_map.jpg'
import Rendering_PlantThumbnail from '../../Images/Map_Thumbs/Rendering_plant_IMG.PNG'
import Rendering_PlantMap from '../../Images/Maps/Rendering_plant_map.jpg'
import Weather_Control_TowerThumbnail from '../../Images/Map_Thumbs/Weather_control_tower_IMG.PNG'
import Weather_Control_TowerMap from '../../Images/Maps/Weather_control_tower_map.jpg'
import Wraith_TrapThumbnail from '../../Images/Map_Thumbs/Wraith_trap_IMG.PNG'
import Wraith_TrapMap from '../../Images/Maps/Wraith_trap_map.jpg'
import * as Context from '../../Context'

//Container/wrapper for Thumbnails
const Container = styled.div`
`

//Boxes for specific thumbnails
const MapContainer = styled.div`
    border: 1.5px solid white;
    margin: 1px;
    height: 70px;
    width: 62.5px;
`

//Actual Thumbnail images
const MapThumbnail = styled.img`    
`

//Click on Thumbnail -> Return Portrait
function Map({data}) {
    const [gameState, setGameState] = useContext(Context.GameStateContext)
    // TODO: check if he's banned
    // TODO: check game state 
    const selectMap = useCallback(() => {
        // TODO: obviously, we just want to modify the state, not reset it completely
        console.log("Selecting:", data)
        setGameState(
            {
                selectedMap: data
            }
        )
    }, [data])
    return (
        <MapContainer onClick={selectMap}>
            <MapThumbnail alt={data.name} src={data.thumbnail} />
        </MapContainer>
    )
}

//Container for Thumbnail containers
const MapAvailableContainer = styled.div`
    flex-wrap: wrap;
`

function MapAvailable () {
    // This should be somewhere else; possibly from server? could be here as well
    const Maps = [{
        name: 'Armory',
        role: 'Map',
        thumbnail: ArmoryThumbnail,
        portrait: ArmoryMap
    },{
        name: 'Barracks',
        role: 'Map',
        thumbnail: BarracksThumbnail,
        portrait: BarracksMap
    },{
        name: 'Dam',
        role: 'Map',
        thumbnail: DamThumbnail,
        portrait: DamMap
    },{
        name: 'Distillery',
        role: 'Map',
        thumbnail: DistilleryThumbnail,
        portrait: DistilleryMap
    },{
        name: 'Fusion_Plant',
        role: 'Map',
        thumbnail: Fusion_PlantThumbnail,
        portrait: Fusion_PlantMap
    },{
        name: 'Medlab',
        role: 'Map',
        thumbnail: MedlabThumbnail,
        portrait: MedlabMap
    },{
        name: 'Orbital_drill',
        role: 'Map',
        thumbnail: Orbital_drillThumbnail,
        portrait: Orbital_drillMap
    },{
        name: 'Refueling_Tower',
        role: 'Map',
        thumbnail: Refueling_TowerThumbnail,
        portrait: Refueling_TowerMap
    },{
        name: 'Rendering_Plant',
        role: 'Map',
        thumbnail: Rendering_PlantThumbnail,
        portrait: Rendering_PlantMap
    },{
        name: 'Weather_Control_Tower',
        role: 'Map',
        thumbnail: Weather_Control_TowerThumbnail,
        portrait: Weather_Control_TowerMap
    },{
        name: 'Wraith_Trap',
        role: 'Map',
        thumbnail: Wraith_TrapThumbnail,
        portrait: Wraith_TrapMap
    }]
    return (
        <MapAvailableContainer>
            {Maps.map(c => <Map data={c} />)}
        </MapAvailableContainer>
    )
}

export default function ThumbnailsMaps() {
    return (
        <Container>
            <MapAvailable />
        </Container>        
    )
}