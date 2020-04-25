import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

class SignupScreen extends Component {
  render() {
    return (
      <View>
        <Text>this is the auth Signoutscreen</Text>
        <Button
          title='To  App'
          onPress={() => this.props.navigation.navigate("App")}
        />
        <Button
          title='To  Reset Password'
          onPress={() => this.props.navigation.navigate("Reset")}
        />
        <Button
          title='To  Reset Signup'
          onPress={() => this.props.navigation.navigate("Signin")}
        />
      </View>
    );
  }
}
export default SignupScreen;
