import { useState } from "react";

export default function useDialogHook() {
  const [isOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
    console.log("open");
  };
  const handleDialogClose = () => setDialogOpen(false);

  return { isOpen, handleDialogOpen, handleDialogClose };
}
