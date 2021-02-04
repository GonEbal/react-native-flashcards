import React, { Component } from "react"
import {
	ScrollView,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from "react-native"
import { connect } from "react-redux"
import { handleInitialData } from "../actions"
import Deck from "./Deck"
import { Main, White, Gray } from "../utils/colors"

class DeckList extends Component {
	componentDidMount() {
		this.props.handleInitialData()
	}
	render() {
		const { decks, navigation } = this.props
		return (
			<ScrollView style={styles.container}>
				<Text style={styles.title}>Mobile Flashcards</Text>
				{Object.values(decks).map((deck) => {
					return (
						<TouchableOpacity key={deck.title}>
							<Deck id={deck.title} />
						</TouchableOpacity>
					)
				})}
				<View style={{ marginBottom: 30 }} />
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 16,
	},
	title: {
		fontSize: 40,
		textAlign: "center",
		marginBottom: 16,
		color: Main,
	},
})

const mapStateToProps = (state) => ({ decks: state })

export default connect(mapStateToProps, { handleInitialData })(DeckList)
