import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TextField from "../TextField";
import { commonStyles } from "@/styles/commonStyles";
import TileItem from "../layaot/TileItem";
import Button from "../Button";
import Typography from "../Typography";

interface NewPasswordDetails {
  password: string;
  confirmPassword: string;
}

const NewPassword = () => {
  const [passwordDetails, setPasswordDetails] = useState<NewPasswordDetails>({
    password: "",
    confirmPassword: "",
  });

  return (
    <TileItem column>
      <TextField
        placeholder="סיסמה"
        value={passwordDetails.password}
        onChangeText={(value) =>
          setPasswordDetails({ ...passwordDetails, password: value })
        }
        secureTextEntry
      />
      <TextField
        placeholder="ודא סיסמה"
        value={passwordDetails.confirmPassword}
        onChangeText={(value) =>
          setPasswordDetails({ ...passwordDetails, confirmPassword: value })
        }
        secureTextEntry
      />
      <Button onPress={() => {}} style={commonStyles.button}>
        <Typography bold>אפס</Typography>
      </Button>
    </TileItem>
  );
};

export default NewPassword;
