import { StartPage } from "./components/displayPage/StartPage";
import "./App.css";
import { useEffect } from "react";

function App() {
  // This effect runs once, after the first render
  useEffect(() => {
    document.title = "Rojo";
  }, []);

  return (
    <div className="App">
      <StartPage />
    </div>
  );
}

export default App;
