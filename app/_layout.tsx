import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack } from "expo-router";
import { Header } from "react-native/Libraries/NewAppScreen";

const RootLayout = () => {
  return (
      <Stack>
        <Stack.Screen name="index"  />
      </Stack>
  );
};

export default RootLayout;
