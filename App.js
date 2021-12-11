import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/Routes";
import { StatusBar } from "react-native";
import store from "./src/store"


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
        <Routes />

      </NavigationContainer>
    </Provider>
  );
}