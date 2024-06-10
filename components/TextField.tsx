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
      <TextInput {...props} style={styles.passwordInput} />
      {props.sideIconButton}
    </View>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    width: "100%",
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
    textAlign: "right",
  },
  input: {
    width: "100%",
    marginVertical: 10,
    padding: 15,
    borderWidth: 0,
    borderColor: "gray",
    borderRadius: 25,
    textAlign: "right",
  },
  inputContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 25,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    borderRadius: 25,
    textAlign: "right",
    borderWidth: 0,
  },
  icon: {
    padding: 10,
  },
});

export default TextField;
