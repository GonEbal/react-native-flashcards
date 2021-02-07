import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import DeckList from "../screens/DeckList"
import { main, gray } from "../utils/colors"
import AddDeck from "../screens/AddDeck"
import { Platform } from "react-native"

const Tabs =
    Platform.OS === "ios"
        ? createBottomTabNavigator()
        : createMaterialTopTabNavigator()

function TabNav() {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    if (route.name === "Deck List") {
                        iconName = focused ? "albums" : "albums-outline"
                    } else if (route.name === "Add Deck") {
                        iconName = focused ? "duplicate" : "duplicate-outline"
                    }
                    return <Ionicons name={iconName} size={30} color={color} />
                },
            })}
            tabBarOptions={{
                activeTintColor: main,
                inactiveTintColor: gray,
                style: {
                    height: Platform.OS === "ios" ? 80 : 50,
                },
            }}
        >
            <Tabs.Screen name="Deck List" component={DeckList} />
            <Tabs.Screen name="Add Deck" component={AddDeck} />
        </Tabs.Navigator>
    )
}

export default TabNav
