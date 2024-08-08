import { Center, Switch } from 'ui-meter';

export default function App() {
 const handleChange = (value: boolean) => { 
  console.log(value);
 };
    
 return (
  <Center flex={1}>
   <Switch onChange={handleChange} size={50} />
  </Center>
 );
}