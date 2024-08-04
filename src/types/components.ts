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
 activeIcon?: string
 inActiveIcon?: string,
 size?: number,
 rounded?: number
}