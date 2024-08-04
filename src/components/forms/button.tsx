import { Pressable } from 'react-native';
import type { IButtonProps } from '../../types/components';
import { getProps } from '../../parser/view';

export default (props: IButtonProps) => {
 const { root , style} = getProps(props);
 return (
  <Pressable {...root} style={style} >
   {props.children}
  </Pressable>
 );
};