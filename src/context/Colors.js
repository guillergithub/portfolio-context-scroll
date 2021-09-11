import { createContext, useState } from 'react';
// import * as CSS from '../utils/vars';

       const ColorContext = createContext();

       const ColorProvider = ({ children }) => {
         
        const [ color, setColor ] = useState('orange');

        const handleColor = (color) => {
          if (color === 'gray') setColor('gray');
          if (color === 'purple') setColor('purple');
          if (color === 'yellow') setColor('yellow');
          if (color === 'orange') setColor('orange');
          if (color === 'blue') setColor('blue');
          if (color === 'green') setColor('green');
          if (color === 'default') setColor('orange')
        }

        const data = { color, handleColor } 

        return (
          <ColorContext.Provider value={data}> {children} </ColorContext.Provider>
        )

       }

       export { ColorProvider };
       export default ColorContext;