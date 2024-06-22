import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import TextField from "@/components/TextField";
import { useState } from "react";
import { commonStyles } from "@/styles/commonStyles";
import { useRouter } from "expo-router";
import { useAuthStore } from "@/store/useAuthStore";

interface LoginDetails {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const { signIn } = useAuthStore();
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
