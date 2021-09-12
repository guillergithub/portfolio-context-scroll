import { useContext, useState, useEffect } from "react";
import LenguageContext from "../../context/Lenguage";
import i18n from "../../i18n/translations.json";
import emailjs from "emailjs-com";
import {
  FormContainer,
  Input,
  Label,
  TextArea,
  Button,
  ContactContainer,
  GreetContainer,
  GreetTitle,
  GreetText,
  GreetFooter,
  GreetSocials,
  Overlay
} from "./styled";
import { motion, AnimatePresence } from "framer-motion";
import { SectionContainer, SectionTitle } from "../../utils/commonEllements";
import ColorContext from "../../context/Colors";
import Icon from "@mdi/react";
import {  
  mdiGithub,
  mdiInstagram,    
  mdiYoutube,
  mdiLinkedin
} from "@mdi/js";

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
          <GreetText> <span>{i18n[lenguage].contact.hireMe}</span></GreetText>          
          
          <GreetFooter>
             <span>{i18n[lenguage].contact.greets.follow}</span>
            <GreetSocials>
            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com'><Icon path={mdiLinkedin} size={1.3}/></a>
            <a target='_blank' rel="noreferrer" href='https://www.github.com'><Icon path={mdiGithub} size={1.3}/></a>
            <a target='_blank' rel="noreferrer" href='https://www.youtube.com'><Icon path={mdiYoutube} size={1.3}/></a>
            <a target='_blank' rel="noreferrer" href='https://www.instagram.com'><Icon path={mdiInstagram} size={1.3}/></a>
            </GreetSocials>
              

          </GreetFooter>
        </GreetContainer>

        <FormContainer onSubmit={sendEmail}>
          <Label >{i18n[lenguage].contact.name}</Label>
          <Input name="name" />
          <Label >{i18n[lenguage].contact.subject}</Label>
          <Input name="subject" />
          <Label >{i18n[lenguage].contact.email}</Label>
          <Input name="email" />
          <Label >{i18n[lenguage].contact.message}</Label>
          <TextArea name="message" />
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
