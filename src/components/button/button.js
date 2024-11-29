import "./button.css";

export const Button = () => {
  return (
    <div className="Button">
      <div class="button-example">
        <h1>Button Component</h1>
        <button type="button" class="primary">
          Primary
        </button>
        <button type="button" class="secondary">
          Secondary
        </button>
        <button type="button" class="success">
          Success
        </button>
        <button type="button" class="danger">
          Danger
        </button>
        <button type="button" class="warning">
          Warning
        </button>
        <button type="button" class="info">
          Info
        </button>
        <button type="button" class="light">
          Light
        </button>
        <button type="button" class="dark">
          Dark
        </button>
        <p>
          <a href="/">Return Home</a>
        </p>
      </div>
    </div>
  );
};
