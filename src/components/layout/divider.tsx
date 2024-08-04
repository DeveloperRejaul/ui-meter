import type { DividerProps } from '../../types/components';
import Box from './box';

export default function (props: DividerProps) {
 const { orientation = 'horizontal', backgroundColor='#000' } = props;
 const isH = orientation === 'horizontal';
 const hv = isH ? props.m && props.m / 2 : 0;
 const vv = isH ? 0 : props.m && props.m / 2;
 return (
  <Box
   {...props}
   backgroundColor={ backgroundColor}
   height={isH ? 2 :'100%'}
   width={isH ? '100%' : 2}
   marginTop={ hv}
   marginBottom= {hv}
   marginLeft={ vv}
   marginRight={ vv}
  />
 );
}