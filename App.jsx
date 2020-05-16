import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App from "./ToDO.js"
export default function App() {
  return (
    <View style={styles.container}>
      <App />
    </View>
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
