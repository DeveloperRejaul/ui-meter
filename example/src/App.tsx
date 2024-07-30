import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {  Button } from 'ui-meter';

export default function App() {
  const [result, setResult] = useState<number | undefined>();



  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Button />
      <Text> Hellsadfasfd</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
