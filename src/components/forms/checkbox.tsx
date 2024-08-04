import { useState } from 'react';
import type { ICheckBoxProps } from '../../types/components';
import Button from './button';
import Text from '../typography/text';


export default function (props: ICheckBoxProps) {
 const [checked , setChecked ] = useState(false);
 const { 
  activeBackground ='red',
  inActiveBackground = '#fff',
  activeBorder = 'red',
  inActiveBorder = '#000000',
  activeIcon = '#000',
  inActiveIcon = '#000',
  size = 20,
  rounded=5
 } = props;
    
 const handleCheck = () => { 
  setChecked(pre => {
   if(props?.onCheck)props.onCheck(!pre);
   return !pre;
  });
 }; 
    
 return (
  <Button
   justifyContent='center'
   alignItems='center'
   width={size}
   height={size}
   borderRadius={rounded}
   borderColor={ checked ? activeBorder : inActiveBorder}
   backgroundColor={ checked ? activeBackground : inActiveBackground}
   borderWidth={2}
   onPress={handleCheck}
   {...props}
  >
   <Text color={ checked ? activeIcon : inActiveIcon}>{checked ? 'A' : 'B'}</Text>
  </Button>
 ); 
}