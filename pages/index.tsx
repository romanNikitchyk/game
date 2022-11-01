import styled, {createGlobalStyle} from "styled-components";
import Settings from "./Settings";
import {Win} from "./Win";
import {Provider} from "react-redux";
import {store} from "../components/store";
import Playground from "./playground";


/*const GlobalStyle = createGlobalStyle`
  * {
    
    
  }
`

const Global = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #0070f3;
  display: flex;
  justify-content: center;
`*/
const Home = () => {
  return (
      <Settings/>
  )
}
export default Home;