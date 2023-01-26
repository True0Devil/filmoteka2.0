import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "../../images/bg.png";

export const Header = styled.header`
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HeaderContainer = styled.div`
  padding: 40px 32px 80px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 30px;
  letter-spacing: 1.16;
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavigationListItem = styled.li`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  text-transform: uppercase;

  line-height: 14px;
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

export const Input = styled.input`
  display: block;

  background-color: transparent;
  border: none;
  margin: 0 auto;
  padding: 4px 4px;

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
`;

// Чистый ShelbyWalk Скутер ShelbyWalk Идеалыч ShelbyWalk Пантелеич ShelbyWalk Темель ShelbyWalk
