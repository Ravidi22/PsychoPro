import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";
import Typography from "../Typography";
import Button from "../Button";
import TileItem from "../layaot/TileItem";

interface SubmitCodeProps {
  email: string;
  setIsValidCode: (code: boolean) => void;
}

const SubmitCode = (props: SubmitCodeProps) => {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);

  const inputRefs = useRef<TextInput[]>(Array(6).fill(null));

  const handleChange = (value: string, index: number) => {
    if (!/^\d$/.test(value)) {
      return;
    }
    const newCode = [...code];
    newCode[index] = value;

    if (value && index < code.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    setCode(newCode);
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace") {
      const newOtp = [...code];
      if (code[index]) {
        newOtp[index] = "";
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        newOtp[index - 1] = "";
      }
      setCode(newOtp);
    }
  };

  return (
    <TileItem column>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <View style={styles.container}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el: TextInput) => (inputRefs.current[index] = el)}
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              value={digit}
              onChangeText={(value) => handleChange(value, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>
      </View>
      <Button onPress={() => props.setIsValidCode(true)}>
        <Typography bold>שלח</Typography>
      </Button>

      <Typography style={styles.greyText}>
        לא קיבלתי{" "}
        <Typography bold style={{ color: "#FFA726" }} onPress={() => {}}>
          שליחה חוזרת
        </Typography>
      </Typography>
    </TileItem>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    width: "80%",
  },
  input: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    textAlign: "center",
    fontSize: 18,
  },
  greyText: {
    marginTop: 20,
    color: "gray",
    textAlign: "center",
  },
});

export default SubmitCode;
