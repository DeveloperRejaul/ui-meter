import { useState } from 'react';
import type { ICheckBoxProps } from '../../types/components';
import Button from './button';
import Text from '../typography/text';
import HStack from '../layout/HStack';
import CheckIcon from '../../assets/icons/check';
import { colors } from '../../theme/colors';



export default (props: ICheckBoxProps) =>{
 const [checked , setChecked ] = useState(false);
 const { 
  activeBackground =colors.success[600],
  inActiveBackground = colors.light[100],
  activeBorder = colors.success[600],
  inActiveBorder = colors.dark[600],
  invalidBorder = colors.error[600],
  activeIconColor = colors.dark[600],
  inActiveIconColor = colors.light[100],
  
  size = 25,
  rounded=5
 } = props;
    
 const handleCheck = () => { 
  setChecked(pre => {
   if(props?.onCheck)props.onCheck(!pre);
   return !pre;
  });
 }; 
    
 return (
  <HStack columnGap={5} justifyContent='center' alignItems='center' {...props.containerStyle}>
   <Button
    opacity={props.isDisabled ? 0.5 : 1}
    justifyContent='center'
    alignItems='center'
    width={size}
    height={size}
    borderRadius={rounded}
    borderColor={ props.isInvalid ? invalidBorder : checked ? activeBorder : inActiveBorder}
    backgroundColor={ checked ? activeBackground : inActiveBackground}
    borderWidth={2}
    onPress={props.isDisabled ? () => { } : handleCheck}
    {...props.boxStyle}
   >
    <CheckIcon fill={checked ? activeIconColor : inActiveIconColor} size={15} />
   </Button>
   <Text opacity={props.isDisabled ? 0.5 : 1} fontWeight={'bold'} fontSize={15} color={ colors.dark[600]} {...props.labelStyle}>{props.label}</Text>
  </HStack>
 ); 
};