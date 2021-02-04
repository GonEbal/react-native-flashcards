import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Main, White, Gray } from "../utils/colors"
import { connect } from "react-redux"

const Deck = (props) => {
  const { deck } = props

  if (deck === undefined) {
    return <View style={styles.container} />
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.deckTtitle}>{deck.title}</Text>
      </View>
      <View>
        <Text style={styles.cardCount}>{deck.questions.length} cards</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: White,
    borderRadius: Platform.OS === "ios" ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: "center",
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  deckTtitle: {
    fontSize: 28,
  },
  cardCount: {
    fontSize: 18,
    color: Main,
  },
})

const mapStateToProps = (state, { id }) => {
  const deck = state[id]

  return {
    deck,
  }
}

export default connect(mapStateToProps)(Deck)
