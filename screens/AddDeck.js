import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import {BLACK, Main, White, Gray} from "../utils/colors";
import TouchButton from "../components/TouchButton"

class AddDeck extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>
					What is the title of your new deck?
				</Text>
				<TextInput
					placeholder="Deck Title"
					placeholderTextColor={BLACK}
					style={styles.inputField}
				/>
				<TouchButton>Submit</TouchButton>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: "center",
	},
	inputField: {
		height: 40,
		padding: 10,
		marginBottom: 30,
		borderColor: Gray,
		borderWidth: 1,
	},
	title: {
		color: Main,
		fontSize: 36,
		textAlign: "center",
		marginBottom: 30,
	},
});

export default AddDeck;
