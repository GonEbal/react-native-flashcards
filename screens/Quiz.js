import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import Message from "../components/Message";
import { Main, White } from "../utils/colors";
import TouchButton from "../components/TouchButton";

class Quiz extends Component {
	state = {
		questionNumber: 0,
		score: 0,
		isFinished: false,
		showAnswer: false,
	};
	render() {
		const { deck, deck_length } = this.props;
		const { questionNumber, score, isFinished, showAnswer } = this.state;
		const { question, answer } = deck.questions[questionNumber]
			? deck.questions[questionNumber]
			: {};
		return (
			<View style={styles.container}>
				{deck_length !== 0 ? (
					<React.Fragment>
						<View style={styles.header}>
							<Text style={styles.progress}>
								{`${questionNumber + 1}/${deck_length}`}
							</Text>
							<Text
								style={styles.progress}
							>{`Score: ${score}`}</Text>
						</View>
						<View style={styles.body}>
							{isFinished ? (
								<React.Fragment>
									<Message
										message={`Your score is ${score}`}
									/>
									<TouchButton style={styles.button}>
										Restart
									</TouchButton>
								</React.Fragment>
							) : showAnswer ? (
								<React.Fragment>
									<Message
										message={answer}
									/>
									<TouchButton style={styles.button}>
										Correct
									</TouchButton>
									<TouchButton style={styles.button}>
										Incorrect
									</TouchButton>
								</React.Fragment>
							) : (
								<React.Fragment>
									<Message
										message={question}
									/>
									<TouchButton style={styles.button}>
										Show Answer
									</TouchButton>
								</React.Fragment>
							)}
						</View>
					</React.Fragment>
				) : (
					<Message message="YOU DON'T HAVE ANY DECKS" />
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
	},

	header: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 15,
	},

	progress: {
		fontSize: 22,
	},
	body: {
		flex: 4,
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		flex: 2,
		justifyContent: "space-evenly",
		alignItems: "center",
	},
});

const mapStateToProps = (state, ownProps) => {
	const title = ownProps.route.params.title;
	const deck = state[title];
	const deck_length = Object.values(deck.questions).length;
	return {
		deck,
		deck_length,
	};
};

export default connect(mapStateToProps)(Quiz);
