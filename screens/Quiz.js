import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import { connect } from "react-redux"
import Message from "../components/Message"
import { main, white, red, green } from "../utils/colors"
import TouchButton from "../components/TouchButton"
import { setLocalNotification, clearLocalNotification } from "../utils/helpers"

class Quiz extends Component {
	state = {
		questionNumber: 0,
		score: 0,
		isFinished: false,
		showAnswer: false,
	}
	componentDidMount() {
		clearLocalNotification().then(setLocalNotification)
	}
	handleFlip = () => {
		this.setState((state) => {
			return {
				...state,
				["showAnswer"]: !state["showAnswer"],
			}
		})
	}
	handleAnswer(isCorrect) {
		const { questionNumber, isFinished } = this.state
		const { deck_length } = this.props
		if (isCorrect) {
			this.setState((state) => {
				return {
					...state,
					["score"]: state["score"] + 10,
				}
			})
		}
		if (questionNumber + 1 === deck_length) {
			this.setState((state) => {
				return {
					...state,
					["isFinished"]: true,
				}
			})
		} else {
			this.setState((state) => {
				return {
					...state,
					["questionNumber"]: state["questionNumber"] + 1,
					["showAnswer"]: false,
				}
			})
		}
	}
	handleRestart = () => {
		this.setState(() => ({
			questionNumber: 0,
			score: 0,
			isFinished: false,
			showAnswer: false,
		}))
	}
	render() {
		const { deck, deck_length, navigation } = this.props
		const { questionNumber, score, isFinished, showAnswer } = this.state
		const { question, answer } = deck.questions[questionNumber]
			? deck.questions[questionNumber]
			: {}
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
									<TouchButton
										onPress={() => {
											this.handleRestart()
										}}
									>
										Restart
									</TouchButton>
									<TouchButton
										btnStyle={{
											backgroundColor: white,
											borderColor: main,
										}}
										txtStyle={{ color: main }}
										onPress={() => {
											this.handleRestart()
											navigation.goBack()
										}}
									>
										Back To Deck
									</TouchButton>
								</React.Fragment>
							) : showAnswer ? (
								<React.Fragment>
									<Message message={answer} />
									<TouchButton
										btnStyle={{ backgroundColor: green }}
										onPress={() => {
											this.handleAnswer(true)
										}}
									>
										Correct
									</TouchButton>
									<TouchButton
										btnStyle={{ backgroundColor: red }}
										onPress={() => {
											this.handleAnswer(false)
										}}
									>
										Incorrect
									</TouchButton>
								</React.Fragment>
							) : (
								<React.Fragment>
									<Message message={question} />
									<TouchButton
										onPress={() => this.handleFlip()}
									>
										Show Answer
									</TouchButton>
								</React.Fragment>
							)}
						</View>
					</React.Fragment>
				) : (
					<Message message="YOU DON'T HAVE ANY CARDS." />
				)}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 15,
	},

	progress: {
		fontSize: 22,
	},
	body: {
		flex: 1,
		paddingBottom: 80,
	},
})

const mapStateToProps = (state, ownProps) => {
	const title = ownProps.route.params.title
	const deck = state[title]
	const deck_length = Object.values(deck.questions).length
	return {
		deck,
		deck_length,
	}
}

export default connect(mapStateToProps)(Quiz)
