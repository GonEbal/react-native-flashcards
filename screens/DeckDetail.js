import React, { Component } from "react"
import { View } from "react-native"
import { connect } from "react-redux"
import Deck from "./Deck"
import TouchButton from "../components/TouchButton"
import TextButton from "../components/TextButton"
import { removeDeck } from "../actions/index"
import { removeDeckAsync } from "../utils/api"
import { main, white } from "../utils/colors"

class DeckDetail extends Component {
	shouldComponentUpdate(nextProps) {
		return nextProps.deck !== undefined
	}

	deleteDeck = (title) => {
		const { removeDeck, navigation } = this.props

		removeDeck(title)
		removeDeckAsync(title)

		navigation.goBack()
	}
	render() {
		const { deck } = this.props
		return (
			<View>
				<Deck title={deck.title} />
				<View>
					<TouchButton
						btnStyle={{ backgroundColor: white, borderColor: main }}
						txtStyle={{ color: main }}
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
				<TextButton
					onPress={() => {
						this.deleteDeck(deck.title)
					}}
				>
					Delete Deck
				</TextButton>
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

export default connect(mapStateToProps, { removeDeck })(DeckDetail)
