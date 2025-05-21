import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
// import { getAccessToken } from "../lib/auth";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  return <Redirect href="/(main)" />;
}

