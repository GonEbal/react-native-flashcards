import { AsyncStorage } from "react-native";
import { decks } from "./_DATA";

const DECKS_STORAGE_KEY = "MobileFlashcards:decks";

export function getData() {
  return decks;
}
