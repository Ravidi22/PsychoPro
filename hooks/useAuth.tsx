export const useAuth = () => {
  const handleLogin = (navigation) => {
    navigation.navigate("Home");
  };

  const handleSignUp = (navigation) => {
    navigation.navigate("Home");
  };

  const sendCode = (email: string): string => {
    return "111111";
  };

  return { handleLogin, handleSignUp, sendCode };
};
