import { useState,  } from "react";
import { LenguageProvider } from "../src/context/Lenguage";
import { ColorProvider } from "./context/Colors";
import ReactPageScroller from "react-page-scroller";
import Nav from "../src/components/Navbar";
import Dots from "./components/DotsNav";
import UpButton from "./components/UpButton";
import Home from "../src/components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from '../src/components/Contact';
import { useEffect } from "react";

const App = () => {
  
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOnChange = (page) => {
    setCurrentPage(page);
  };     
  
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  useEffect(() => {console.log('Cambio!!', currentPage)}, [currentPage])
  
  return (
    <ColorProvider>
      <LenguageProvider>
        <Nav
          handleMenu={handleMenu}
          isOpen={isOpen}
          handlePageChange={(page) => setCurrentPage(page)}
        />
        <Dots
          isOpen={isOpen}
          handlePageChange={(page) => setCurrentPage(page)}
        />
        <UpButton
          currentPage={currentPage}
          handlePageChange={() => handleOnChange(0)}
        />

        <ReactPageScroller               
          customPageNumber={currentPage}
          pageOnChange={(page) => handleOnChange(page)}
          animationTimer={700}
          
          >        

        <Home currentPage={currentPage} />
        <About currentPage={currentPage} /> 
        <Work currentPage={currentPage}/>
        <Contact currentPage={currentPage}/>
        
        </ReactPageScroller>
      </LenguageProvider>
    </ColorProvider>
  );
};

export default App;
