import type { ITextProps } from '../../types/components';
import Text from './text';

export default function (props: ITextProps) {
 return <Text fontWeight='bold' fontSize={20} {...props} >{props.children}</Text>;
}