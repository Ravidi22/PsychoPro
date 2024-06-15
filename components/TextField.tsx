import { ReactNode } from "react";
import { TextInputProps, TextInput, View, StyleSheet } from "react-native";

interface TextFieldProps extends TextInputProps {
  sideIcon?: ReactNode;
  sideIconButton?: ReactNode;
}

const TextField = (props: TextFieldProps) => {
  return (
    <View style={styles.inputContainer}>
      {props.sideIcon}
      <TextInput {...props} style={styles.Input} />
      {props.sideIconButton}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 25,
  },
  Input: {
    flex: 1,
    padding: 15,
    borderRadius: 25,
    textAlign: "right",
    borderWidth: 0,
  },
});

export default TextField;
