import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { BlurView } from "expo-blur";
import { useAuthStore } from "@/store/useAuthStore";

export default function RankModal() {
  const { user, setRank } = useAuthStore();

  return (
    <Modal transparent={true} animationType="slide" visible={user?.rank === 0}>
      <BlurView intensity={100} style={styles.blurView}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>קבע את הדרגה ההתחלתית שלך</Text>
          <View style={styles.rankContainer}>
            {["Beginner", "Mid", "Expert"].map((rank, index) => (
              <TouchableOpacity
                style={styles.button}
                key={index}
                onPress={() => {
                  setRank(30);
                }}
              >
                <Image
                  source={require("../assets/images/icon.png")}
                  style={styles.image}
                  resizeMode="contain"
                />
                <Text style={styles.buttonText}>{rank}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  blurView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
  },
  modalContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderCurve: "continuous",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  rankContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    paddingVertical: 20,
    width: "30%",
    backgroundColor: "#FFA726",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
