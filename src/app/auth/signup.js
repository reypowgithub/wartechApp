import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text>SignUp dulu woy</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
