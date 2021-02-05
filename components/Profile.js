import Paper from "@material-ui/core/Paper";

import ProfileStyles from "../styles/Profile.module.scss";
import UserForm from "./UserForm.js";

export default function Profile({ handleDialogOpen }) {
  return (
    <section className={ProfileStyles.Profile}>
      <Paper className={ProfileStyles.UserInfoMuiPaper}>
        <section className={ProfileStyles.MainInfo}>
          <div className={`${ProfileStyles.ProfileUserIcon} UserIcon`} />
          <p className={ProfileStyles.UserName}>Иванова Анна Михайловна</p>
        </section>

        <button className={ProfileStyles.Close}>
          <p>Закрыть </p>
          <img
            src="/cross.png"
            className={ProfileStyles.CloseImg}
            alt="close"
          />
        </button>
      </Paper>
      <UserForm handleDialogOpen={handleDialogOpen} />
    </section>
  );
}
