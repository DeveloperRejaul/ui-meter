import type React from 'react';
import type { PressableProps, TextProps, TextStyle, ViewProps, ViewStyle } from 'react-native';


export interface IButtonProps extends PressableProps, ViewStyle{ }

export interface IBoxProps extends ViewProps, ViewStyle { }

export interface DividerProps extends IBoxProps { 
 orientation?: 'vertical' | 'horizontal';
 m?: number;
}

export interface ITextProps extends TextProps, TextStyle{
 className?: string
}

export interface ICheckBoxProps { 
 onCheck?: (value: boolean) => void
 activeBackground?: string
 inActiveBackground?: string
 activeBorder?: string
 inActiveBorder?: string
 invalidBorder?: string
 activeIconColor?: string
 inActiveIconColor?: string,
 size?: number,
 rounded?: number;
 label?: string
 labelStyle?: TextStyle
 containerStyle?: ViewStyle
 boxStyle?: ViewStyle,
 isDisabled?: boolean;
 isInvalid?: boolean;
}


export interface IRadioProps { 
 size?: number;
 inActiveColor?: string;
 activeColor?: string;
 inValidColor?: string;
 label?: string;
 isInvalid?: boolean;
 isDisabled?: boolean;
 onChange?: (value: string) => void;
 value: string;
}

export interface IRadioGroupProps extends IBoxProps { 
 children?: React.ReactNode;
 onChange: (value: string) => void;
}

export interface ISwitchProps { 
 size?: number
 onColor?: string
 offColor?: string
 ballColor?: string,
 onChange?: (value: boolean) => void
}