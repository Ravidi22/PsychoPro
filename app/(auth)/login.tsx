import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import TextField from "@/components/TextField";
import { useState } from "react";
import { commonStyles } from "@/styles/commonStyles";
import { useAuth } from "@/context/auth";
import { useRouter } from "expo-router";

interface LoginDetails {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const { signIn } = useAuth();
  const router = useRouter();

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
        onPress={() => router.replace("/(auth)/resetPassword")}
      >
        איפוס סיסמה
      </Text>
      <TouchableOpacity onPress={signIn} style={commonStyles.button}>
        <Text style={commonStyles.buttonText}>התחברות</Text>
      </TouchableOpacity>
      <Text style={commonStyles.geryText}>
        אין לך חשבון?{" "}
        <Text
          style={commonStyles.link}
          onPress={() => router.replace("/(auth)/signUp")}
        >
          הרשמה
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
