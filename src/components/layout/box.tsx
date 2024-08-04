import { View} from 'react-native';
import type { IBoxProps } from '../../types/components';
import { getProps } from '../../parser/view';

export default function Box(props: IBoxProps) {
 const { root, style} = getProps(props);
 return (
  <View style={style} {...root}>
   {props.children}
  </View>
 );
}