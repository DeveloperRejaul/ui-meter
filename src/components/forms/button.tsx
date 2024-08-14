import { Pressable } from 'react-native';
import type { IButtonProps } from '../../types/components';
import { getProps } from '../../parser/view';
import { colors } from '../../theme/colors';

export default (props: IButtonProps) => {
  const { root, style } = getProps(props);
  const { variant = 'solid' } = props;
  return (
    <Pressable
      {...root}
      style={[
        {
          backgroundColor:
            variant === 'solid' ? colors.success[500] : 'transparent',
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderRadius: 7,
          borderWidth: 1,
          borderColor: colors.success[500],
        },
        style,
      ]}
    >
      {props.children}
    </Pressable>
  );
};
