import HeaderStyles from "../styles/Header.module.scss";

export default function Header() {
  return (
    <section className={HeaderStyles.Header}>
      <img
        src="/notification.png"
        className={HeaderStyles.Notifications}
        alt="notifications"
      />
      <div className={HeaderStyles.Divider} />
      <section className={HeaderStyles.HeaderUserInfo}>
        <div className={`${HeaderStyles.UserIcon} UserIcon`} />
        <p>Иванова А.</p>
      </section>
    </section>
  );
}
