import { useContext } from "react";
import LenguageContext from "../../context/Lenguage";
import i18n from "../../i18n/translations.json";
import { SectionContainer } from "../../utils/commonEllements";
import ColorContext from "../../context/Colors";
import { HomeContainer, GreetingContainer, SocialsContainer, Greetings, HelloWorld, DesignContainer } from "./styled";
import bgGray from "../../assets/images/bg-gray.jpg";
import Icon from "@mdi/react";
import { mdiGithub, mdiInstagram, mdiTwitter, mdiYoutube } from "@mdi/js";
import { motion } from "framer-motion";
// import { AnimatePresence, motion } from "framer-motion";

const Home = ({ currentPage }) => {
  const { lenguage } = useContext(LenguageContext);
  const { color } = useContext(ColorContext);

  return (
    <SectionContainer>
      <HomeContainer bgImg={bgGray}> {/* RESPONSIVE BOX MEDIA QUERYS */}
        <GreetingContainer> 

          <Greetings className="greetings">            
            <HelloWorld style={{ color }}>{i18n[lenguage].home.mainWelcome}</HelloWorld>
            <p>Me llamo</p>
            <h3 style={{ color }}>Guillermo </h3>
            <h3 style={{ color }}>Salazar </h3>
            <span>soy Frontend Developer</span>
          </Greetings>

          <SocialsContainer
            as={motion.div}
            initial={{ opacity: "0", y: "50" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            >
            <Icon path={mdiTwitter} size={1.1} color={CSS.purple} />
            <Icon path={mdiGithub} size={1.1} color={CSS.white} />
            <Icon path={mdiYoutube} size={1.1} color={CSS.white} />
            <Icon path={mdiInstagram} size={1.1} color={CSS.white} />
          </SocialsContainer>
        
        </GreetingContainer>

        <DesignContainer>Otra info</DesignContainer>
      </HomeContainer>
    </SectionContainer>
  );
};

export default Home;
