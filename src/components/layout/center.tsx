
import { View } from 'react-native';
import type { IBoxProps } from '../../types/components';

export default function(props: IBoxProps) {
 return (
  <View
   style={[{ ...props }, {justifyContent:'center', alignItems:'center'}]}
   {...props}
  >
   {props.children}
  </View>
 );
}