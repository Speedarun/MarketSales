import { DashBoard } from "./pages/Dashboard/DashBoard";
import Navbar from "./pages/Navbar/NavBar";
import { Performance } from "./pages/Perforrmance/Performance";
import "./App.css";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 98vh;
  font-family: "Arial", sans-serif;
  border-radius: 12px;
`;

const App = () => {
  return (
    <div className="div">
      <Container>
        <Navbar />
        <div className="div2">
          <DashBoard />
          <div className="div3">
            <Performance />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;
