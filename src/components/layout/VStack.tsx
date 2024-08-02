import type { IBoxProps } from '../../types/components'; 
import { View } from 'react-native';

export default function(props: IBoxProps) {
 return (
  <View
   style={{...props, flexDirection:'column'}}
   {...props}
  >
   {props.children}
  </View>
 );
}