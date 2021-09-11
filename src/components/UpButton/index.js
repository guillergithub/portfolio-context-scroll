import { mdiChevronUp } from "@mdi/js";
import Icon from "@mdi/react";
import { UpButtonContainer } from "./styled";

const UpButton = ({ currentPage, handlePageChange }) => {
  return (
    <>
      {currentPage > 0 && (
        <UpButtonContainer >
          <Icon path={mdiChevronUp} color={"#fff"} size={3} onClick={() => handlePageChange()}/>
        </UpButtonContainer>
      )}
    </>
  );
};

export default UpButton;
