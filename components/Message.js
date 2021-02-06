import { StyleSheet, Text, View } from "react-native";
import { BLACK } from "../utils/colors";
import React from "react";

export default function Message(props) {
    const { message } = props;
    return (
        <View style={styles.resultContainer}>
            <Text style={{ color: BLACK, fontSize: 26, textAlign: "center" }}>
                {message}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    resultContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        paddingTop: 180,
    },
});
