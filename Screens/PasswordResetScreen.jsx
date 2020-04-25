import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

class PasswordResetScreen extends Component {
  render() {
    return (
      <View>
        <Text>this is the auth PasswordResetScreen</Text>
        <Button
          title='To  App'
          onPress={() => this.props.navigation.navigate("Signin")}
        />
      </View>
    );
  }
}
export default PasswordResetScreen;
