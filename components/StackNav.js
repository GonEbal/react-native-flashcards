import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import AddDeck from "../screens/AddDeck"
import TabNav from "./TabNav"
import DeckDetail from "../screens/DeckDetail"
import AddCard from "../screens/AddCard"
import Quiz from "../screens/Quiz"

const StackNavigatorConfig = {
    headerMode: "screen",
}
const StackConfig = {
    TabNav: {
        name: "DeckList",
        component: TabNav,
        options: { headerShown: false },
    },
    DeckDetail: {
        name: "DeckDetail",
        component: DeckDetail,
        options: {
            headerTintColor: "#ffe3e3",
            headerStyle: {
                backgroundColor: "#00BBF2",
            },
            title: "Deck Detail",
        },
    },
    AddCard: {
        name: "AddCard",
        component: AddCard,
        options: {
            headerTintColor: "#ffe3e3",
            headerStyle: {
                backgroundColor: "#00BBF2",
            },
            title: "Add Card",
        },
    },
    Quiz: {
        name: "Quiz",
        component: Quiz,
        options: {
            headerTintColor: "#ffe3e3",
            headerStyle: {
                backgroundColor: "#00BBF2",
            },
            title: "Quiz",
        },
    },
}
const Stack = createStackNavigator()

function StackNav() {
    return (
        <Stack.Navigator {...StackNavigatorConfig}>
            <Stack.Screen {...StackConfig["TabNav"]} />
            <Stack.Screen {...StackConfig["DeckDetail"]} />
            <Stack.Screen {...StackConfig["AddCard"]} />
            <Stack.Screen {...StackConfig["Quiz"]} />
        </Stack.Navigator>
    )
}

export default StackNav
