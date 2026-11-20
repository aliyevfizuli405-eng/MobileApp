import { View, StyleSheet, Image } from "react-native";

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.splashLogo}
        source={require("./../../assets/images/image.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  splashLogo: {
    width: 200,
    height: 200,
  },
});
