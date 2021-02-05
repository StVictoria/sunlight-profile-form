import Paper from "@material-ui/core/Paper";

import ProfileStyles from "../styles/Profile.module.scss";
import UserForm from "./UserForm.js";

const styles = {
  MuiPaper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 128,
    background: "linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)",
    padding: 40,
    marginTop: 31,
    marginBottom: 24,
    boxSizing: "border-box",
    borderRadius: 10,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
  },
};

export default function Profile() {
  return (
    <section className={ProfileStyles.Profile}>
      <Paper style={styles.MuiPaper}>
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
      <UserForm />
    </section>
  );
}
