import "./App.css";
import { Button } from "./components/button/button";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Header</h1>
      </header>

      <div className="content">
        <div className="button-example" style={{ margin: "20px 0" }}>
          <h3>Buttons</h3>
          <Button
            btn="primary"
            id={"primary-button"}
            label="primary"
            borderRadius={"5px"}
          />
          <Button
            btn="secondary"
            label={"secondary"}
            type="button"
            borderRadius={"5px"}
          />
          <Button
            btn="success"
            label={"success"}
            type="button"
            borderRadius={"5px"}
          />
          <Button
            btn="danger"
            label={"danger"}
            type="button"
            borderRadius={"5px"}
          />
          <Button
            btn="warning"
            label={"warning"}
            type="button"
            borderRadius={"5px"}
          />
          <Button
            btn="info"
            label={"info"}
            type="button"
            borderRadius={"5px"}
          />
          <Button
            btn="light"
            label={"light"}
            type="button"
            borderRadius={"5px"}
          />
          <Button
            btn="dark"
            label={"dark"}
            type="button"
            borderRadius={"5px"}
          />
        </div>
        <div className="button-example" style={{ margin: "20px 0" }}>
          <Button btn="primary-outline" label="Primary" borderRadius={"5px"} />

          <Button
            btn="secondary-outline"
            label="Secondary"
            borderRadius={"5px"}
          />

          <Button btn="success-outline" label="Success" borderRadius={"5px"} />

          <Button btn="danger-outline" label="Danger" borderRadius={"5px"} />

          <Button btn="warning-outline" label="Warning" borderRadius={"5px"} />

          <Button btn="info-outline" label="Info" borderRadius={"5px"} />

          <Button btn="light-outline" label="light" borderRadius={"5px"} />

          <Button btn="dark-outline" label="dark" borderRadius={"5px"} />
        </div>
      </div>

      <footer>
        <h6>Footer</h6>
      </footer>
    </div>
  );
}

export default App;
