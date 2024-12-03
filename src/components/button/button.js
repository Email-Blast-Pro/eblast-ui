import "./button.css";

export const Button = ({
  id,
  type = "button",
  label = "",
  color = "primary",
  custom = {},
}) => {
  return (
    <div className="Button">
      <button className={`button ${color}`} type={type} id={id} style={custom}>
        {label}
      </button>
    </div>
  );
};
