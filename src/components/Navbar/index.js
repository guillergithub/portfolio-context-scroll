import { useContext } from "react";
import { motion } from "framer-motion";
import LenguageContext from "../../context/Lenguage";
import ColorContext from "../../context/Colors";
import {
  IconsContainer,
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
  Logo,
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
import logo from "../../assets/images/NavImages/gs-logo.svg";

const Nav = ({ handleMenu, isOpen, handlePageChange }) => {
  const { handleLenguage, lenguage } = useContext(LenguageContext);
  const { color, handleColor } = useContext(ColorContext);

  const popover = (
    <Popover id="popover-basic" style={{ zIndex: 9999 }}>
      <ArrowUp />
      <PopHeader>
        <Popover.Header as="h3">Color options</Popover.Header>
      </PopHeader>
      <PopBody>
        <Popover.Body>
          <ColorOptionsContainer>
            <ColorOption color={CSS.gray} onClick={() => handleColor("gray")} />
            <ColorOption color={CSS.blue} onClick={() => handleColor("blue")} />
            <ColorOption
              color={CSS.green}
              onClick={() => handleColor("green")}
            />
            <ColorOption
              color={CSS.yellow}
              onClick={() => handleColor("yellow")}
            />
            <ColorOption
              color={CSS.orange}
              onClick={() => handleColor("orange")}
            />
            <ColorOption
              color={CSS.purple}
              onClick={() => handleColor("purple")}
            />
          </ColorOptionsContainer>
        </Popover.Body>
      </PopBody>
    </Popover>
  );

  return (
    <NavContainer>
      <Logo src={logo} alt="logo" onClick={() => handlePageChange(0)}>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="300.000000pt"
          height="222.000000pt"
          viewBox="0 0 300.000000 222.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,222.000000) scale(0.100000,-0.100000)"
            fill={CSS.white}
            stroke="none"
          >
            <path
              d="M412 1807 c-226 -226 -412 -419 -412 -427 -1 -8 185 -198 412 -422
l413 -408 305 0 305 0 338 338 c216 216 337 344 337 357 0 12 -62 82 -162 182
l-163 163 -216 0 -215 0 -167 -161 c-92 -88 -167 -167 -167 -175 0 -12 40 -14
240 -14 132 0 240 -3 240 -8 0 -4 -55 -62 -123 -130 l-122 -122 -125 0 -126 0
-192 193 c-113 114 -192 201 -192 212 0 11 79 98 192 212 l192 193 286 0 285
0 203 203 c111 111 202 208 202 215 0 9 -124 12 -578 12 l-577 0 -413 -413z"
            />
            <path
              d="M2072 2017 c-121 -121 -202 -211 -202 -222 0 -12 101 -120 255 -275
195 -195 255 -261 255 -280 0 -19 -133 -157 -600 -625 -331 -331 -598 -604
-594 -608 4 -4 138 -7 298 -7 l291 0 613 613 c336 337 612 617 612 622 -1 24
-39 64 -268 290 -138 135 -245 249 -249 263 -5 21 19 49 191 221 108 108 194
200 190 204 -4 4 -138 7 -298 7 l-292 0 -202 -203z"
            />
          </g>
        </svg>
      </Logo>
      <div>
        <IconsContainer onClick={(e) => handleMenu}>
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
          <Icon
            path={mdiMenu}
            color={CSS.white}
            size={1.3}
            onClick={handleMenu}
          />
        </IconsContainer>

        <MenuContainer>
          <Menu $transform={isOpen}>
            <ButtonsContainer mt={33}>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={popover}
              >
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
                  <MenuLink color={color}>
                    {i18n[lenguage].navbar.home}
                  </MenuLink>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handlePageChange(1);
                    handleMenu();
                  }}
                >
                  <MenuLink color={color}>
                    {i18n[lenguage].navbar.about}
                  </MenuLink>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handlePageChange(2);
                    handleMenu();
                  }}
                >
                  <MenuLink color={color}>
                    {i18n[lenguage].navbar.work}
                  </MenuLink>
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    handlePageChange(3);
                    handleMenu();
                  }}
                >
                  <MenuLink color={color}>
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
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Guillermo Salazar 2021
                  </motion.span>
                </>
              )}
            </FooterContainer>
          </Menu>
        </MenuContainer>
      </div>
    </NavContainer>
  );
};

export default Nav;
