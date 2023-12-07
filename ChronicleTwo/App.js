import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [word, setWord] = useState({word: 'chronicle', scrambled: 'iclechron'});
  const [guess, setGuess] = useState('');
  const [isRight, setIsRight] = useState(false);

  const checkGuess = () => {
    if (guess === word.word) {
      setIsRight(true);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Guess the following word:</Text>
      <Text>{word.scrambled}</Text>
      <TextInput
        style={styles.input} 
        onChangeText={setGuess}
        value={guess}  
      />
      <Button
        onPress={checkGuess}
        title="Submit Guess"
        color='Blue'
      />
      {
        isRight ?
        <Text>You're right!</Text> :
        <Text>Keep guessing!</Text>
      }
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
