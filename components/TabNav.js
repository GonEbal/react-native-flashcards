import React from "react";
import {
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DeckList from "../screens/DeckList";
import { LightBlue, Gray } from "../utils/colors";
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

                    if (route.name === "Deck List") {
                        iconName = focused
                            ? "ios-bookmarks"
                            : "ios-bookmarks-outline";
                    } else if (route.name === "Add Deck") {
                        iconName = focused
                            ? "add-circle"
                            : "add-circle-outline";
                    }
                    return <Ionicons name={iconName} size={30} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: LightBlue,
                inactiveTintColor: Gray,
            }}
        >
            <Tabs.Screen name="Deck List" component={DeckList} />
            <Tabs.Screen name="Add Deck" component={AddDeck} />
        </Tabs.Navigator>
    );
}

export default TabNav;
