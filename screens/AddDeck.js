import React, { Component } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { main, white, gray } from "../utils/colors"
import TouchButton from "../components/TouchButton"
import { addDeck } from "../actions"
import { connect } from "react-redux"
import { saveDeckAsync } from "../utils/api"

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
		saveDeckAsync(title).then(
			() => navigation.goBack(),
			navigation.navigate("DeckDetail", { title })
		)

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
					autoFocus={true}
					style={styles.input}
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
	input: {
		borderWidth: 1,
		borderColor: gray,
		backgroundColor: white,
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 5,
		fontSize: 20,
		height: 40,
		marginBottom: 20,
	},
	title: {
		color: main,
		fontSize: 36,
		textAlign: "center",
		marginBottom: 30,
	},
})

export default connect(null, { addDeck })(AddDeck)
