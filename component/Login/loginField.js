import { Text, TextInput, View, StyleSheet } from "react-native";

export default function LoginField() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Masukin No Hp Lo</Text>
      <TextInput style={styles.input} placeholder="08123456789" />
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  label: {
    fontWeight: "300", // 'thin' → gunakan nilai angka (100, 200, 300, dst)
    color: "gray",
  },
  input: {
    margin: 5,
  },
  divider: {
    height: 1,
    backgroundColor: "black",
    marginVertical: 10,
  },
});
