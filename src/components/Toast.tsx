import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import { useAnchorLinkCopy } from "../hooks/useAnchorLinkCopy";

export default function Toast() {
  const [open, setOpen] = useState(false);

  useAnchorLinkCopy(() => {
    setOpen(true);
  });

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
    >
      <Alert onClose={handleClose} severity="success" variant="filled" sx={{ backgroundColor: "var(--cheatsheet-nodit-color)", color: "black", fontFamily: "NanumSquareAceb, sans-serif" }}>
        해시 링크가 복사되었어요 !
      </Alert>
    </Snackbar>
  );
}