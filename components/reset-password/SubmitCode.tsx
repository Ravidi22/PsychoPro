import { submitCodeStyles } from "@/styles/authStyles";
import { commonStyles } from "@/styles/commonStyles";
import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";

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
    <View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <View style={submitCodeStyles.container}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el: TextInput) => (inputRefs.current[index] = el)}
              style={submitCodeStyles.input}
              maxLength={1}
              keyboardType="numeric"
              value={digit}
              onChangeText={(value) => handleChange(value, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>
      </View>
      <TouchableOpacity
        onPress={() => props.setIsValidCode(true)}
        style={commonStyles.button}
      >
        <Text style={commonStyles.buttonText}>שלח</Text>
      </TouchableOpacity>

      <Text style={commonStyles.geryText}>
        לא קיבלתי{" "}
        <Text style={commonStyles.link} onPress={() => {}}>
          שליחה חוזרת
        </Text>
      </Text>
    </View>
  );
};

export default SubmitCode;
