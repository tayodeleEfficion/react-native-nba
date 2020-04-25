import { View, Text, StyleSheet, Button, Platform } from "react-native";
import React, { Component } from "react";
import Input from "../Utils/Forms/Input";
import ValidationRules from "../Utils/Forms/ValidationRules";
import { Signin, Signup } from "../Store/Actions/UserAction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class AuthForm extends Component {
  state = {
    type: "Login",
    action: "Login",
    actionMode: "I want To Register ",
    hasError: false,
    form: {
      email: {
        value: "",
        type: "textInput",
        valid: false,
        rules: {
          isRequired: true,
          isEmail: true,
        },
      },
      password: {
        value: "",
        type: "textInput",
        valid: false,
        rules: {
          isRequired: true,
          minLength: 6,
        },
      },
      confirmPasswrd: {
        value: "",
        type: "textInput",
        valid: false,
        rules: {
          confirmPass: "password",
        },
      },
    },
  };

  submitUser = () => {
    let isFormValid = true;
    let formToSubmit = {};
    const formCopy = this.state.form;

    for (let key in formCopy) {
      if (this.state.type) {
        if (key !== "confirmPasswrd") {
          isFormValid = isFormValid && formCopy[key].valid;
          formToSubmit[key] = formCopy[key].value;
        }
      } else {
        isFormValid = isFormValid && formCopy[key].valid;
        formToSubmit[key] = formCopy[key].value;
      }
    }
    if (isFormValid) {
      if (this.state.type === "Login") {
        this.props.Signin(formToSubmit);
      } else {
        this.props.Signup(formToSubmit);
      }
    } else {
      this.setState({
        hasError: true,
      });
    }
  };

  updateInput = (name, value) => {
    this.setState({
      hasError: false,
    });
    let formCopy = this.state.form;
    formCopy[name].value = value;

    let rules = formCopy[name].rules;
    let valid = ValidationRules(value, rules, formCopy);

    formCopy[name].valid = valid;
    this.setState({
      form: formCopy,
    });
  };

  confirmPassword = () =>
    this.state.type != "Login" ? (
      <Input
        placeholder=' Confirm Your Password'
        placeholderTextColor='#cecece'
        secureTextE
        ntry
        type={this.state.form.confirmPasswrd.type}
        value={this.state.form.confirmPasswrd.value}
        onChangeText={(value) => this.updateInput("confirmPasswrd", value)}
      />
    ) : null;

  changeFormType = () => {
    const type = this.state.type;
    this.setState({
      type: type === "Login" ? "Register" : "Login",
      action: type === "Login" ? "Register" : "Login",
      actionMode: type === "Login" ? "I Want To Login" : "I Want To  Register",
    });
  };

  formHasErrors = () =>
    this.state.hasError ? (
      <View style={styles.errorContainer}>
        <Text style={styles.errorLabel}>OOps check Your Info</Text>
      </View>
    ) : null;

  render() {
    return (
      <View>
        <Input
          placeholder=' Enter Your Email'
          placeholderTextColor='#cecece'
          autoCapitalize={"none"}
          type={this.state.form.email.type}
          value={this.state.form.email.value}
          keyboardType={"email-address"}
          onChangeText={(value) => this.updateInput("email", value)}
        />
        <Input
          placeholder=' Enter Your Password'
          placeholderTextColor='#cecece'
          autoCapitalize={"none"}
          type={this.state.form.password.type}
          value={this.state.form.password.value}
          secureTextEntry
          onChangeText={(value) => this.updateInput("password", value)}
        />
        {this.confirmPassword()}
        {this.formHasErrors()}

        <View style={{ marginTop: 10 }}>
          <View style={styles.button}>
            <Button
              title={this.state.action}
              onPress={() => this.submitUser()}
            />
          </View>
          <View style={styles.button}>
            <Button
              title={this.state.actionMode}
              onPress={() => this.changeFormType()}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="I'll Do It Later"
              onPress={() => this.props.goNext()}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorContainer: {
    marginBottom: 10,
    marginTop: 30,
    padding: 10,
    backgroundColor: "#f44336",
  },
  errorLabel: {
    color: "#fff",
    textAlignVertical: "center",
    textAlign: "center",
  },
  button: {
    ...Platform.select({
      ios: {
        marginBottom: 0,
      },
      android: {
        marginBottom: 10,
        marginTop: 10,
      },
    }),
  },
});

function mapStateToProps(state) {
  return {
    User: state.User,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ Signin, Signup }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
