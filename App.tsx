import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import Home from './Components/Home';
import Form from './Components/Form';
import MyButton from './Components/MyButton';
import Counter from './Components/Counter';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Form /> */}
      <Counter />
      <MyButton name='save' handle={function (): void {
        alert('hi from resComponent');
      }} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    paddingLeft: 10,
  },

});
