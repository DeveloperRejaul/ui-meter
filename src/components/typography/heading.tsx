
import { Text as RNText } from 'react-native';
import type { ITextProps } from '../../types/components';

export default function(props: ITextProps) {
 return <RNText style={{...props, fontWeight:'bold', fontSize:25}}>{props.children}</RNText>;
}