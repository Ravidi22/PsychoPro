import TextField from "@/components/TextField";
import { useState } from "react";
import { commonStyles } from "@/styles/commonStyles";
import { useRouter } from "expo-router";
import { useAuth } from "@/hooks/useAuth";
import Typography from "@/components/Typography";
import Tile from "@/components/layaot/Tile";
import Button from "@/components/Button";
import { View } from "react-native";

export interface LoginDetails {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const { handleLogin } = useAuth();
  const router = useRouter();

  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    email: "",
    password: "",
  });

  return (
    <Tile>
      <View style={commonStyles.headerShape} />
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
        style={{ color: "#FFA726", textAlign: "center" }}
        onPress={() => router.replace("/(auth)/resetPassword")}
      >
        איפוס סיסמה
      </Typography>
      <Button onPress={() => handleLogin(loginDetails)}>
        <Typography bold>התחברות</Typography>
      </Button>
      <Typography style={commonStyles.greyText}>
        אין לך חשבון?{" "}
        <Typography
          bold
          style={{ color: "#FFA726" }}
          onPress={() => router.replace("/(auth)/signUp")}
        >
          הרשמה
        </Typography>
      </Typography>
    </Tile>
  );
}
