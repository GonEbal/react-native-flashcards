import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import TouchButton from "../components/TouchButton";
import { Gray, Main } from "../utils/colors";

class AddCard extends Component {
	state = {
		question: "",
		answer: "",
	};
	render() {
		return (
			<View style={styles.container}>
				<View>
					<View>
						<Text style={styles.title}>Add a question</Text>
					</View>
					<View>
						<TextInput
							placeholder="Question"
							style={styles.input}
							autoFocus={true} 
							
						/>
					</View>
					<View>
						<TextInput 
						placeholder="Answer" 
						style={styles.input} 
						
						/>
					</View>
					<TouchButton>Submit</TouchButton>
				</View>
				<View />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: "space-around",
	},
	title: {
		textAlign: "center",
		fontSize: 32,
		marginBottom: 20,
	},
	input: {
		borderWidth: 1,
		borderColor: "gray",
		backgroundColor: "#fff",
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 5,
		fontSize: 20,
		height: 40,
		marginBottom: 20,
	},
});

export default AddCard;
