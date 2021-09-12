import { useEffect, useState, useContext } from "react";
import LenguageContext from "../../context/Lenguage";
import { AnimatePresence, motion } from "framer-motion";
import { SectionContainer, SectionTitle } from "../../utils/commonEllements";
import { BackgroundContainer, WorkContainer } from "./styled";
import i18n from "../../i18n/translations.json";
import EFMImage from "../../assets/images/efm.PNG"

const Work = ({ currentPage }) => {

  const { lenguage } = useContext(LenguageContext);

  const [ background, setBackground ] = useState('');
  const [ isVisible, setIsVisible ] = useState(false);
  
  const experience = ["Pokedex", "Emprende Facil Mujer", "Portafolio"];

  useEffect(() => {
    if (currentPage === 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [currentPage]);

  const handleBackground = (e, value) => {
    let bg = e._targetInst.memoizedProps.value.split(' ')[0].toLowerCase();
    console.log(bg);
    if (bg === 'emprende') {
      setBackground(EFMImage)
    } else {
      setBackground('')
    }
  }
  

  return (
    <SectionContainer>
      <WorkContainer>
        <SectionTitle top={24.5}>
          <AnimatePresence initial={false}>
            {isVisible ? (
              <motion.h3
                initial={{ letterSpacing: "normal" }}
                animate={{ letterSpacing: "1.2rem" }}
                exit={{ letterSpacing: "normal" }}
              >
                {i18n[lenguage].navbar.work}
              </motion.h3>
            ) : (
              <h3>{i18n[lenguage].navbar.work}</h3>
            )}
          </AnimatePresence>
        </SectionTitle>
      
        
        <BackgroundContainer bgImg={background}>
          <ul>
            {experience.map((elem, index) => (
                <li key={index} value={elem} onMouseEnter={(e, value) => handleBackground(e, value)}>
                  {`0${index+1}. ${elem}`}
                </li>              
                ))}
          </ul>

        </BackgroundContainer>
      </WorkContainer>
    </SectionContainer>
  );
};

export default Work;
