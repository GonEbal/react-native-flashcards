import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const Deck = props => {
  const { deck } = props;

  if (deck === undefined) {
    return <View />;
  }
  return (
    <View >
      <View>
        <Text>{deck.title}</Text>
      </View>
      <View>
        <Text>{deck.questions.length} cards</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state, { id }) => {
  const deck = state[id];

  return {
    deck
  };
};

export default connect(mapStateToProps)(Deck);
