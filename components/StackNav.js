import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import AddDeck from "../screens/AddDeck"
import TabNav from "./TabNav"

const StackNavigatorConfig = {
    headerMode: "screen",
}
const StackConfig = {
    TabNav: {
        name: "DeckList",
        component: TabNav,
        options: { headerShown: false },
    },
    AddDeck: {
        name: "AddDeck",
        component: AddDeck,
        options: {
            headerTintColor: "ffe3e3",
            headerStyle: {
                backgroundColor: "#00BBF2",
            },
            title: "Entry Detail",
        },
    },
}
const Stack = createStackNavigator()

function StackNav() {
    return (
        <Stack.Navigator {...StackNavigatorConfig}>
            <Stack.Screen {...StackConfig["TabNav"]} />
            <Stack.Screen {...StackConfig["AddDeck"]} />
        </Stack.Navigator>
    )
}

export default StackNav
