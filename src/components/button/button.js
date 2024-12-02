import "./button.css";

export const Button = ({
  id,
  type = "button",
  label = "",
  color = "primary",
  borderRadius,
}) => {
  return (
    <div className="Button">
      <button
        className={`button ${color}`}
        type={type}
        id={id}
        style={{ borderRadius }}
      >
        {label}
      </button>
    </div>
  );
};
