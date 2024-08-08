import { createContext, useState } from 'react';
import type { IRadioGroupProps } from '../../types/components';
import Box from '../layout/box';

interface IContext extends IRadioGroupProps {
 setActiveValue: React.Dispatch<React.SetStateAction<string>>;
 activeValue: string
}

export const Context = createContext<IContext>({} as IContext);

export default (props: IRadioGroupProps) => {
 const [activeValue, setActiveValue] = useState('');
    
 return (
  <Context.Provider value={{ activeValue, setActiveValue, onChange: props.onChange }}>
   <Box {...props}>
    {props.children }
   </Box>
  </Context.Provider>
 );
};