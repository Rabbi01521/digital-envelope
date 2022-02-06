import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Aluminum from "./Components/Aluminum/Aluminum";
import Co2Reduction from "./Components/Co2Reduction/Co2Reduction";
import Envelope from "./Components/Envelope/Envelope";
import ForestBased from "./Components/ForestBased/ForestBased";
import FscLabel from "./Components/FscLabel/FscLabel";
import Menu from "./Components/Menu/Menu/Menu";
import ModalForm from "./Components/Menu/ModalForm/ModalForm";
import Recyclable from "./Components/Recyclable/Recyclable";

function App() {
  return (
    <div>
      {/* <Envelope></Envelope> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Envelope></Envelope>
          </Route>
          <Route path="/menu">
            <Menu></Menu>
          </Route>
          <Route path="/forestBased">
            <ForestBased></ForestBased>
          </Route>
          <Route path="/fscLabel">
            <FscLabel></FscLabel>
          </Route>
          <Route path="/aluminum">
            <Aluminum></Aluminum>
          </Route>
          <Route path="/co2Reduction">
            <Co2Reduction></Co2Reduction>
          </Route>
          <Route path="/recyclable">
            <Recyclable></Recyclable>
          </Route>
          <Route path="/modal">
            <ModalForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
