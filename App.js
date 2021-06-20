import react, * as React from "react"
import { Text, View, TouchableOpacity } from "react-native"
import Homescreen from "./screens/home"
import Detailscreen from "./screens/details"
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"

export default function App() {
  return (
    <Appcontainer/>
  )
}

const appstacknavigator = createStackNavigator({
  Home: { screen: Homescreen, navigationOptions: { headerShown: false } },
  Details: { screen: Detailscreen }
}, { initialRouteName: "Home" })

const Appcontainer = createAppContainer(appstacknavigator)