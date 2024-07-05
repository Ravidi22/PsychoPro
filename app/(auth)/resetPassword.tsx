import Button from "@/components/Button";
import { HeaderShape } from "@/components/HeaderShape";
import TextField from "@/components/TextField";
import Typography from "@/components/Typography";
import Tile from "@/components/layaot/Tile";
import NewPassword from "@/components/reset-password/NewPassword";
import SubmitCode from "@/components/reset-password/SubmitCode";
import { useState } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function ResetPasswordScreen() {
  const [email, setEmail] = useState<string>("");

  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);

  const [isValidCode, setIsValidCode] = useState<boolean>(false);

  return (
    <Tile>
      <HeaderShape />
      <Typography bold style={{ marginBottom: 8 }}>
        איפוס סיסמה
      </Typography>
      {!isCodeSent && (
        <>
          <Typography style={styles.greyText}>
            נדרש אימות. אנה הזינו את כתובת המייל שלכם.
          </Typography>
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
