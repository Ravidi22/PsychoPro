export interface Theme {
  primary: string;
  primaryVariant: string;
  secondary: string;
  secondaryVariant: string;
  background: string;
  surface: string;
  error: string;
  grey: string;
  text: string;
}

export const lightTheme: Theme = {
  primary: "#65D7CB",
  primaryVariant: "#3700B3",
  secondary: "#03DAC6",
  secondaryVariant: "#018786",
  background: "#F3F3F3",
  surface: "#F3F3F3",
  error: "#B00020",
  grey: "#BDBDBD",
  text: "#000000",
};

export const darkTheme: Theme = {
  primary: "#BB86FC",
  primaryVariant: "#3700B3",
  secondary: "#03DAC6",
  secondaryVariant: "#03DAC6",
  background: "#121212",
  surface: "#121212",
  error: "#CF6679",
  grey: "#BDBDBD",
  text: "#E2E2E2",
};
