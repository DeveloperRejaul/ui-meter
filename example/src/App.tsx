import { StyleSheet, View, Text } from 'react-native';
import { Heading,Box,Center } from 'ui-meter';

export default function App() {
 return (
  <View style={styles.container}>
   <Text>Result:</Text>
   <Box />
   <Center />
   <Heading />
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
