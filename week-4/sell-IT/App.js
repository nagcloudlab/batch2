import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './app/screens/RegisterScreen';




export default function App() {
  return (
    <RegisterScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
