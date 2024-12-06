import "./App.css";
import { Button } from "./components/button/button";
import { Column } from "./components/column/column";
import { Container } from "./components/container/container";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Input } from "./components/input/input";

function App() {
  return (
    <div className="App">
      <Header>
        <div className="container">
          <div className="column-6">left</div>
          <div className="column-6">right</div>
        </div>
      </Header>
      <div className="content">
        <div className="button-example" style={{ margin: "20px 0" }}>
          <h3>Buttons</h3>
          <Button
            color="primary"
            id={"primary-button"}
            label="primary"
            custom={{ borderRadius: "5px" }}
          />
          <Button
            color="secondary"
            label={"secondary"}
            type="button"
            custom={{ borderRadius: "5px" }}
          />
          <Button
            color="success"
            label={"success"}
            type="button"
            custom={{ borderRadius: "5px" }}
          />
          <Button
            color="danger"
            label={"danger"}
            type="button"
            custom={{ borderRadius: "5px" }}
          />
          <Button
            color="warning"
            label={"warning"}
            type="button"
            custom={{ borderRadius: "5px" }}
          />
          <Button
            color="info"
            label={"info"}
            type="button"
            custom={{ borderRadius: "5px" }}
          />
          <Button
            color="light"
            label={"light"}
            type="button"
            custom={{ borderRadius: "5px" }}
          />
          <Button
            color="dark"
            label={"dark"}
            type="button"
            custom={{ borderRadius: "5px" }}
          />
        </div>
        <div className="button-example" style={{ margin: "20px 0" }}>
          <Button
            color="primary-outline"
            label="Primary"
            custom={{ borderRadius: "5px" }}
          />

          <Button
            color="secondary-outline"
            label="Secondary"
            custom={{ borderRadius: "5px" }}
          />

          <Button
            color="success-outline"
            label="Success"
            custom={{ borderRadius: "5px" }}
          />

          <Button
            color="danger-outline"
            label="Danger"
            custom={{ borderRadius: "5px" }}
          />

          <Button
            color="warning-outline"
            label="Warning"
            custom={{ borderRadius: "5px" }}
          />

          <Button
            color="info-outline"
            label="Info"
            custom={{ borderRadius: "5px" }}
          />

          <Button
            color="light-outline"
            label="light"
            custom={{ borderRadius: "5px" }}
          />

          <Button
            color="dark-outline"
            label="dark"
            custom={{ borderRadius: "5px" }}
          />
        </div>
      </div>
      <Container>
        <Column col="6">
          <Input
            type="text"
            placeholder="Example Input"
            custom={{ borderRadius: "5px" }}
            label={"First Name:"}
          />
        </Column>
        <Column col="6">
          <Input
            type="text"
            placeholder="Example Input"
            custom={{ borderRadius: "5px" }}
            label={"Last Name:"}
          />
        </Column>
      </Container>

      <Container>
        <Column col="6">
          <Input
            type="text"
            placeholder="Example Input"
            custom={{ borderRadius: "5px" }}
            label={"Phone"}
          />
        </Column>
        <Column col="6">
          <Input
            type="text"
            placeholder="Example Input"
            custom={{ borderRadius: "5px" }}
            label={"Email:"}
          />
        </Column>
      </Container>

      <Footer></Footer>
    </div>
  );
}

export default App;
