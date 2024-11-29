import "./input.css";

export const Input = () => {
  return (
    <div className="Input">
      <div className="form-component">
        <label for="example">Example Input</label>
        <div className="input">
          <input
            className="require"
            type="text"
            placeholder="Example Input"
            id="example"
            name="example"
            value=""
          />
          {/* <img className="input-status" alt="input status" /> */}
        </div>
      </div>
    </div>
  );
};
