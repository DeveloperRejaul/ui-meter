import Svg, { Path } from 'react-native-svg';
import type { IIconTypes } from '../../types/icons';

export default function LockIcon(props: IIconTypes) {
  return (
    <Svg
      width={props.size || '24'}
      height={props.size || '24'}
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <Path
        d='M16 12H17.4C17.7314 12 18 12.2686 18 12.6V19.4C18 19.7314 17.7314 20 17.4 20H6.6C6.26863 20 6 19.7314 6 19.4V12.6C6 12.2686 6.26863 12 6.6 12H8M16 12V8C16 6.66667 15.2 4 12 4C8.8 4 8 6.66667 8 8V12M16 12H8'
        stroke={props.outline || 'currentColor'}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}
