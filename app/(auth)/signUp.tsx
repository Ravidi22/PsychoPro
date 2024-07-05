import TextField from "@/components/TextField";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "@/hooks/useAuth";
import Tile from "@/components/layaot/Tile";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import { StyleSheet } from "react-native";
import { HeaderShape } from "@/components/HeaderShape";
import { useTheme } from "@/context/theme";

export interface SignUpDetails {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpScreen() {
  const { handleSignUp } = useAuth();
  const { theme } = useTheme();
  const router = useRouter();

  const [signUpDetails, setSignUpDetails] = useState<SignUpDetails>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <Tile>
      <HeaderShape />
      <Typography bold size={24} style={{ marginBottom: 8 }}>
        יצירת חשבון
      </Typography>
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
      <Button onPress={() => handleSignUp(signUpDetails)}>
        <Typography bold>הרשמה</Typography>
      </Button>
      <Typography style={styles.greyText}>
        כבר יש משתמש?{" "}
        <Typography
          bold
          style={{ color: theme.secondary }}
          onPress={() => router.replace("/(auth)/login")}
        >
          התחברות
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
