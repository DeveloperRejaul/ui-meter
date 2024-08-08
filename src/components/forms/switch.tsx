import { Pressable } from 'react-native';
import { colors } from '../../theme/colors';
import Box from '../layout/box';

import type { ISwitchProps } from '../../types/components';
import { useState } from 'react';

export default (props: ISwitchProps) => {
 const {
  size = 60,
  offColor = colors.light[400],
  onColor = colors.light[900],
  ballColor = colors.light[100],
  onChange
 } = props;
 const [isON, setON] = useState(false);
    
 const CON_WIDTH = size;
 const CON_HEIGHT = CON_WIDTH/1.7;
 const CON_RADIUS = CON_WIDTH/2;
 
 const BOX_SIZE = CON_HEIGHT/1.2;
 const BOX_RADIOS = BOX_SIZE/2;
    
 return (
  <Pressable
   onPress={() => { 
    setON((pre) => {
     if(onChange) onChange(!pre);
     return !pre;
    });       
   }
   }
   style={{
    width: CON_WIDTH,
    height: CON_HEIGHT,
    backgroundColor: isON ? onColor : offColor,
    borderRadius: CON_RADIUS,
    justifyContent:'center'
   }}
  >
   <Box
    width={BOX_SIZE}
    height={BOX_SIZE}
    borderRadius={BOX_RADIOS}
    backgroundColor={ballColor}
    position='absolute'
    left={ isON ? (CON_WIDTH -BOX_SIZE ) : 0}
   />
  </Pressable>
 );
};