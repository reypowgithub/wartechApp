import { Button, Text, TouchableOpacity, View } from "react-native";

export default function signup_button() {
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: "#FA4A0C",
          padding: 10,
          margin: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 30,
          height: 70,
        }}
      >
        <Text style={{ color: "white", fontSize: 17 }}>Submit</Text>
      </View>
    </TouchableOpacity>
  );
}
