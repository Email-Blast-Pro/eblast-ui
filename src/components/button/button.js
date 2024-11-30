import "./button.css";

export const Button = ({
  id,
  type = "button",
  label = "",
  btn = "primary",
  borderRadius,
}) => {
  return (
    <div className="Button">
      <button
        className={`button ${btn}`}
        type={type}
        id={id}
        style={{ borderRadius }}
      >
        {label}
      </button>
    </div>
  );
};
