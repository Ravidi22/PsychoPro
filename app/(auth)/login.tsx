import TextField from "@/components/TextField";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "@/hooks/useAuth";
import Typography from "@/components/Typography";
import Tile from "@/components/layaot/Tile";
import Button from "@/components/Button";
import { HeaderShape } from "@/components/HeaderShape";
import { StyleSheet } from "react-native";
import { useTheme } from "@/context/theme";

export interface LoginDetails {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const { handleLogin } = useAuth();
  const { theme } = useTheme();
  const router = useRouter();

  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    email: "",
    password: "",
  });

  return (
    <Tile>
      <HeaderShape />
      <Typography bold size={24} style={{ marginBottom: 8 }}>
        התחברות
      </Typography>
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
      <Typography
        bold
        style={{ color: theme.secondary, textAlign: "center" }}
        onPress={() => router.replace("/(auth)/resetPassword")}
      >
        איפוס סיסמה
      </Typography>
      <Button onPress={() => handleLogin(loginDetails)}>
        <Typography bold>התחברות</Typography>
      </Button>
      <Typography style={styles.greyText}>
        אין לך חשבון?{" "}
        <Typography
          bold
          style={{ color: theme.secondary }}
          onPress={() => router.replace("/(auth)/signUp")}
        >
          הרשמה
        </Typography>
      </Typography>
    </Tile>
  );
}

export const styles = StyleSheet.create({
  greyText: {
    marginTop: 20,
    color: "gray",
    textAlign: "center",
  },
});
