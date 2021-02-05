import { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import ProfileStyles from "../styles/Profile.module.scss";
import UserForm from "./UserForm.js";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function Profile({ isFormOpen, onFormClose, handleDialogOpen }) {
  const size = useWindowSize();
  console.log(size);
  return (
    <section className={ProfileStyles.Profile}>
      <Paper className={ProfileStyles.UserInfoMuiPaper}>
        <section className={ProfileStyles.MainInfo}>
          <div className={`${ProfileStyles.ProfileUserIcon} UserIcon`} />
          <p className={ProfileStyles.UserName}>
            {size.width < 969 ? "Иванова А. М." : "Иванова Анна Михайловна"}
          </p>
        </section>

        {size.width < 959 ? (
          <IconButton>
            <CloseIcon color="primary" />
          </IconButton>
        ) : (
          <Button
            className={ProfileStyles.CloseButton}
            onClick={onFormClose}
            color="primary"
            endIcon={
              isFormOpen ? (
                <CloseIcon className={ProfileStyles.CloseIcon} />
              ) : (
                <KeyboardArrowDownIcon className={ProfileStyles.CloseIcon} />
              )
            }
          >
            {isFormOpen ? "Закрыть" : "Открыть"}
          </Button>
        )}
      </Paper>
      <UserForm handleDialogOpen={handleDialogOpen} isFormOpen={isFormOpen} />
    </section>
  );
}
