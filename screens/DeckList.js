import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from 'react-redux';
import { handleInitialData } from '../actions';

class DeckList extends Component {
	componentDidMount() {
    	this.props.handleInitialData();
  	}
	render() {
		const { decks, navigation } = this.props;
		return (
			<View>
				<Text>Deck List</Text>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({ decks: state });

export default connect(mapStateToProps, { handleInitialData })(DeckList);
