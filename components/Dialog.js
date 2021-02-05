import MuiDialog from "@material-ui/core/Dialog";

const styles = {
  "MuiDialog-paper": {
    padding: 60,
  },
};

export default function Dialog({ isOpen, onClose }) {
  return (
    <MuiDialog open={isOpen} style={styles["MuiDialog-Paper"]}>
      Dialog
      <button onClick={onClose}>Close</button>
    </MuiDialog>
  );
}
