import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import StackNav from "./components/StackNav"

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </View>
  )
}
