
import { Text as RNText } from 'react-native';
import type { ITextProps } from '../../types/components';
import { getProps } from '../../parser/text';


export default function (props: ITextProps) {
 const { root, style} = getProps(props);
 return <RNText {...root} style={ style}>{props.children}</RNText>;
}