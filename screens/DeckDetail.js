import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

class DeckDetail extends Component {
	render() {
		const { deck } = this.props
		return (
			<View>
				<Text>{deck.title}</Text>
			</View>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
  const title = ownProps.route.params.title
  const deck = state[title];

  return {
    deck
  };
};

export default connect(mapStateToProps)(DeckDetail);
