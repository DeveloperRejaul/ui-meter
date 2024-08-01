import type { IBoxProps } from '@/src/types/components';
import { View } from 'react-native';

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