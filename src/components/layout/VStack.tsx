import type { IBoxProps } from '../../types/components';
import Box from './box';

export default function(props: IBoxProps) {
 return (
  <Box flexDirection='column' {...props}>
   {props.children}
  </Box>
 );
}