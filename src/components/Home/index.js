import { useContext } from "react";
import LenguageContext from "../../context/Lenguage";
import i18n from "../../i18n/translations.json";
// import { AnimatePresence, motion } from "framer-motion";
import { SectionContainer,  } from "../../utils/commonEllements";
import ColorContext from "../../context/Colors";
import { HomeContainer,  } from "./styled";

const Home = ({ currentPage }) => {
  const { lenguage } = useContext(LenguageContext);
  const { color } = useContext(ColorContext);

  return (
    <SectionContainer>
      <HomeContainer>       
        <h1 style={{ color: color }}>{i18n[lenguage].home.mainWelcome}</h1>
      </HomeContainer>
    </SectionContainer>
  );
};

export default Home;
