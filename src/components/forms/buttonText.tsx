import { colors } from '../../theme/colors';
import type { ITextProps } from '../../types/components';
import Text from '../typography/text';

export default (props: ITextProps) => { 
 return <Text fontWeight={'bold'} color={colors.light[100]} fontSize={15} {...props}>{props.children}</Text>;
};