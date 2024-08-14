import Svg, { Circle, G, Path } from 'react-native-svg';
import type { IIconTypes } from '../../types/icons';

export default function EyeIcon(props: IIconTypes) {
  return (
    <Svg
      fill={'none'}
      height={props.size || '24'}
      viewBox="0 0 24 24"
      width={props.size || '24'}
      {...props}
    >
      <G
        stroke={props.outline || '#000'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <Path d="m1 12s4-8 11-8 11 8 11 8" />
        <Path d="m1 12s4 8 11 8 11-8 11-8" />
        <Circle cx="12" cy="12" r="3" />
      </G>
    </Svg>
  );
}
