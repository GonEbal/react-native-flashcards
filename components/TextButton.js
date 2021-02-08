import React from "react"
import { Text, View, TouchableOpacity, StyleSheet } from "react-native"
import { red } from "../utils/colors"

export default function TextButton({ children, onPress, txtStyle = {} }) {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.btnText, txtStyle]}>{children}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    color: red,
  },
})
