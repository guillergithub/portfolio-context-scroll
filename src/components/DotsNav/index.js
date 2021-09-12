import { useContext } from "react";
import { Dot, DotsContainer } from "./styled"
import ColorContext from "../../context/Colors";

const Dots = ({ isOpen, handlePageChange }) => {

  const { color } = useContext(ColorContext);

  const pages = [];
  for(let i=0; i <= 3; i++) {
    pages.push(i)
  }

  return (
    <DotsContainer>
      { pages.map((number) => (
        <Dot key={number} color={color} onClick={() => handlePageChange(number)} $transform={isOpen} />
      )) }      
    </DotsContainer>
  )
}

export default Dots
