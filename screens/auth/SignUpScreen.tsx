import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TextField from "../../components/TextField";
import { commonStyles } from "./Styles";
import { useAuth } from "../../hooks/useAuth";

interface SignUpDetails {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpScreen = ({ navigation }) => {
  const { handleSignUp } = useAuth(); // change to zustand func

  const [signUpDetails, setSignUpDetails] = useState<SignUpDetails>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.headerShape} />
      <Text style={commonStyles.title}>יצירת חשבון</Text>
      <TextField
        placeholder="שם מלא"
        value={signUpDetails.fullName}
        onChangeText={(value) =>
          setSignUpDetails({ ...signUpDetails, fullName: value })
        }
      />
      <TextField
        placeholder="אימייל"
        value={signUpDetails.email}
        onChangeText={(value) =>
          setSignUpDetails({ ...signUpDetails, email: value })
        }
        keyboardType="email-address"
      />
      <TextField
        style={commonStyles.input}
        placeholder="סיסמה"
        value={signUpDetails.password}
        onChangeText={(value) =>
          setSignUpDetails({ ...signUpDetails, password: value })
        }
        secureTextEntry
      />
      <TextField
        placeholder="ודא סיסמה"
        value={signUpDetails.confirmPassword}
        onChangeText={(value) =>
          setSignUpDetails({ ...signUpDetails, confirmPassword: value })
        }
        secureTextEntry
      />
      <TouchableOpacity onPress={handleSignUp} style={commonStyles.button}>
        <Text style={commonStyles.buttonText}>הרשמה</Text>
      </TouchableOpacity>
      <Text style={commonStyles.geryText}>
        כבר יש משתמש?{" "}
        <Text
          style={commonStyles.link}
          onPress={() => navigation.navigate("Login")}
        >
          התחברות
        </Text>
      </Text>
    </View>
  );
};

export default SignUpScreen;
