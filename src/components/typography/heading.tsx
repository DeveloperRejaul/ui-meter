import type { ITextProps } from '@/src/types/components';
import { Text as RNText } from 'react-native';

export default function(props: ITextProps) {
 return <RNText style={{...props, fontWeight:'bold', fontSize:25}}>{props.children}</RNText>;
}