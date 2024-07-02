import { LoginDetails } from "@/app/(auth)/login";
import { SignUpDetails } from "@/app/(auth)/signUp";
import { useAuthStore } from "@/store/useAuthStore";
import useSnackbarStore from "@/store/useSnackbarStore";
import { emailRegex } from "@/utils/Regex";
import { HttpStatusCode } from "axios";

export const useAuth = () => {
  const { showSnackbar } = useSnackbarStore();
  const { logIn, signUp } = useAuthStore();
  const handleLogin = async (details: LoginDetails) => {
    const res = await logIn(details.email, details.password);
    if (res !== HttpStatusCode.Ok)
      showSnackbar("שם משתמש או סיסמה שגויים", "error");
  };

  const handleSignUp = async (details: SignUpDetails) => {
    if (!emailRegex.test(details.email)) {
      showSnackbar("אימייל אינו תקין. נסו שנית. ", "error");
      return;
    }
    if (details.password !== details.confirmPassword) {
      showSnackbar("וידוי סיסמה לא תואם", "error");
      return;
    }
    const res = await signUp(details.fullName, details.email, details.password);
    if (res !== HttpStatusCode.Ok)
      showSnackbar("שם משתמש או סיסמה שגויים", "error");
  };

  return { handleLogin, handleSignUp };
};
