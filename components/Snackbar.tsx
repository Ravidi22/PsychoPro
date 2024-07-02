import useSnackbarStore from "@/store/useSnackbarStore";
import React from "react";
import { Snackbar as ReactSnackbar } from "react-native-paper";
import Typography from "./Typography";

const Snackbar = () => {
  const { visible, message, variant, hideSnackbar } = useSnackbarStore();

  return (
    <ReactSnackbar
      visible={visible}
      onDismiss={hideSnackbar}
      duration={ReactSnackbar.DURATION_SHORT}
      style={{
        backgroundColor:
          variant === "info"
            ? "#2196F3"
            : variant === "success"
            ? "#4CAF50"
            : variant === "error"
            ? "#F44336"
            : "#323232",
      }}
    >
      <Typography light>{message}</Typography>
    </ReactSnackbar>
  );
};

export default Snackbar;
