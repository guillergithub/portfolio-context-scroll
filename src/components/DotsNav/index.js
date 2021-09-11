import { Dot, DotsContainer } from "./styled"

const Dots = ({ isOpen, handlePageChange }) => {

  const pages = [];
  for(let i=0; i <= 3; i++) {
    pages.push(i)
  }

  return (
    <DotsContainer>
      { pages.map((number) => (
        <Dot key={number} onClick={() => handlePageChange(number)} $transform={isOpen} />
      )) }      
    </DotsContainer>
  )
}

export default Dots
