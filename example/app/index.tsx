import { Center, Checkbox } from 'ui-meter';


export default function App() {

 const handleCheck = (check: boolean) => {
  console.log(check);
 }; 

    
 return (
  <Center flex={1}>
   <Checkbox onCheck={handleCheck} label='Label' />
  </Center>
 );
}