import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { getAccessToken } from "../lib/auth";
import { ActivityIndicator, View } from "react-native";
import "../../global.css";

export default function Index() {

    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getToken = async () => {
            const token = await getAccessToken();
            setToken(token);
            setLoading(false);
        }

        getToken();

        console.log("Hit Index");
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }

    return <Redirect href={token ? "/(main)" : "/auth/login"} />
}

