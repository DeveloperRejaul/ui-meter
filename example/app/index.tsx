import { Center, Button, ButtonText } from 'ui-meter';

export default function App() {
 const handlePress = () => { 
  console.log('hello world!');
 };
    
 return (
  <Center flex={1}>
   <Button onPress={handlePress}>
    <ButtonText >Click Me</ButtonText>
   </Button>
  </Center>
 );
}