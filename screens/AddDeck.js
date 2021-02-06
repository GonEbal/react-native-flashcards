import React, { Component } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { BLACK, Main, White, Gray } from "../utils/colors"
import TouchButton from "../components/TouchButton"
import { addDeck } from "../actions"
import { connect } from "react-redux"
import { saveDeckTitleAsync } from "../utils/api"

class AddDeck extends Component {
	state = {
		title: "",
	}
	handleChange = (title) => {
		this.setState(() => ({
			title: title,
		}))
	}
	handleSubmit = () => {
		const { title } = this.state
		const { addDeck, navigation } = this.props

		addDeck(title)
		saveDeckTitleAsync(title)

		this.setState(() => ({
			title: "",
		}))
	}
	render() {
		const { title } = this.state
		return (
			<View style={styles.container}>
				<Text style={styles.title}>
					What is the title of your new deck?
				</Text>
				<TextInput
					placeholder="Deck Title"
					style={styles.inputField}
					onChangeText={this.handleChange}
					value={title}
				/>
				<TouchButton
					disabled={title === ""}
					onPress={() => {
						this.handleSubmit()
					}}
				>
					Create Deck
				</TouchButton>
			</View>
		)
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
})

export default connect(null, { addDeck })(AddDeck)
