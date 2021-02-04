import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, View } from "react-native"
import { createStore } from "redux"
import reducer from "./reducers"
import middleware from "./middleware"
import { Provider } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"
import StackNav from "./components/StackNav"

export default function App() {
  return (
    <Provider store={createStore(reducer, middleware)}>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <StackNav />
        </NavigationContainer>
      </View>
    </Provider>
  )
}
