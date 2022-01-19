import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import StoryScreen from "../screens/StoryScreen";

const Stack=createStackNavigator();

const StackNavigator = () => {
    return(
        <StackNavigator initialRouteName="Home" screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="Home" component = {TabNavigator}/>
            <Stack.Screen name="StoryScreen" component = {StoryScreen}/>
        </StackNavigator>
    )
}

export default StackNavigator;