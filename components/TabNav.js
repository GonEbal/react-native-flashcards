import React from "react";
import {
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DeckList from "../screens/DeckList";
import { ORANGE, WHITE } from "../utils/colors";
import AddDeck from "../screens/AddDeck";
import { Platform } from "react-native";

const Tabs =
    Platform.OS === "ios"
        ? createBottomTabNavigator()
        : createMaterialTopTabNavigator();

function TabNav() {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "DeckList") {
                        iconName = focused
                            ? "ios-bookmarks"
                            : "ios-bookmarks-outline";
                    } else if (route.name === "AddDeck") {
                        iconName = focused
                            ? "add-circle"
                            : "add-circle-outline";
                    }
                    return <Ionicons name={iconName} size={30} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: "#00BBF2",
                inactiveTintColor: "gray",
            }}
        >
            <Tabs.Screen name="DeckList" component={DeckList} />
            <Tabs.Screen name="AddDeck" component={AddDeck} />
        </Tabs.Navigator>
    );
}

export default TabNav;
