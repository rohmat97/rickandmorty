import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../container/HomeScreen";
import DetailScreen from "../container/DetailScreen";

const Stack = createNativeStackNavigator();

const RootNavigation: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: "#5D5FEF",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={{
            headerStyle: {
              backgroundColor: "#5D5FEF",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
