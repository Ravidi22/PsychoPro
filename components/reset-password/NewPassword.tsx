import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TextField from "../TextField";
import { commonStyles } from "@/styles/commonStyles";

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
    <View>
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
      <TouchableOpacity onPress={() => {}} style={commonStyles.button}>
        <Text style={commonStyles.buttonText}>אפס</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewPassword;
