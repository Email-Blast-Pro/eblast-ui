import "./input.css";
import infoIcon from "../../assets/svg/icons/info.svg";
// import successIcon from "../../assets/svg/icons/success.svg";
// import errorIcon from "../../assets/svg/icons/error.svg";

export const Input = ({
  type,
  placeholder,
  id,
  name,
  label,
  value,
  custom,
}) => {
  const handleInputChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="Input">
      <div className="form-component">
        {label && <label htmlFor="example">{label}</label>}
        <div className="input info" style={custom}>
          <input
            type={type}
            placeholder={placeholder}
            id={id}
            name={name}
            value={value}
            onChange={handleInputChange}
          />
          <img className="input-status" src={infoIcon} alt="input status" />
        </div>
      </div>
    </div>
  );
};
