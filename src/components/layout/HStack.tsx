import type { IBoxProps } from '../../types/components'; 
import { View } from 'react-native';

export default function(props: IBoxProps) {
 return (
  <View
   {...props}
   style={{ ...props, flexDirection:'row'}}
  >
   {props.children}
  </View>
 );
}