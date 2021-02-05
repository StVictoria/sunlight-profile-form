import Dialog from "@material-ui/core/Dialog";

import CustomDialogStyles from "../styles/CustomDialog.module.scss";
import CustomButton from "./common/CustomButton";

export default function CustomDialog({ isOpen, onClose }) {
  return (
    <Dialog
      open={isOpen}
      className={CustomDialogStyles.Dialog}
      onClose={onClose}
    >
      <h4>Данные успешно сохранены</h4>
      <CustomButton name="Закрыть" onClick={onClose} />
    </Dialog>
  );
}
