import styled from "styled-components";
import { ReactComponent as Icon } from "../../images/srch-icon.svg";

export const Form = styled.form`
  position: relative;
`;

export const Input = styled.input`
  display: block;

  background-color: transparent;
  border: none;
  margin: 0 auto;
  padding: 4px 0;

  width: 100%;

  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  outline: none;

  border-bottom: 0.5px solid #ffffff;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    font-size: 14px;
    opacity: 1;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 394px;
  }
`;

export const SubmitBtn = styled.button`
  position: absolute;
  display: flex;

  justify-content: center;
  align-items: center;

  right: -14px;
  bottom: 0px;

  width: 30px;
  height: 30px;

  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const SearchIcon = styled(Icon)`
  display: block;
  stroke: currentColor;
  width: 24px;
  height: 24px;
`;
