import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { FilmsList } from "./store/features/FilmsList";

function App() {
  return (
    <Router>
      <div className="App">
        <FilmsList/>
      </div>
    </Router>
  );
}

export default App;
