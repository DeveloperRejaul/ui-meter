import { Pressable } from 'react-native';
import type { IButtonProps } from '../../types/components';
import { getProps } from '../../parser/view';
import { colors } from '../../theme/colors';

export default (props: IButtonProps) => {
 const { root , style} = getProps(props);
 return (
  <Pressable {...root} style={[{
   backgroundColor: colors.success[500],
   paddingHorizontal: 15,
   paddingVertical: 5,
   borderRadius:7
  }, style]}
  >
   {props.children}
  </Pressable>
 );
};