import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TextField from "../../components/TextField";

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
    <View style={styles.container}>
      <View style={styles.headerShape} />
      <Text style={styles.title}>התחברות</Text>
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
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>התחברות</Text>
      </TouchableOpacity>
      <Text style={styles.signUpText}>
        אין לך חשבון?{" "}
        <Text
          style={styles.signUpLink}
          onPress={() => navigation.navigate("SignUp")}
        >
          הרשמה
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  headerShape: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 100,
    height: 100,
    backgroundColor: "#FFA726",
    borderBottomLeftRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FFA726",
    maxWidth: "40%",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  signUpText: {
    marginTop: 20,
    color: "gray",
    textAlign: "center",
  },
  signUpLink: {
    color: "#FFA726",
    fontWeight: "bold",
  },
});

export default LoginScreen;
