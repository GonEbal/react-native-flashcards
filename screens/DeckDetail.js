import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { connect } from "react-redux"
import Deck from "./Deck"
import TouchButton from "../components/TouchButton"
import TextButton from "../components/TextButton"

class DeckDetail extends Component {
	render() {
		const { deck } = this.props
		return (
			<View>
				<Deck title={deck.title} />
				<View>
					<TouchButton
						onPress={() =>
							this.props.navigation.navigate("AddCard", {
								title: deck.title,
							})
						}
					>
						Add Card
					</TouchButton>
					<TouchButton
						onPress={() =>
							this.props.navigation.navigate("Quiz", {
								title: deck.title,
							})
						}
					>
						Start Quiz
					</TouchButton>
				</View>
				<TextButton>Delete Deck</TextButton>
			</View>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const title = ownProps.route.params.title
	const deck = state[title]
	return {
		deck,
	}
}

export default connect(mapStateToProps)(DeckDetail)
