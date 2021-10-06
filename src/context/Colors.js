import { createContext, useState } from 'react';
import * as CSS from '../utils/vars';

       const ColorContext = createContext();

       const ColorProvider = ({ children }) => {
         
        const [ color, setColor ] = useState(CSS.blue);

        const handleColor = (color) => {
          if (color === 'red') setColor(CSS.red);
          if (color === 'purple') setColor(CSS.purple);
          if (color === 'yellow') setColor(CSS.yellow);
          if (color === 'orange') setColor(CSS.orange);
          if (color === 'blue') setColor(CSS.blue);
          if (color === 'green') setColor(CSS.green);
          if (color === 'default') setColor(CSS.orange)
        }

        const data = { color, handleColor } 

        return (
          <ColorContext.Provider value={data}> {children} </ColorContext.Provider>
        )

       }

       export { ColorProvider };
       export default ColorContext;