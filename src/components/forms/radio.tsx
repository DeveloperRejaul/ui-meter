import { useContext } from 'react';
import { colors } from '../../theme/colors';
import {Pressable } from 'react-native';
import Box from '../layout/box';
import type { IRadioProps } from '../../types/components';
import Text from '../typography/text';
import HStack from '../layout/HStack';
import { Context } from './radioGroup';

export default (props: IRadioProps) => {
 const {
  size = 30,
  inActiveColor = colors.dark[400],
  activeColor = colors.success[500],
  inValidColor = colors.error[600]
 } = props;
    
 const { activeValue, setActiveValue, onChange} = useContext(Context); 

 const BOX_SIZE = size * 0.6;
 const BOX_RADIUS = BOX_SIZE / 2;
 const CONTAINER_RADIUS = size * 0.5;
 const BORDER_WIDTH = size * 0.1;
 const DISABLE_OPACITY = 0.5; 
 const isActive = activeValue === props.value;
   
    
 return (
  <HStack
   justifyContent='center'
   alignItems='center'
   columnGap={7}
   opacity={props.isDisabled ? DISABLE_OPACITY : 1}
  >
   <Pressable
    onPress={props.isDisabled ?
     () => { } :
     () => {
      setActiveValue(props.value);
      onChange(props.value);
      props?.onChange?.(props.value);
     }
    }
    style={{
     borderWidth:BORDER_WIDTH,
     borderColor:props.isInvalid ? inValidColor : isActive ? activeColor: inActiveColor,
     width:size,
     height:size,
     borderRadius: CONTAINER_RADIUS,
     justifyContent: 'center',
     alignItems: 'center',
    }}
   >
    <Box
     width={BOX_SIZE}
     height={BOX_SIZE}
     borderRadius={BOX_RADIUS}
     backgroundColor={isActive ? activeColor :'transparent'}
    />
   </Pressable>
   <Text fontWeight={'bold'} fontSize={15} color={colors.dark[500]}>{props.label}</Text>
  </HStack>
 );
};