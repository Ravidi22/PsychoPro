const useAuth = () => {
  const handleLogin = (navigation) => {
    navigation.navigate("Home");
  };

  const handleSignUp = (navigation) => {
    navigation.navigate("Home");
  };

  return { handleLogin, handleSignUp };
};
