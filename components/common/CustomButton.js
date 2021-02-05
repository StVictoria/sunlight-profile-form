import CustomButtonStyles from "../../styles/CustomButton.module.scss";

export default function CustomButton({ name, type, onClick }) {
  return (
    <button
      type={type}
      className={CustomButtonStyles.CustomButton}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
