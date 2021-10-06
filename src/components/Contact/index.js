import { useContext, useState, useEffect } from "react";
import LenguageContext from "../../context/Lenguage";
import i18n from "../../i18n/translations.json";
import emailjs from "emailjs-com";
import {
  FormContainer,
  Input,
  TextArea,
  ContactContainer,
  GreetContainer,
  GreetTitle,
  GreetText,
  GreetFooter,
  GreetSocials,
  Overlay
} from "./styled";
import { motion, AnimatePresence } from "framer-motion";
import {   Button, SectionContainer, SectionTitle } from "../../utils/commonEllements";
import ColorContext from "../../context/Colors";
import Icon from "@mdi/react";
import {  
  mdiGithub,
  mdiInstagram,      
  mdiLinkedin,
  mdiSpotify
} from "@mdi/js";
import * as CSS from '../../utils/vars';

const Contact = ({ currentPage }) => {
  const { color } = useContext(ColorContext);
  const { lenguage } = useContext(LenguageContext);

  const [isVisible, setIsVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_abv7y7g",
        "template_ny68dfm",
        e.target,
        "user_gonx1K7q24xgwQb8XryXZ"
      )
      .then(
        (result) => {
          console.log("Datos enviados. ", result.text);
        },
        (error) => {
          console.error("Oh-no! Error :( ", error.text);
        }
      );

    e.target.reset();
  };

  useEffect(() => {
    if (currentPage === 3) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [currentPage]);

  return (
    <SectionContainer>
      
      <SectionTitle top={34.5}>
        <AnimatePresence initial={false}>
          {isVisible ? (
            <motion.h3
              initial={{ letterSpacing: "normal" }}
              animate={{ letterSpacing: "1.6rem" }}
              exit={{ letterSpacing: "normal" }}
            >
              {i18n[lenguage].navbar.contact}
            </motion.h3>
          ) : (
            <h3>{i18n[lenguage].navbar.contact}</h3>
          )}
        </AnimatePresence>
      </SectionTitle>
      
      <ContactContainer>
        <Overlay>
        <GreetContainer>
          <GreetTitle color={color}>{i18n[lenguage].contact.greets.title}</GreetTitle>
          <GreetText> {i18n[lenguage].contact.greets.text}</GreetText>          
          
          <GreetFooter>
             <span>{i18n[lenguage].contact.greets.follow}</span>
            <GreetSocials>
            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/guillermoesalazar'><Icon path={mdiLinkedin} size={1.3} color={CSS.white}/></a>
            <a target='_blank' rel="noreferrer" href='https://www.github.com/guillergithub'><Icon path={mdiGithub} size={1.3} color={CSS.white}/></a>
            <a target='_blank' rel="noreferrer" href='https://open.spotify.com/user/rxhbyo2u51y7xk0tbnta5ykp6'><Icon path={mdiSpotify} size={1.3} color={CSS.white}/></a>
            <a target='_blank' rel="noreferrer" href='https://www.instagram.com/guillershoot'><Icon path={mdiInstagram} size={1.3} color={CSS.white}/></a>
            </GreetSocials>
          </GreetFooter>
        </GreetContainer>

        
        <FormContainer onSubmit={sendEmail}>               
          <Input name="name" placeholder={i18n[lenguage].contact.name}/>
          <Input name="subject" placeholder={i18n[lenguage].contact.subject}/>
          <Input name="email" placeholder={i18n[lenguage].contact.email}/>
          <TextArea name="message" placeholder={i18n[lenguage].contact.message}/>
          <Button color={color} type="submit">
            {i18n[lenguage].contact.send}
          </Button>
        </FormContainer>
        </Overlay>
      </ContactContainer>      
    </SectionContainer>
  );
};

export default Contact;
