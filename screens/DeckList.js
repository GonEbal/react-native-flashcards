import React, { Component } from "react";
import {
	ScrollView,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { handleInitialData } from "../actions";
import Deck from './Deck';

class DeckList extends Component {
	componentDidMount() {
		this.props.handleInitialData();
	}
	render() {
		const { decks, navigation } = this.props;
		return (
			<ScrollView>
				<Text>Mobile Flashcards</Text>
				{Object.values(decks).map((deck) => {
					return (
						<TouchableOpacity
							key={deck.title}
						>
							<Deck id={deck.title} />
						</TouchableOpacity>
					);
				})}
				<View style={{ marginBottom: 30 }} />
			</ScrollView>
		);
	}
}

const mapStateToProps = (state) => ({ decks: state });

export default connect(mapStateToProps, { handleInitialData })(DeckList);
