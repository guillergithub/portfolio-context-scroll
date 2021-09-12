import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LenguageContext from "../../context/Lenguage";
import i18n from "../../i18n/translations.json";
import { SectionContainer, SectionTitle } from "../../utils/commonEllements";
import { AboutContainer } from "./styled";

const About = ({ currentPage }) => {
  const { lenguage } = useContext(LenguageContext);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (currentPage === 1) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [currentPage]);

  return (
    <SectionContainer>
      <AboutContainer>
        <SectionTitle top={14.5} left={19}>
          <AnimatePresence initial={false}>
            {isVisible ? (
              <motion.h3
                initial={{ letterSpacing: "normal" }}
                animate={{ letterSpacing: "1.6rem" }}
                exit={{ letterSpacing: "normal" }}
              >
                {i18n[lenguage].navbar.about}
              </motion.h3>
            ) : <h3>{i18n[lenguage].navbar.about}</h3>}
            
          </AnimatePresence>
        </SectionTitle>
      </AboutContainer>
    </SectionContainer>
  );
};

export default About;
