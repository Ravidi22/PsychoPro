import Background from "@/components/Background";
import Button from "@/components/Button";
import EvenlySpacedElement from "@/components/layaot/EvenlySpacedElement";
import Typography from "@/components/Typography";
import { useTheme } from "@/context/theme";
import { useRouter } from "expo-router";
import { StyleSheet, View, Image } from "react-native";

export default function Welcome() {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/snailOutline.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <EvenlySpacedElement column gap={5}>
          <View style={{ rowGap: 15, width: "90%" }}>
            <Typography
              size={30}
              style={{
                color: theme.background,
                fontWeight: 900,
              }}
            >
              תרגלו עם שבלול !
            </Typography>
            <Typography size={18} style={{ color: theme.background }}>
              בפסיכומטריקל ניתן ללמוד חומרים ולתרגל בשוטף לקראת הפסיכומטרי,
              שבלול יעזור לכם לעשות את זה קל ופשוט!
            </Typography>
            <Typography size={18} style={{ color: theme.background }}>
              שלא תגידו לא תרגלתי מספיק 😉
            </Typography>
          </View>
          <Button
            style={{ width: "90%", borderRadius: 12 }}
            onPress={() => router.replace("/rank")}
          >
            <Typography size={18} bold>
              אז, שנתחיל?
            </Typography>
          </Button>
        </EvenlySpacedElement>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: "50%",
  },
});
