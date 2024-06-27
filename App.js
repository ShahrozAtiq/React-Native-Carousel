import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "./componenets/TabBar";

const Tab = createBottomTabNavigator();

function Screen({ navigation, route }) {
  return (
    <View style={styles.screen}>
      <Text>{route.name} Screen</Text>
    </View>
  );
}

export default function App() {
  function TabScreens() {
    return (
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={Screen} />
        <Tab.Screen name="Notifications" component={Screen} />
        <Tab.Screen name="Profile" component={Screen} />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <TabScreens />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
