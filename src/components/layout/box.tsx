import { View} from 'react-native';
import type { IBoxProps } from '../../types/components';


export default function Box(props: IBoxProps) {
 return (
  <View
   style={{...props}}
   {...props}
  >
   {props.children}
  </View>
 );
}