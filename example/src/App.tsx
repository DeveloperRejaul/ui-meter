
import { Box, Text , Center, Divider} from 'ui-meter';

export default function App() {
 return (
  <Center height={'100%'}>   
   <Box width={200}>
    <Box backgroundColor='red' padding={50} borderRadius={10}>
     <Text textAlign='center'>This is the Box</Text>
    </Box>
    <Divider m={10} backgroundColor={'green'} orientation='horizontal' />
    <Box backgroundColor='red' padding={50} borderRadius={10}>
     <Text textAlign='center'>This is the Box</Text>
    </Box>
   </Box>
  </Center>
 );
}
