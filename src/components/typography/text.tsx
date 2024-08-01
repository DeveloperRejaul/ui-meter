
import { Text as RNText } from 'react-native';
import type { ITextProps } from '../../types/components';

export default function(props: ITextProps) {
 return <RNText style={{...props}}>{props.children}</RNText>;
}