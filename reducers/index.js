import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD } from "../actions"

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS: {
      return {
        ...state,
        ...action.decks,
      }
    }
    case ADD_DECK: {
      const { title } = action
      return {
        ...state,
        [title]: { title, questions: [] },
      }
    }
    case REMOVE_DECK: {
      const { title } = action
      const { [title]: value, ...newState } = state
      return newState
    }

    case ADD_CARD: {
      const { title, card } = action
      return {
        ...state,
        [title]: {
          ...state[title],
          ["questions"]: state[title].questions.concat(card),
        },
      }
    }

    default: {
      return state
    }
  }
}

export default decks
