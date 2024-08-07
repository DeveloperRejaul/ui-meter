import Svg, { Path } from 'react-native-svg';
import type { IIconTypes } from '../../types/icons';

export default function CheckIcon(props: IIconTypes) {
 return (
  <Svg
   stroke='currentColor'
   fill='currentColor'
   strokeWidth={0}
   viewBox='0 0 512 512'
   height={props.size || 25}
   width={props.size || 25}
   {...props}
  >
   <Path
    d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
    stroke='none'
   />
  </Svg>
 );
}
