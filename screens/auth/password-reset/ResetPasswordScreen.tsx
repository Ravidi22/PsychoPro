import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TextField from "../../../components/TextField";
import { commonStyles } from "../Styles";
import SubmitCode from "./sections/SubmitCode";
import NewPassword from "./sections/NewPassword";

const ResetPasswordScreen = ({ navigation }) => {
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
        <SubmitCode
          navigation={navigation}
          email={email}
          setIsValidCode={setIsValidCode}
        />
      )}

      {isValidCode && <NewPassword navigation={navigation} />}
    </View>
  );
};

export default ResetPasswordScreen;
