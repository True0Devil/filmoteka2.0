import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "../../images/header-mobile.jpg";

export const Header = styled.header`
  position: relative;

  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HeaderContainer = styled.div`
  padding: 40px 32px 168px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 30px;
  letter-spacing: 1.16;
`;

export const LogoText = styled.span`
  @media (max-width: 480px) {
    display: none;
  }
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

export const Footer = styled.footer`
  background-color: #f7f7f7;

  padding: 30px 0;
  text-align: center;
`;

export const FooterText = styled.span`
  margin: 0 0 10px 0;
  display: block;

  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`;
