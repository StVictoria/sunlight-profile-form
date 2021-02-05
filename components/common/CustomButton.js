import CustomButtonStyles from "../../styles/CustomButton.module.scss";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function CustomButton({ isLoading, name, type, onClick }) {
  return (
    <button
      type={type}
      className={CustomButtonStyles.CustomButton}
      onClick={onClick}
    >
      {isLoading ? <CircularProgress disableShrink /> : name}
    </button>
  );
}
