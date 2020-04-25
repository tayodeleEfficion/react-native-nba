import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./App/Store/store";
import RootNavigation from "./App/Navigation";

// const firebaseConfig = {
//   apiKey: "AIzaSyDOHkxZulH4JbgRo0ZxrU06clg9RjIPw64",
//   authDomain: "aradugboweb.firebaseapp.com",
//   databaseURL: "https://aradugboweb.firebaseio.com",
//   projectId: "aradugboweb",
//   storageBucket: "aradugboweb.appspot.com",
//   messagingSenderId: "823245947361",
//   appId: "1:823245947361:web:41017a76a4c73ea41812a0",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#fff",
  },
});
