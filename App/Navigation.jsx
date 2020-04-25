import React, { Component } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SigninScreen from "../Screens/SigninScreen";
import SignupScreen from "../Screens/SignupScreen";
import GameScreen from "../Screens/GamesScreen";
import NewScreen from "../Screens/NewsScreen";
import PasswordResetScreen from "../Screens/PasswordResetScreen";

const AppNav = createBottomTabNavigator();
const AuthNav = createStackNavigator();
const Mainstack = createStackNavigator();

const AppStack = ({ navigation }) => {
  return (
    <AppNav.Navigator>
      <AppNav.Screen name='News' component={NewScreen} />
      <AppNav.Screen name='Games' component={GameScreen} />
    </AppNav.Navigator>
  );
};
const AuthStack = ({ navigation }) => {
  return (
    <AuthNav.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthNav.Screen name='Signin' component={SigninScreen} />
      <AuthNav.Screen name='Signup' component={SignupScreen} />
      <AuthNav.Screen name='Reset' component={PasswordResetScreen} />
    </AuthNav.Navigator>
  );
};

export default class RootNavigation extends Component {
  state = {
    loading: false,
  };
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <NavigationContainer>
          <Mainstack.Navigator>
            <Mainstack.Screen name='Auth' component={AuthStack} />
            <Mainstack.Screen name='App' component={AppStack} />
          </Mainstack.Navigator>
        </NavigationContainer>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
