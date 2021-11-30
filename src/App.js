import 'normalize.css'
import './App.css'
import styled from 'styled-components'
import HunterSelect from './Components/HunterSelect/HunterSelect'
import MapSelect from './Components/MapSelect/MapSelect'
import MonsterSelect from './Components/MonsterSelect/MonsterSelect'
import BottomBar from './Components/BottomBar/BottomBar'
import HeaderMap from './Components/Headers/HeaderMap'
import HeaderTeamA from './Components/Headers/HeaderTeamA'
import HeaderTeamB from './Components/Headers/HeaderTeamB'
import Context from './Context'

const MainDiv = styled.div`
  background-image: url("https://sm.ign.com/t/ign_ap/articlepage/e/evolve-dlc/evolve-dlc-adds-new-monster-and-hunters-this-month_r7tf.1280.jpg");
  background-size: cover;
  height: 100vh;
  flex-direction: column;
`

const MainPanel = styled.div`
  background: rgba(0, 0, 0, 0.0);
`
const HeaderPanel = styled.div`
  background: rgba(0, 0, 0, 0.0);
  height: 10%;
  display: flex;
  `

function App() {
  return (
    <Context>
      <MainDiv className="App">
        <HeaderPanel>
          <HeaderTeamA />
          <HeaderMap />
          <HeaderTeamB />
        </HeaderPanel>
        <MainPanel>
          <HunterSelect />
          <MapSelect />
          <MonsterSelect />
          </MainPanel>
        <BottomBar />
      </MainDiv>
    </Context>
  );
}

export default App;
