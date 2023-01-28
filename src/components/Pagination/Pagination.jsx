import { usePagination } from "hooks/usePagination";
import { BtnContainer, BtnList, Button } from "./Pagination.styled";

const Pagination = ({ page, onPageChange, total }) => {
  const buttons = usePagination(page, total);

  console.log("custom", buttons);

  return (
    <BtnContainer>
      <BtnList>
        {buttons.map((btn, idx) => (
          <li key={idx}>
            <Button
              onClick={() => onPageChange(btn)}
              className={btn === page && "active"}
            >
              {btn}
            </Button>
          </li>
        ))}
      </BtnList>
    </BtnContainer>
  );
};

export default Pagination;
