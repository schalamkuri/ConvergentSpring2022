import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
export default function App() {
  return (
  //<WelcomeScreen/>
  <LoginScreen/>
    // <View style={styles.container}>
    //   <Text>ham</Text>
    //   <StatusBar style="auto" />
    // </View>
    
    // <View style = {styles.container}>
    //    <Text>ham</Text>
    // </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
