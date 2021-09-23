import { useContext } from "react";
import { motion } from "framer-motion";
import LenguageContext from "../../context/Lenguage";
import ColorContext from "../../context/Colors";
import {
  IconContainer,
  Menu,
  MenuContainer,
  MenuItem,
  MenuList,
  NavContainer,
  FooterContainer,
  SocialsContainer,
  ButtonsContainer,
  PopHeader,
  PopBody,
  ColorOption,
  ColorOptionsContainer,
  ArrowUp,
  MenuLink,
} from "./styled";
import Icon from "@mdi/react";
import {
  mdiClose,
  mdiGithub,
  mdiInstagram,
  mdiMenu,
  mdiPalette,
  mdiTranslate,
  mdiTwitter,
  mdiYoutube,
} from "@mdi/js";
import * as CSS from "../../utils/vars";
import i18n from "../../i18n/translations.json";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const Nav = ({ handleMenu, isOpen, handlePageChange }) => {
  const { handleLenguage, lenguage } = useContext(LenguageContext);
  const { color, handleColor } = useContext(ColorContext);

  const popover = (
    <Popover id="popover-basic" style={{zIndex: 9999}}>
      <ArrowUp />
      <PopHeader>
        <Popover.Header as="h3">Color options</Popover.Header>
      </PopHeader>
      <PopBody>
        <Popover.Body>
          <ColorOptionsContainer>
            <ColorOption color={CSS.gray} onClick={() => handleColor("gray")} />
            <ColorOption color={CSS.blue} onClick={() => handleColor("blue")} />
            <ColorOption color={CSS.green} onClick={() => handleColor("green")} />
            <ColorOption color={CSS.yellow} onClick={() => handleColor("yellow")} />
            <ColorOption color={CSS.orange} onClick={() => handleColor("orange")} />
            <ColorOption color={CSS.purple} onClick={() => handleColor("purple")} />
          </ColorOptionsContainer>
        </Popover.Body>
      </PopBody>
    </Popover>
  );

  return (
    <NavContainer>
      <IconContainer mt={20} onClick={(e) => handleMenu}>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <Icon
            trigger="click"
            path={mdiPalette}
            color={CSS.white}
            size={1.3}
            onClick={handleColor(() => handleColor("green"))}
            className="margin-right"
            data-toggle="popover"
          />
        </OverlayTrigger>
        <Icon
          path={mdiTranslate}
          color={CSS.white}
          size={1.3}
          onClick={handleLenguage}
          className="margin-right"
        />
        <Icon path={mdiMenu} color={CSS.white} size={1.3} onClick={handleMenu} />
      </IconContainer>

      <MenuContainer>
        <Menu $transform={isOpen}>
          <ButtonsContainer mt={33}>
          <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <Icon
            trigger="click"
            path={mdiPalette}
            color={CSS.white}
            size={1.3}
            onClick={handleColor(() => handleColor("green"))}
            className="margin-right"
            data-toggle="popover"
          />
        </OverlayTrigger>
            <Icon
              path={mdiTranslate}
              color={CSS.white}
              size={1.3}
              onClick={handleLenguage}
            />
            <Icon
              path={mdiClose}
              color={CSS.white}
              size={1.3}
              onClick={handleMenu}
              as={motion.svg}
              animate={{ x: 0 }}
              initial={{ x: "-100px" }}
              transition={{ delay: 0.4 }}
            />
          </ButtonsContainer>

          {isOpen && (
            <MenuList
              color={color}
              as={motion.ul}
              initial={{ opacity: "0", y: "-50" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <MenuItem
                onClick={() => {
                  handlePageChange(0);
                  handleMenu();
                  console.log(color);
                }}
              >
                <MenuLink color={color}>{i18n[lenguage].navbar.home}</MenuLink>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handlePageChange(1);
                  handleMenu();
                }}
              >
                <MenuLink color={color}>{i18n[lenguage].navbar.about}</MenuLink>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handlePageChange(2);
                  handleMenu();
                }}
              >
                <MenuLink color={color}>{i18n[lenguage].navbar.work}</MenuLink>
              </MenuItem>
              
              <MenuItem
                onClick={() => {
                  handlePageChange(3);
                  handleMenu();
                }}
              ><MenuLink color={color}>
              {i18n[lenguage].navbar.contact}
            </MenuLink>
            </MenuItem>
                
              {/* 
              </MenuItem> */}

              {/* <MenuItem
                onClick={() => {
                  handlePageChange(4);
                  handleMenu();
                }}
              >
                <MenuLink color={color}>{i18n[lenguage].navbar.contact}</MenuLink>
              </MenuItem> */}
            </MenuList>
          )}

          <FooterContainer>
            {isOpen && (
              <>
                <SocialsContainer
                  as={motion.div}
                  initial={{ opacity: "0", x: "-50" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Icon path={mdiTwitter} size={1.1} color={CSS.white} />
                  <Icon path={mdiGithub} size={1.1} color={CSS.white} />
                  <Icon path={mdiYoutube} size={1.1} color={CSS.white} />
                  <Icon path={mdiInstagram} size={1.1} color={CSS.white} />
                </SocialsContainer>

                <motion.span
                  initial={{ opacity: "0", x: "50" }}
                  animate={{ opacity: 1, x: 0}}
                  transition={{ delay: 0.4 }}
                >
                  Guillermo Salazar 2021
                </motion.span>
              </>
            )}
          </FooterContainer>
        </Menu>
      </MenuContainer>
    </NavContainer>
  );
};

export default Nav;
