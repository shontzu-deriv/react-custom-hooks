import "./App.css";
import Home from "./pages/home";
import useFetch from "./custom-hooks/useFetch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <b>REACT CUSTOM HOOKS</b>
        <Home />
      </header>
    </div>
  );
}

export default App;
