import { Text, TextInput, View } from "react-native";


export default function signup_field() {
  return (
    <View style={{ margin: 30 }}>
      <Text style={{ fontWeight: "thin", color: "gray" }}>
        Nama Lengkap lo dong!
      </Text>
      <TextInput style={{ margin: 5 }} placeholder="Geem Berkarir" />
      <View
        style={{ height: 1, backgroundColor: "black", marginVertical: 10 }}
      />
      <Text style={{ fontWeight: "thin", color: "gray" }}>Masukin No Hp Lo</Text>
      <TextInput style={{ margin: 5 }} placeholder="08123456789" />
      <View
        style={{ height: 1, backgroundColor: "black", marginVertical: 10 }}
      />
    </View>
  );
}
