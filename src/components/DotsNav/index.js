import { useContext } from "react";
import { Dot, DotsContainer } from "./styled"
import ColorContext from "../../context/Colors";

const Dots = ({ isOpen, handlePageChange, currentPage }) => {

  const { color } = useContext(ColorContext);

  const pages = [];
  for(let i=0; i <= 3; i++) {
    pages.push(i)
  }

  return (
    <DotsContainer>
      { pages.map((number, index) => (
        <Dot key={number} color={currentPage === index ? color : "white"} page={currentPage} onClick={() => handlePageChange(number)} $transform={isOpen} />
      )) }      
    </DotsContainer>
  )
}

export default Dots
