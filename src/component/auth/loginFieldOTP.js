import { Text, TextInput, View } from "react-native";

export default function LoginFieldOTP() {
    return (
        <View style={{ margin: 30 }}>
            <Text style={{ fontWeight: "thin", color: "gray", marginTop: 20 }}>
                Masukkan kode OTP dungs
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                }}
            >
                {[1, 2, 3, 4].map((_, index) => (
                    <TextInput
                        key={index}
                        maxLength={1}
                        keyboardType="number-pad"
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: "gray",
                            paddingVertical: 8,
                            textAlign: "center",
                            width: 50,
                            fontSize: 18,
                        }}
                    />
                ))}
            </View>
        </View>
    );
}