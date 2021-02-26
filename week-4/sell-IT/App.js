import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Exercise</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    fontSize: 30
  }
})

