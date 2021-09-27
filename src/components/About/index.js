import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LenguageContext from "../../context/Lenguage";
import ColorContext from "../../context/Colors";
import i18n from "../../i18n/translations.json";
import {
  Button,
  ColorFont,
  SectionContainer,
  SectionTitle,
} from "../../utils/commonEllements";
import {
  AboutContainer,
  TopContainer,
  Container,
  HobbiesContainer,
  InfoContainer,
  StudiesContainer,
  Hobbie,
  LineContainer,
  FlexColumn,
  AboutText,
  InfoWrapper,
  StudiesWrapper,
  FlexRow,
  ButtonContainer,
} from "./styled";
import { AboutImages } from "../../utils/images";
import bgGray from "../../assets/images/bg-gray.jpg";

const About = ({ currentPage }) => {
  const { lenguage } = useContext(LenguageContext);
  const { color } = useContext(ColorContext);

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
      <AboutContainer bgImg={bgGray}>
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
            ) : (
              <h3>{i18n[lenguage].navbar.about}</h3>
            )}
          </AnimatePresence>
        </SectionTitle>

        <TopContainer>
          <InfoContainer>
            <LineContainer isLeft={false} color={color} className="line">
              <h5>
                <ColorFont color={color}>I'm</ColorFont>{" "}
                <ColorFont color={color}>G</ColorFont>uillermo{" "}
                <ColorFont color={color}>S</ColorFont>alazar
              </h5>
              <AboutText>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quibusdam impedit numquam iusto magnam aliquid porro ex
                </p>
              </AboutText>
              <InfoWrapper>
                <FlexColumn>
                  <p>Age: </p>
                  <span>30</span>
                </FlexColumn>
                <FlexColumn>
                  <p>Localidad: </p>
                  <span>Medellin</span>
                </FlexColumn>                
              </InfoWrapper>

              <ButtonContainer>
                {lenguage === "es" ? (
                  <a href="https://www.dropbox.com/s/t47sbcph8j82vds/Guillermo%20Salazar%20CV%202021.pdf?dl=1">
                    <Button color={color}>Download my CV on PDF</Button>
                  </a>
                ) : (
                  <a href="https://www.dropbox.com/s/86vtmd5voydqo1h/English%20CV.pdf?dl=1">
                    <Button color={color}>Download my CV on PDF</Button>
                  </a>
                )}
              </ButtonContainer>
              
            </LineContainer>
            
          </InfoContainer>
          <StudiesContainer>
            <LineContainer
              isLeft={true}
              radiusLeft={true}
              color={color}
              className="line"
            >
              <h5>Studies</h5>
              <StudiesWrapper>
                <FlexColumn>
                  <p>Academlo: </p>
                  <span>
                    Ciencias de la computacion desarrollador Full-Stack
                  </span>
                </FlexColumn>
                <FlexRow>
                  <FlexColumn>
                    <p>University: </p>
                    <span>Ingenieria Electronica</span>
                  </FlexColumn>
                  <FlexColumn>
                    <p>English level: </p>
                    <span>Have an conversation</span>
                  </FlexColumn>
                </FlexRow>
              </StudiesWrapper>
            </LineContainer>
          </StudiesContainer>
        </TopContainer>

        <HobbiesContainer>
          {/* <HobbieTitle style={{opacity: 0.3}}>
              <h1>Hobbies</h1>
              </HobbieTitle> */}

          <Container>
            <Hobbie>
              <div>
                <img src={AboutImages.coding} alt="Code" />
              </div>
              <p>Code</p>
            </Hobbie>

            <Hobbie>
              <div>
                <img src={AboutImages.composing} alt="Music" />
              </div>
              <p>Music</p>
            </Hobbie>
          </Container>

          <Container>
            <Hobbie>
              <div>
                <img src={AboutImages.running} alt="Running" />
              </div>
              <p>Running</p>
            </Hobbie>

            <Hobbie>
              <div>
                <img src={AboutImages.chef} alt="Cook" />
              </div>
              <p>Cook</p>
            </Hobbie>
          </Container>
        </HobbiesContainer>
      </AboutContainer>
    </SectionContainer>
  );
};

export default About;
