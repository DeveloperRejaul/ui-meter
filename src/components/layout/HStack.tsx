
import { View } from 'react-native';
import type { IBoxProps } from '../../types/components';

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