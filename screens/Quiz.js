import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import { connect } from "react-redux"
import Message from "../components/Message"
import { Main } from "../utils/colors"

class Quiz extends Component {
	state = {
		questionNumber: 0,
		score: 0,
		answered: false,
		showAnswer: false,
	}
	render() {
		const { deck, deck_length } = this.props
		const { questionNumber, score, answered, showAnswer } = this.state
		return (
			<View style={styles.container}>
				{deck_length !== 0 ? (
					<View style={styles.header}>
						<Text style={styles.progress}>
							{`${questionNumber + 1}/${deck_length}`}
						</Text>
						<Text style={styles.progress}>{`Score: ${score}`}</Text>
					</View>
				) : (
					<Message message="YOU DON'T HAVE ANY DECKS" />
				)}
			</View>
		)
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
