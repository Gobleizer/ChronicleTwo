import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [word, setWord] = useState({word: 'chronicle', scrambled: 'iclechron'});
  const [guess, setGuess] = useState('');

  return (
    <View style={styles.container}>
      <Text>Guess the following word:</Text>
      <Text>{word.scrambled}</Text>
      <TextInput
        style={styles.input} 
        onChangeText={setGuess}
        value={guess}  
      />

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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
