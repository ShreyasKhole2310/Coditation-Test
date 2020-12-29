import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Users from "./users";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import gitrepos from "./gitrepos";
import GitRepos from "./gitrepos";
export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<MyStack />
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

let AppNavigation = createStackNavigator();

function MyStack() {
	return (
		<AppNavigation.Navigator initialRouteName="Users">
			<AppNavigation.Screen name="Users" component={Users} />
			{/* User List  */}
			<AppNavigation.Screen name="RepoList" component={GitRepos} />{" "}
			{/* Repository List  */}
		</AppNavigation.Navigator>
	);
}
