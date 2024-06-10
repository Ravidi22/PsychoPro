import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TextField from "../../components/TextField";

interface SignUpDetails {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpScreen = ({ navigation }) => {
  const [signUpDetails, setSignUpDetails] = useState<SignUpDetails>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUp = () => {
    // Handle sign-up logic here
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerShape} />
      <Text style={styles.title}>יצירת חשבון</Text>
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
        style={styles.input}
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
      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
        <Text style={styles.buttonText}>הרשמה</Text>
      </TouchableOpacity>
      <Text style={styles.signInText}>
        כבר יש משתמש?{" "}
        <Text
          style={styles.signInLink}
          onPress={() => navigation.navigate("Login")}
        >
          התחברות
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
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
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
  signInText: {
    marginTop: 20,
    color: "gray",
    textAlign: "center",
  },
  signInLink: {
    color: "#FFA726",
    fontWeight: "bold",
  },
});

export default SignUpScreen;
