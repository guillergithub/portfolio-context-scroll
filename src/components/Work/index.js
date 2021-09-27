import { useEffect, useState, useContext } from "react";
import LenguageContext from "../../context/Lenguage";
import { AnimatePresence, motion } from "framer-motion";
import { SectionContainer, SectionTitle } from "../../utils/commonEllements";
import {
  Project1,
  Project2,
  Project3,
  Project4,
  ProjectWrapper,
  ProjectsContainer,
  ProjectBg,
  ProjectDescriptionContainer,
  SliderTrack,
  TechnologiesContainer,
  WorkContainer,
} from "./styled";
import i18n from "../../i18n/translations.json";
import { WorkImages } from "../../utils/images";

const Work = ({ currentPage }) => {
  const { lenguage } = useContext(LenguageContext);
  const [isVisible, setIsVisible] = useState(false);
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);
  const [isHover4, setIsHover4] = useState(false);

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
          {isVisible && (
            <>
              <ProjectWrapper align={"end"}>
                <Project1
                  as={motion.div}
                  animate={{ y: 0 }}
                  initial={{ y: "-1000px" }}
                  transition={{ delay: 0 }}
                  onMouseEnter={() => setIsHover1(!isHover1)}
                  onMouseLeave={() => setIsHover1(!isHover1)}
                >
                  <ProjectBg bgImg={WorkImages.efm}>
                    {isHover1 && (
                      <ProjectDescriptionContainer>
                        <p>Emprende Facil Mujer</p>
                        <span>Frontend Developer</span>
                      </ProjectDescriptionContainer>
                    )}
                    
                  </ProjectBg>
                </Project1>
                <Project2
                  as={motion.div}
                  animate={{ x: 0 }}
                  initial={{ x: "500px" }}
                  transition={{ delay: 0 }}
                  onMouseEnter={() => setIsHover2(!isHover2)}
                  onMouseLeave={() => setIsHover2(!isHover2)}
                >
                  <ProjectBg bgImg={WorkImages.efm}>
                    {isHover2 && (
                      <ProjectDescriptionContainer>
                        2
                      </ProjectDescriptionContainer>
                    )}
                    
                  </ProjectBg>
                </Project2>
              </ProjectWrapper>
              <ProjectWrapper align={"start"}>
                <Project3
                  as={motion.div}
                  animate={{ y: 0 }}
                  initial={{ y: "1000px" }}
                  transition={{ delay: 0 }}
                  onMouseEnter={() => setIsHover3(!isHover3)}
                  onMouseLeave={() => setIsHover3(!isHover3)}
                >
                  <ProjectBg bgImg={WorkImages.efm}>
                    {isHover3 && (
                      <ProjectDescriptionContainer>
                        3
                      </ProjectDescriptionContainer>
                    )}
                    
                  </ProjectBg>
                </Project3>
                <Project4
                  as={motion.div}
                  animate={{ x: 0 }}
                  initial={{ x: "-500px" }}
                  transition={{ delay: 0 }}
                  onMouseEnter={() => setIsHover4(!isHover4)}
                  onMouseLeave={() => setIsHover4(!isHover4)}
                >
                  <ProjectBg bgImg={WorkImages.efm}>
                    {isHover4 && (
                      <ProjectDescriptionContainer>
                        4
                      </ProjectDescriptionContainer>
                    )}
                    
                  </ProjectBg>{" "}
                </Project4>
              </ProjectWrapper>
            </>
          )}
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
