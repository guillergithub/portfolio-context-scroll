// import { motion } from "framer-motion";
import { SectionContainer } from "../../utils/commonEllements";

// import { useContext } from 'react';
import { AboutContainer } from "./styled";

const About = ({currentPage}) => {

  
  
  return (
    <SectionContainer>
      <AboutContainer>
      <h1>About</h1>
         {/* {currentPage === 1 ? (
        <SectionTitle>
          <motion.h3
            initial={{ letterSpacing: "normal" }}
            animate={{ letterSpacing: "2rem" }}
            transition={{delay: 1}}
          >            
            {i18n[lenguage].navbar.about}
          </motion.h3>
        </SectionTitle>
      ) : (
        <SectionTitle>
          <h3 style={{letterSpacing: "2rem"}}> {i18n[lenguage].navbar.about}</h3>
        </SectionTitle>
      )}

        <div>
          About page
        </div> */}


      </AboutContainer>
    </SectionContainer>
  )
};

export default About;
