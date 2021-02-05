import { useState } from "react";
import Head from "next/head";

import AppStyles from "../styles/App.module.scss";
import useDialogHook from "../components/useDialogHook";
import Profile from "../components/Profile";
import Header from "../components/Header";
import Dialog from "../components/Dialog";

export default function App() {
  const [isFormOpen, setFormClose] = useState(true);
  const { isOpen, handleDialogOpen, handleDialogClose } = useDialogHook();

  const handleFormClose = () => setFormClose(!isFormOpen);

  return (
    <section className="App">
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
          <Profile
            handleDialogOpen={handleDialogOpen}
            isFormOpen={isFormOpen}
            onFormClose={handleFormClose}
          />
          <Dialog isOpen={isOpen} onClose={handleDialogClose} />
        </section>
      </main>
    </section>
  );
}
