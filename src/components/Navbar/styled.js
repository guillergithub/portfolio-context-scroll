import styled from "styled-components";
import * as CSS from "../../utils/vars";

const media = {
  tablet: "@media(min-width: 760px)",
  screen: "@media(min-width: 1000px)",
  LargeScreen: "@media(min-width: 1300px)",
};

export const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid ${CSS.gray};
  margin: 0 auto;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  svg {
    cursor: pointer;
    margin-right: 40px;
    margin-top: 30px;
  }
`;

export const ColorOption = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 3px solid white;
  cursor: pointer;
  margin: 5px;
`;

export const ColorOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-self: center;
  width: 138px;
`;

export const IconsContainer = styled.div`
  margin-top: ${(props) => props.mt}px;
  margin-right: 40px;  
  height: fit-content;  
  .margin-right {
    margin-right: 40px;
  }
  svg {
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  svg {
  width: 50px;
  height: 35px;  
  margin-left: 40px;
  z-index: 999;
  cursor: pointer;
  }
`;

export const NavContainer = styled.nav`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuContainer = styled.div`
  background: lightgreen;
  display: flex;
  justify-content: center;
`;

export const Menu = styled.div`
  background: #1b1b1b;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -50vh;
  margin-right: 0;
  transform: translateY(${(props) => (!props.$transform ? "-1000px" : "0px")});
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: ${CSS.transition};
  -webkit-transition: ${CSS.transition};
  box-shadow: ${CSS.shadow};
  ${media.tablet} {
    left: 45vw;
  }
  ${media.screen} {
    left: 50vw;
  }
  ${media.LargeScreen} {
    left: 65%;
  }
`;

export const MenuList = styled.ul`
  font-weight: 100;
  align-self: center;
  position: absolute;
  top: 25%;
  height: 200px;
  width: 300px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  ${media.tablet} {
    width: 370px;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
    /* height: 7px; */
  }

  /* Track */
  ::-webkit-scrollbar-track-piece:start {
    background: none;
    margin-top: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.color};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  margin: 0 0 30px 50px;
  font-size: 2rem;
`;

export const MenuLink = styled.span`
  display: block;
  text-decoration: none;
  color: ${(props) => props.color};
  transition: ${CSS.transition};
  -webkit-transition: ${CSS.transition};
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export const PopBody = styled.div`
  background: ${CSS.gray};
  width: 170px;
  padding: 5px;
  transition: ${CSS.transition};
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const PopHeader = styled.div`
  color: white;
  background: ${CSS.gray};
  border-bottom: solid 1px ${CSS.white};
  text-align: center;
  transition: ${CSS.transition};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  h3 {
    color: ${CSS.white};
  }
`;

export const SocialsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;

export const FooterContainer = styled.div`
  height: fit-content;
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 100px;
  width: 70%;
  span {
    margin-top: 20px;
    margin-bottom: 50px;
    color: ${CSS.white};
  }
`;
