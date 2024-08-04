
import type { IBoxProps } from '../../types/components'; 
import Box from './box';


export default function(props: IBoxProps) {
 return (
  <Box {...props} justifyContent='center' alignItems='center'>
   {props.children}
  </Box>
 );
}