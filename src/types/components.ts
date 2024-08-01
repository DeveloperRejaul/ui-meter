import type { TextProps, TextStyle, ViewProps, ViewStyle } from 'react-native';

export interface INativeWindProps { 
 className?: string
}

export interface IBoxProps extends ViewProps, ViewStyle, INativeWindProps { }

export interface DividerProps extends IBoxProps { 
 orientation?: 'vertical' | 'horizontal';
 m?: number;
}

export interface ITextProps extends TextProps, TextStyle, INativeWindProps{ }