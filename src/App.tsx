import { DashBoard } from "./pages/Dashboard/DashBoard";
import { Container } from "./pages/Dashboard/DashBoard.style";
import Navbar from "./pages/Navbar/Navbar";
import { Performance } from "./pages/Perforrmance/Performance";
import "./App.css";

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
