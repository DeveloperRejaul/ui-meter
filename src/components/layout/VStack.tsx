
import { View } from 'react-native';
import type { IBoxProps } from '../../types/components';

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