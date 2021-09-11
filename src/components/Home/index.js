import { useContext } from "react";
import { HomeContainer } from "./styled";
import LenguageContext from "../../context/Lenguage";
import i18n from "../../i18n/translations.json";
import { SectionContainer } from "../../utils/commonEllements";
import ColorContext from "../../context/Colors";


const Home = () => {

  const { lenguage } = useContext(LenguageContext);  
  const { color } = useContext(ColorContext);
  
  return (
    
    <SectionContainer>      
      <HomeContainer>
      <h1 style={{color: color}}>{ i18n[lenguage].home.mainWelcome}</h1>
      </HomeContainer>
    </SectionContainer>
    
  )
}

export default Home
