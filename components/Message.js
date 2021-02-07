import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { black } from "../utils/colors"

export default function Message(props) {
    const { message } = props
    return (
        <View style={styles.resultContainer}>
            <Text style={{ color: black, fontSize: 26, textAlign: "center" }}>
                {message}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        paddingTop: 180,
    },
})
