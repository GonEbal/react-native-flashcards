import React from "react"
import { StyleSheet, View } from "react-native"
import { createStore } from "redux"
import reducer from "./reducers"
import middleware from "./middleware"
import { Provider } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"
import { Main } from "./utils/colors"
import StackNav from "./components/StackNav"
import MyStatusBar from "./components/MyStatusBar"
import { setLocalNotification } from "./utils/helpers"

export default class App extends React.Component {
	componentDidMount() {
		setLocalNotification()
	}
	render() {
		return (
			<Provider store={createStore(reducer, middleware)}>
				<View style={{ flex: 1 }}>
					<NavigationContainer>
						<MyStatusBar backgroundColor={Main} />
						<StackNav />
					</NavigationContainer>
				</View>
			</Provider>
		)
	}
}
