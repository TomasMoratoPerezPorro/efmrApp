import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider, useSafeArea } from "react-native-safe-area-context";
import AudioDetailScreen from "./screens/AudioDetailScreen";
import AudiosScreen from "./screens/AudiosScreen";
import ContacteDetailScreen from "./screens/ContacteDetailScreen";
import NoticiaDetailsScreen from "./screens/NoticiaDetailsScreen";
import NoticiesScreen from "./screens/NoticiesScreen";
import {NoticiesProvider} from "./model/NoticiesModel";
import {useFonts} from '@use-expo/font';



const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const HomePage = ({ navigation }) => {
  // c) amb 'useSafeArea' obtenim els "insets" de cada costat
  const insets = useSafeArea();
  // <NumberList length={40} /> 
  return (
    <View style={[styles.homePage, { paddingTop: 1 }]}>
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

  const [fontsLoaded] = useFonts({
    "Rajdhani-Regular": require("./assets/fonts/Rajdhani-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
    <View style={styles.homePage}>
      <ActivityIndicator />
    </View>
    );
 
  }

  return (
    <NoticiesProvider>
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: {
              backgroundColor: "#3B0D11",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "normal",
            },
          }}
        >
          <Stack.Screen name="EFMR" component={HomePage}/>
          <Stack.Screen name="NoticiaScreen" component={NoticiaDetailsScreen} style={styles.typo}/>
          <Stack.Screen name="AudioScreen" component={AudioDetailScreen} style={styles.typo}/>
          <Stack.Screen
            name="ContacteScreen"
            component={ContacteDetailScreen}
            style={styles.typo}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </NoticiesProvider>
  );
}

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  typo: {
    fontFamily: "Rajdhani-Regular",
    fontSize: 20,
  },
  
});
