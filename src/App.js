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

const App = () => {
  
  const [currentPage, setCurrentPage] = useState();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOnChange = (page) => {
    setCurrentPage(page);
    console.log('handleOnChange (page): ', currentPage)
  };     
  
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // const handleOnChangeLimit = (page) => {
  //   setCurrentPage(0);
  // }; 
  

  return (
    <ColorProvider>
      <LenguageProvider>
        <Nav
          handleMenu={handleMenu}
          isOpen={isOpen}
          handlePageChange={(page) => handleOnChange(page)}
        />
        <Dots
          isOpen={isOpen}
          handlePageChange={(page) => handleOnChange(page)}
        />
        <UpButton
          currentPage={currentPage}
          handlePageChange={() => handleOnChange(0)}
        />

        <ReactPageScroller               
          customPageNumber={currentPage}
          onBeforePageScroll={() => handleOnChange()}
          animationTimer={700}
          // handleScrollUnavailable={handleOnChangeLimit}
          >        

        <Home />
        <About currentPage={currentPage} /> 
        <Work />
        <Contact />
        
        </ReactPageScroller>
      </LenguageProvider>
    </ColorProvider>
  );
};

export default App;
