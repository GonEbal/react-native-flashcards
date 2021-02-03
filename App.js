import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import DeckList from "./components/DeckList"
import AddCard from "./components/AddCard"
import AddDeck from "./components/AddDeck"


export default function App() {
  return (
    <View style={styles.container}>
      <DeckList />
      <AddCard />
      <AddDeck />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
