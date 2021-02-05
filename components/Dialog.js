import MuiDialog from "@material-ui/core/Dialog";

import DialogStyles from "../styles/Dialog.module.scss";

export default function Dialog({ isOpen, onClose }) {
  return (
    <MuiDialog open={isOpen} className={DialogStyles["MuiDialog-paper"]}>
      Dialog
      <button onClick={onClose}>Close</button>
    </MuiDialog>
  );
}
