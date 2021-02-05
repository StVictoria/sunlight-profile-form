import Head from "next/head";

import Profile from "../components/Profile.js";
import Header from "../components/Header.js";

import AppStyles from "../styles/App.module.scss";

export default function App() {
  return (
    <>
      <Head>
        <title>Test Fulogy</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        ></link>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <h1 className="Hidden">Форма</h1>
        <section className={AppStyles.MainContent}>
          <Header />
          <h2 className={AppStyles.ProfileHeader}>Личный профиль</h2>
          <h3 className={AppStyles.ProfileRoutesHeader}>
            Главная/Личный профиль
          </h3>
          <Profile />
        </section>
      </main>
    </>
  );
}
