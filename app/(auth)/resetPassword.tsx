import Button from "@/components/Button";
import TextField from "@/components/TextField";
import Typography from "@/components/Typography";
import NewPassword from "@/components/reset-password/NewPassword";
import SubmitCode from "@/components/reset-password/SubmitCode";
import { commonStyles } from "@/styles/commonStyles";
import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function ResetPasswordScreen() {
  const [email, setEmail] = useState<string>("");

  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);

  const [isValidCode, setIsValidCode] = useState<boolean>(false);

  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.headerShape} />
      <Typography bold style={{ marginBottom: 8 }}>
        איפוס סיסמה
      </Typography>
      {!isCodeSent && (
        <>
          <Text style={commonStyles.greyText}>
            נדרש אימות. אנה הזינו את כתובת המייל שלכם.
          </Text>
          <TextField
            placeholder="אימייל"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            inlineImageLeft="mail"
          />
          <Button onPress={() => setIsCodeSent(true)}>
            <Typography bold>שלח</Typography>
          </Button>
        </>
      )}

      {isCodeSent && !isValidCode && (
        <SubmitCode email={email} setIsValidCode={setIsValidCode} />
      )}

      {isValidCode && <NewPassword />}
    </View>
  );
}
