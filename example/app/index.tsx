import { Checkbox } from 'ui-meter';
import { View } from 'react-native';
import app from '../app';


export default function App() {

 const handleCheck = (check: boolean) => {
  console.log(check);
 }; 

    
 return (
  <View style={app.container} >
   <Checkbox onCheck={handleCheck} size={50} />
  </View>
 );
}