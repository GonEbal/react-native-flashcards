import React, { Component } from "react"
import { View, StyleSheet, Text, TextInput } from "react-native"
import TouchButton from "../components/TouchButton"
import { Gray, Main } from "../utils/colors"

class AddCard extends Component {
	state = {
		question: "",
		answer: "",
	}
	render() {
		return (
			<View>
				<View>
					<View>
						<Text>Add a question</Text>
					</View>
					<View>
						<TextInput placeholder="Question" />
					</View>
					<View>
						<TextInput placeholder="Answer" />
					</View>
					<TouchButton>Submit</TouchButton>
				</View>
				<View/>
			</View>
		)
	}
}

export default AddCard
