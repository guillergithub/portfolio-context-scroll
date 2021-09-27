import { useEffect, useState, useContext } from "react";
import LenguageContext from "../../context/Lenguage";
import { AnimatePresence, motion } from "framer-motion";
import { SectionContainer, SectionTitle } from "../../utils/commonEllements";
import {
  Container,
  Project1,
  Project2,
  Project3,
  Project4,
  ProjectContainer,
  ProjectsContainer,
  SliderTrack,
  TechnologiesContainer,
  WorkContainer,
} from "./styled";
import i18n from "../../i18n/translations.json";
import { WorkImages } from "../../utils/images";

const Work = ({ currentPage }) => {
  const { lenguage } = useContext(LenguageContext);
  const [isVisible, setIsVisible] = useState(false);

  const logos = [
    WorkImages.bootstrap,
    WorkImages.express,
    WorkImages.node,
    WorkImages.styledComponents,
    WorkImages.jest,
    WorkImages.react,
    WorkImages.flStudio,
    WorkImages.python,
    WorkImages.javascript,
  ];

  useEffect(() => {
    if (currentPage === 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [currentPage]);

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

        <ProjectsContainer>
        {isVisible 
          && 
          <>
          <ProjectContainer align={"end"}>
            <Project1
              as={motion.div}
              animate={{ y: 0 }}
              initial={{ y: "-1000px" }}
              transition={{ delay: 0 }}
            >
              1
            </Project1>
            <Project2
              as={motion.div}
              animate={{ x: 0 }}
              initial={{ x: "500px" }}
              transition={{ delay: 0 }}
            >
              2
            </Project2>
          </ProjectContainer>
          <ProjectContainer align={"start"}>
            <Project3
              as={motion.div}
              animate={{ y: 0 }}
              initial={{ y: "1000px" }}
              transition={{ delay: 0 }}
            >
              3
            </Project3>
            <Project4
              as={motion.div}
              animate={{ x: 0 }}
              initial={{ x: "-500px" }}
              transition={{ delay: 0 }}
            >
              4
            </Project4>
          </ProjectContainer>
          </>
      }
        </ProjectsContainer>

        <TechnologiesContainer>
          {" "}
          {/* SLIDER */}
          <SliderTrack>
            {logos.map((logo) => (
              <div>
                {" "}
                <img src={logo} alt="logo-tech" />
              </div>
            ))}

            {/* =============== */}

            {logos.map((logo) => (
              <img src={logo} alt="tech-logo" />
            ))}
          </SliderTrack>
        </TechnologiesContainer>
      </WorkContainer>
    </SectionContainer>
  );
};

export default Work;
