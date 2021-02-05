import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";

import ProfileStyles from "../styles/Profile.module.scss";
import UserForm from "./UserForm.js";

export default function Profile({ isFormOpen, onFormClose, handleDialogOpen }) {
  return (
    <section className={ProfileStyles.Profile}>
      <Paper className={ProfileStyles.UserInfoMuiPaper}>
        <section className={ProfileStyles.MainInfo}>
          <div className={`${ProfileStyles.ProfileUserIcon} UserIcon`} />
          <p className={ProfileStyles.UserName}>Иванова Анна Михайловна</p>
        </section>

        <Button
          className={ProfileStyles.CloseButton}
          onClick={onFormClose}
          color="primary"
          endIcon={<CloseIcon className={ProfileStyles.CloseIcon} />}
        >
          {isFormOpen ? "Закрыть" : "Открыть"}
        </Button>
      </Paper>
      <UserForm handleDialogOpen={handleDialogOpen} isFormOpen={isFormOpen} />
    </section>
  );
}
