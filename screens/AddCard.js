import React, { Component } from "react"
import { View, StyleSheet, Text, TextInput } from "react-native"
import TouchButton from "../components/TouchButton"
import { gray, white } from "../utils/colors"
import { connect } from "react-redux"
import { addCard } from "../actions/index"
import { addCardAsync } from "../utils/api"

class AddCard extends Component {
	state = {
		question: "",
		answer: "",
	}
	handleQuestionChange = (question) => {
		this.setState({ question })
	}
	handleAnswerChange = (answer) => {
		this.setState({ answer })
	}
	handleSubmit = () => {
		const { addCard, title, navigation } = this.props
		const card = {
			question: this.state.question,
			answer: this.state.answer,
		}

		addCard(title, card)
		addCardAsync(title, card)

		this.setState({ question: "", answer: "" })
		navigation.goBack()
	}
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
							onChangeText={this.handleQuestionChange}
						/>
					</View>
					<View>
						<TextInput
							placeholder="Answer"
							style={styles.input}
							onChangeText={this.handleAnswerChange}
						/>
					</View>
					<TouchButton
						onPress={this.handleSubmit}
						disabled={
							this.state.question === "" ||
							this.state.answer === ""
						}
					>
						Submit
					</TouchButton>
				</View>
				<View />
			</View>
		)
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
		borderColor: gray,
		backgroundColor: white,
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 5,
		fontSize: 20,
		height: 40,
		marginBottom: 20,
	},
})

const mapStateToProps = (state, ownProps) => {
	const title = ownProps.route.params.title
	return {
		title,
	}
}

export default connect(mapStateToProps, { addCard })(AddCard)
