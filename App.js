import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  IndexScreen,
  CreateScreen,
  ShowScreen,
  EditScreen,
} from "./src/screens/index";
import { Provider } from "./src/contexts/BlogContext";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerStyle: {
          //   backgroundColor: "#f4511e",
          // },
          headerShown: false,
        }}
      >
        <Stack.Screen name="IndexScreen" component={IndexScreen} />
        <Stack.Screen name="ShowScreen" component={ShowScreen} />
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
        <Stack.Screen name="EditScreen" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
