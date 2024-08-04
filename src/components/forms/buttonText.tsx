import type { ITextProps } from '../../types/components';
import Text from '../typography/text';


export default (props: ITextProps) => { 
 return <Text {...props}>{props.children}</Text>;
};