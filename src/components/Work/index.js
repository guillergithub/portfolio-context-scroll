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

const Work = ({ currentPage, handlePageChange }) => {
  const { lenguage } = useContext(LenguageContext);
  const [isVisible, setIsVisible] = useState(false);
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);
  const [isHover4, setIsHover4] = useState(false);

  const logos = [
    { img: WorkImages.bootstrap, name: "bootstrap" },
    { img: WorkImages.express, name: "express" },
    { img: WorkImages.node, name: "node" },
    { img: WorkImages.styledComponents, name: "styled-components" },
    { img: WorkImages.jest, name: "jest" },
    { img: WorkImages.react, name: "react" },
    { img: WorkImages.flStudio, name: "fl-studio" },
    { img: WorkImages.python, name: "python" },
    { img: WorkImages.javascript, name: "javascript" },
    { img: WorkImages.express, name: "express" },
    { img: WorkImages.node, name: "node" },
    // { img: WorkImages.styledComponents, name: "styled-components" },
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
          {isVisible && WorkImages && (
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
                      <a
                        href="https://efm.emprendefacilmujer.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ProjectDescriptionContainer className="child">
                          <p>Emprende Fácil Mujer </p>
                          <span>React.js {i18n[lenguage].config.building}</span>
                        </ProjectDescriptionContainer>
                      </a>
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
                  <ProjectBg bgImg={WorkImages.portfolio}>
                      {isHover2 && (
                        <ProjectDescriptionContainer className="child" onClick={() => handlePageChange(0)}>
                          <p>My Portfolio</p>
                          <span>React.js</span>
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
                  <a
                    href="https://quiz-it-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ProjectBg bgImg={WorkImages.quiz}>
                      {isHover3 && (
                        <ProjectDescriptionContainer className="child">
                          <p>Quiz-it</p>
                          <span>Vanilla JS</span>
                        </ProjectDescriptionContainer>
                      )}
                    </ProjectBg>
                  </a>
                </Project3>
                <a
                  href="http://pocket-dex.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Project4
                    as={motion.div}
                    animate={{ x: 0 }}
                    initial={{ x: "-500px" }}
                    transition={{ delay: 0 }}
                    onMouseEnter={() => setIsHover4(!isHover4)}
                    onMouseLeave={() => setIsHover4(!isHover4)}
                  >
                    <ProjectBg bgImg={WorkImages.pocketdex}>
                      {isHover4 && (
                        <ProjectDescriptionContainer className="child">
                          <p>Pocket-dex</p>
                          <span>React.js</span>
                        </ProjectDescriptionContainer>
                      )}
                    </ProjectBg>{" "}
                  </Project4>
                </a>
              </ProjectWrapper>
            </>
          )}
        </ProjectsContainer>

        <TechnologiesContainer>
          {" "}
          {/* SLIDER */}
          <SliderTrack>
            {logos.map((logo, i) => (
              <div key={i}>
                {" "}
                <img src={logo.img} alt={logo.name + "-logo"} key={logo.name} />
              </div>
            ))}

            {/* =============== */}

            {logos.map((logo, i) => (
              <img src={logo.img} alt="tech-logo" key={i} />
            ))}
          </SliderTrack>
        </TechnologiesContainer>
      </WorkContainer>
    </SectionContainer>
  );
};

export default Work;
