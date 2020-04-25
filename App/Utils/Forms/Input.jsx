import React, { Component } from "react";
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  Picker,
} from "react-native";

const Input = (props) => {
  let template = null;
  switch (props.type) {
    case "textInput":
      template = (
        <TextInput {...props} style={[styles.input, props.overrideStyle]} />
      );
      break;
    default:
      return template;
  }
  return template;
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
    fontSize: 16,
    padding: 5,
    marginTop: 10,
  },
});

export default Input;
