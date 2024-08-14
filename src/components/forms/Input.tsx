import Box from '../layout/box';
import { useState } from 'react';
import type { InputProps } from '../../types/components';
import { getProps } from '../../parser/text';
import { colors } from '../../theme/colors';
import { isWeb } from '../../constants/constants';
import { Pressable, TextInput } from 'react-native';
import LockIcon from '../../assets/icons/lock';
import EyeIcon from '../../assets/icons/eye';
import EyeOffIcon from '../../assets/icons/eyeOff';

export default (props: InputProps) => {
  const { root, style } = getProps(props);
  const {
    disabled = false,
    invalid = false,
    isReadOnly = false,
    focusColor = colors.primary[500],
    variant = 'rounded',
    leftIcon,
    rightIcon,
    type,
    passwordEyeColor = colors.dark[900],
    passwordLockBg = 'gray',
    passwordLockColor = colors.dark[900],
  } = props;

  const [isFocus, setIsFocus] = useState(false);
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  const pointerEvents = disabled ? 'none' : 'auto';
  const opacity = disabled ? 0.7 : 1;
  const focusBorder = isWeb ? 3 : 2;
  const color = invalid
    ? colors.error[500]
    : isFocus
    ? focusColor
    : colors.primary[400];

  const handleFocus = () => setIsFocus(true);

  const handleBlur = () => setIsFocus(false);
  const handleEye = () => setIsSecureTextEntry((pre) => !pre);

  const dotedStyle =
    variant === 'underline'
      ? { borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0 }
      : {};

  return (
    <Box
      style={[
        {
          width: '100%',
          borderWidth: isFocus ? focusBorder : 1,
          borderRadius: variant === 'rounded' ? 50 : 5,
          borderColor: color,
          pointerEvents: pointerEvents,
          paddingHorizontal: isWeb ? 15 : 10,
          paddingVertical: 7,
          opacity: opacity,
        },
        dotedStyle,
        type === 'password' && {
          paddingLeft: 0,
          paddingTop: 0,
          overflow: 'hidden',
          paddingBottom: 0,
        },
        (type === 'password' || leftIcon || rightIcon) && {
          flexDirection: 'row',
          alignItems: 'center',
        },
      ]}
    >
      {type === 'password' && (
        <Box
          backgroundColor={passwordLockBg}
          paddingHorizontal={isWeb ? 12 : 10}
          paddingVertical={7}
        >
          <LockIcon outline={passwordLockColor} />
        </Box>
      )}
      {leftIcon}
      <TextInput
        style={[
          style,
          {
            color: colors.dark[900],
            fontSize: 15,
            fontWeight: '700',
            flex: 1,
            ...{
              outlineColor: 'transparent',
              outlineStyle: 'none',
              borderColor: 'transparent',
            },
          },
          type === 'password' && { paddingHorizontal: 7 },
        ]}
        {...root}
        readOnly={props.isReadOnly}
        onBlur={handleBlur}
        onFocus={handleFocus}
        editable={!isReadOnly}
        secureTextEntry={isSecureTextEntry}
      />
      {type === 'password' && (
        <Pressable onPress={handleEye}>
          {isSecureTextEntry ? (
            <EyeOffIcon outline={passwordEyeColor} />
          ) : (
            <EyeIcon outline={passwordEyeColor} />
          )}
        </Pressable>
      )}
      {rightIcon}
    </Box>
  );
};
