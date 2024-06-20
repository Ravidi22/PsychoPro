import TextField from "@/components/TextField";
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
      <Text style={commonStyles.title}>איפוס סיסמה</Text>
      {!isCodeSent && (
        <>
          <Text style={commonStyles.geryText}>
            נדרש אימות. אנה הזינו את כתובת המייל שלכם.
          </Text>
          <TextField
            placeholder="אימייל"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            inlineImageLeft="mail"
          />
          <TouchableOpacity
            onPress={() => setIsCodeSent(true)}
            style={commonStyles.button}
          >
            <Text style={commonStyles.buttonText}>שלח</Text>
          </TouchableOpacity>
        </>
      )}

      {isCodeSent && !isValidCode && (
        <SubmitCode email={email} setIsValidCode={setIsValidCode} />
      )}

      {isValidCode && <NewPassword />}
    </View>
  );
}
