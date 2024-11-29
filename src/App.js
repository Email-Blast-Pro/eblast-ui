import "./App.css";
import { Button } from "./components/button/button";
import { Input } from "./components/input/input";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Header</h1>
      </header>

      <div className="content">
        <Button />
        <div style={{ width: "75%", margin: "0 auto" }}>
          <Input />
        </div>
      </div>

      <footer>
        <h6>Footer</h6>
      </footer>
    </div>
  );
}

export default App;
