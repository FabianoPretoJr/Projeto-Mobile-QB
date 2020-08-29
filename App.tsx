import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.fdc}>Qual a Boa?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#581C79',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fdc: {
    color: '#D9AE02',
    fontSize: 50,
  }
});
