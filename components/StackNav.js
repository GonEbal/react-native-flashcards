import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import TabNav from "./TabNav"
import DeckDetail from "../screens/DeckDetail"
import AddCard from "../screens/AddCard"
import Quiz from "../screens/Quiz"
import { main } from "../utils/colors"

const StackNavigatorConfig = {
    headerMode: "screen",
}
const StackConfig = {
    Home: {
        name: "Home",
        component: TabNav,
        options: { headerShown: false },
    },
    DeckDetail: {
        name: "DeckDetail",
        component: DeckDetail,
        options: {
            headerTintColor: "#ffe3e3",
            headerStyle: {
                backgroundColor: main,
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
                backgroundColor: main,
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
                backgroundColor: main,
            },
            title: "Quiz",
        },
    },
}
const Stack = createStackNavigator()

function StackNav() {
    return (
        <Stack.Navigator {...StackNavigatorConfig}>
            <Stack.Screen {...StackConfig["Home"]} />
            <Stack.Screen {...StackConfig["DeckDetail"]} />
            <Stack.Screen {...StackConfig["AddCard"]} />
            <Stack.Screen {...StackConfig["Quiz"]} />
        </Stack.Navigator>
    )
}

export default StackNav
