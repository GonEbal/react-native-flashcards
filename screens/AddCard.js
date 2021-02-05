import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import TouchButton from "../components/TouchButton";
import { Gray, Main, White } from "../utils/colors";
import { connect } from "react-redux";
import { addCard } from '../actions/index';
import { addCardToDeckAsync } from '../utils/api';

class AddCard extends Component {
	state = {
		question: "",
		answer: "",
	};
	handleQuestionChange = (question) => {
		this.setState({ question });
	};
	handleAnswerChange = (answer) => {
		this.setState({ answer });
	};
	handleSubmit = () => {
		
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
		borderColor: Gray,
		backgroundColor: White,
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 5,
		fontSize: 20,
		height: 40,
		marginBottom: 20,
	},
});

const mapStateToProps = (state, ownProps) => {
	const title = ownProps.route.params.title;
	return {
		title,
	};
};

export default connect(mapStateToProps)(AddCard);
