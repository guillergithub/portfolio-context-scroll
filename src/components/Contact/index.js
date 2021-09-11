import { useContext } from "react";
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
} from "./styled";
import { motion } from "framer-motion";
import { SectionContainer, SectionTitle } from "../../utils/commonEllements";
import ColorContext from "../../context/Colors";

const Contact = ({ currentPage }) => {

  const { color } = useContext(ColorContext);
  const { lenguage } = useContext(LenguageContext);

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
  
  return (
    <SectionContainer>
      <ContactContainer>
      <SectionTitle>
        <motion.h3
          initial={{ letterSpacing: "normal" }}
          animate={{ letterSpacing: "2rem" }}
          transition={{ delay: 3 }}
        >
          {i18n[lenguage].navbar.contact}
        </motion.h3>
      </SectionTitle>
        <FormContainer onSubmit={sendEmail}>
          <Label color={color}>{i18n[lenguage].contact.name}</Label>
          <Input name="name" />
          <Label color={color}>{i18n[lenguage].contact.subject}</Label>
          <Input name="subject" />
          <Label color={color}>{i18n[lenguage].contact.email}</Label>
          <Input name="email" />
          <Label color={color}>{i18n[lenguage].contact.message}</Label>
          <TextArea name="message" />
          <Button color={color} type="submit">{i18n[lenguage].contact.send}</Button>
        </FormContainer>

        {/* <h1>Contact</h1> */}
        {/* ERROR DESAPARECE EL FORMULARIO CON ESTA LOGICA */}
        {/* {currentPage === 2 ? (        
        <SectionTitle>          
          <motion.h3
            initial={{ letterSpacing: "normal" }}
            animate={{ letterSpacing: "2rem" }}
            transition={{delay: 1}}
          >            
            {i18n[lenguage].navbar.contact}
          </motion.h3>
        </SectionTitle>
      ) : ( */}
        {/* <SectionTitle>          
          <h3 style={{letterSpacing: "2rem"}}> {i18n[lenguage].navbar.contact}</h3>
        </SectionTitle> */}
        {/* )} */}
      </ContactContainer>
    </SectionContainer>
  );
};

export default Contact;
