import { StyleSheet, Text, View } from 'react-native';

import StartMenuScreen from './screens/StartMenuScreen';

export default function App() {
  return <StartMenuScreen />;
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
