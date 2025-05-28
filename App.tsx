import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import Home from './Components/Home';
import Form from './Components/Form';
import MyButton from './Components/MyButton';
import Counter from './Components/Counter';
import Product from './Components/Product';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [token, setToken] = useState("");
  useEffect(() => {
    AsyncStorage.getItem("token").then((res) => {
      console.log(res);
    })
  }, [])
  return (
    <NavigationContainer>

      <Stack.Navigator >
        {token != "" ? <Stack.Screen name='signup' component={Form}></Stack.Screen> : <Stack.Screen options={{ headerShown: false }} name='Home' component={Tabs}></Stack.Screen>
        }
        <Stack.Screen options={{ headerShown: false }} name='page' component={Tabs}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer >
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    paddingLeft: 10,
  },

});
