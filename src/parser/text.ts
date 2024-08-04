/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { ITextProps } from '../types/components';
import { Platform } from 'react-native';
import { TEXT_STYLE_PROPS, TEXT_STYLE_ANDROID_PROPS, TEXT_STYLE_IOS_PROPS } from './textProps';
import {VIEW_STYLE_PROPS, VIEW_STYLE_FLEX_PROPS, VIEW_STYLE_SHADOW_PROPS, TRANSFORM_STYLE_PROPS } from './viewProps';

const MAIN_TEXT_STYLE_PROPS: string[] = [];

switch (Platform.OS) {
 case 'android':
  MAIN_TEXT_STYLE_PROPS.push(
   ...TEXT_STYLE_PROPS,
   ...TEXT_STYLE_ANDROID_PROPS,
   ...VIEW_STYLE_PROPS,
   ...VIEW_STYLE_FLEX_PROPS,
   ...VIEW_STYLE_SHADOW_PROPS,
   ...TRANSFORM_STYLE_PROPS
  );
  break;
 case 'ios':
  MAIN_TEXT_STYLE_PROPS.push(
   ...TEXT_STYLE_PROPS,
   ...TEXT_STYLE_IOS_PROPS,
   ...VIEW_STYLE_PROPS,
   ...VIEW_STYLE_FLEX_PROPS,
   ...VIEW_STYLE_SHADOW_PROPS,
   ...TRANSFORM_STYLE_PROPS
  );
  break;
    
 case 'web':
  MAIN_TEXT_STYLE_PROPS.push(
   ...TEXT_STYLE_PROPS,
   ...VIEW_STYLE_PROPS,
   ...VIEW_STYLE_FLEX_PROPS,
   ...VIEW_STYLE_SHADOW_PROPS,
   ...TRANSFORM_STYLE_PROPS
  );
  break;
 default:
  break;
}


export function getProps (props: ITextProps) { 
 const style = {};
 const root = {};
        
 const propsKeys: string [] = Object.keys(props);
 const propsLength: number = propsKeys.length;

 for (let i = 0; i < propsLength; i++) {
    
  //@ts-ignore
  if (MAIN_TEXT_STYLE_PROPS.includes(propsKeys[i])) {
   //@ts-ignore
   const element: string = propsKeys[i];
    
   //@ts-ignore
   style[element] = props[element];
  } else { 
   //@ts-ignore
   const element: string = propsKeys[i];
       
   //@ts-ignore
   root[element] = props[element];
  }
 }
 return {style, root};
} 