import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View,Text } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider, useSafeArea } from "react-native-safe-area-context";
import AudiosScreen from "./screens/AudiosScreen";
import NoticiesScreen from "./screens/NoticiesScreen";
import NoticiaScreen from "./screens/NoticiaScreen";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const HomePage = ({ navigation }) => {
  // c) amb 'useSafeArea' obtenim els "insets" de cada costat
  const insets = useSafeArea();
  // <NumberList length={40} />
  return (
    <View style={[styles.homePage, { paddingTop: insets.top }]}>
      <Tab.Navigator
        initialRouteName="AudiosScreen"
        screenOptions={{}}
        tabBarOptions={{
          activeTintColor: "#DBDBDB",
          style: {
            backgroundColor: "#3B0D11",
            height: 40 /* borderColor:"white", borderTopWidth:1 , borderbottomWidth:1 */,
          },
          indicatorStyle: {
            backgroundColor: "#6A3937",
            height: 40 /* borderColor:"white", borderWidth:1 */,
          },
        }}
      >
        <Tab.Screen name="NOTICIES" component={NoticiesScreen} />
        <Tab.Screen name="AUDIOS" component={AudiosScreen} />
      </Tab.Navigator>
    </View>
  );
};



export default function App() {
  // b) Posar com a arrel de l'app el SafeAreaProvider
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#3B0D11",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "regular",
            },
          }}
        >
          <Stack.Screen name="EFMR" component={HomePage} />
          <Stack.Screen name="NoticiaScreen" component={NoticiaScreen} />
          {/* <HomePage /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
