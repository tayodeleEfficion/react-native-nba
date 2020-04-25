import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import AuthLogo from "../App/Components/AuthLogo";
import AuthForm from "../App/Components/AuthForm";

class SigninScreen extends Component {
  goNext = () => {
    this.props.navigation.navigate("App");
  };
  render() {
    return (
      <View style={styles.container}>
        <AuthLogo />
        <AuthForm goNext={this.goNext} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d428a",
    padding: 50,
  },
});
export default SigninScreen;
