import styled from "styled-components";

export const BtnContainer = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
`;

export const BtnList = styled.ul`
  display: flex;

  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 13px;

  font-family: "Roboto";
  border-radius: 5px;
  font-size: 12px;
  line-height: 1.33;
  color: ${({ theme }) => theme.colors.black};

  cursor: pointer;

  &.active {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
  }
`;
