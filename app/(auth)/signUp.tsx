import { TouchableOpacity } from "react-native";
import { Text, View } from "@/components/theme/Themed";
import TextField from "@/components/TextField";
import { useState } from "react";
import { commonStyles } from "@/styles/commonStyles";
import { useRouter } from "expo-router";
import { useAuth } from "@/hooks/useAuth";

export interface SignUpDetails {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpScreen() {
  const { handleSignUp } = useAuth();
  const router = useRouter();

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
      <TouchableOpacity
        onPress={() => handleSignUp(signUpDetails)}
        style={commonStyles.button}
      >
        <Text style={commonStyles.buttonText}>הרשמה</Text>
      </TouchableOpacity>
      <Text style={commonStyles.greyText}>
        כבר יש משתמש?{" "}
        <Text
          style={commonStyles.link}
          onPress={() => router.replace("/(auth)/login")}
        >
          התחברות
        </Text>
      </Text>
    </View>
  );
}
