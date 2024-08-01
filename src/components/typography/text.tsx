import type { ITextProps } from '@/src/types/components';
import { Text as RNText } from 'react-native';

export default function(props: ITextProps) {
 return <RNText style={{...props}}>{props.children}</RNText>;
}