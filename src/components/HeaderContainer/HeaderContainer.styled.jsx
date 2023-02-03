import styled from "styled-components";

export const Container = styled.div`
  position: absolute;

  top: 130px;
  left: 50%;

  transform: translateX(-50%);
  width: calc(100% - 64px);
`;

export const ErrorMessage = styled.div`
  color: #ff001b;
  font-size: 14px;

  text-align: center;

  margin-top: 16px;

  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`;
