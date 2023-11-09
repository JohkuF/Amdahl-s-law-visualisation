import "./App.css";
import PlotXY from "./Plot";
import styled from "styled-components";
import Info from "./Info";
import Calculator from "./calculator";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: lightgray;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 30%;
  background-color: lightblue;
`;

const Plotdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 70%;
  background-color: lightgreen;
`;

function App() {
  return (
    <div className="App">
      <h1>Amdahlin lain visualistaminen</h1>
      <Container>
        <InfoDiv>
          <Info />
          <Calculator />
        </InfoDiv>
        <Plotdiv>
          <PlotXY />
        </Plotdiv>
      </Container>
    </div>
  );
}

export default App;
