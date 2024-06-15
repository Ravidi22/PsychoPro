import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TextField from "../../components/TextField";
import { commonStyles } from "./Styles";
import { useAuth } from "../../hooks/useAuth";

interface LoginDetails {
  email: string;
  password: string;
}

const LoginScreen = ({ navigation }) => {
  const { handleLogin } = useAuth();

  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    email: "",
    password: "",
  });

  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.headerShape} />
      <Text style={commonStyles.title}>התחברות</Text>
      <TextField
        placeholder="אימייל"
        value={loginDetails.email}
        onChangeText={(value) =>
          setLoginDetails({ ...loginDetails, email: value })
        }
        keyboardType="email-address"
        inlineImageLeft="mail"
      />
      <TextField
        placeholder="סיסמה"
        value={loginDetails.password}
        onChangeText={(value) =>
          setLoginDetails({ ...loginDetails, password: value })
        }
        secureTextEntry
      />
      <Text
        style={{ ...commonStyles.link, textAlign: "center" }}
        onPress={() => navigation.navigate("ResetPaswword")}
      >
        איפוס סיסמה
      </Text>
      <TouchableOpacity onPress={handleLogin} style={commonStyles.button}>
        <Text style={commonStyles.buttonText}>התחברות</Text>
      </TouchableOpacity>
      <Text style={commonStyles.geryText}>
        אין לך חשבון?{" "}
        <Text
          style={commonStyles.link}
          onPress={() => navigation.navigate("SignUp")}
        >
          הרשמה
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
