import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "../../images/header-mobile.jpg";
import image2x from "../../images/2x-header-mobile.jpg";
import tablet from "../../images/header-tablet.jpg";
import tablet2x from "../../images/2x-header-tablet.jpg";
import desktop from "../../images/header-desktop.jpg";
import desktop2x from "../../images/2x-header-desktop.jpg";

export const Header = styled.header`
  position: relative;

  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 767px) and (min-device-pixel-ratio: 2),
    screen and (max-width: 767px) and (min-resolution: 192dpi),
    screen and (max-width: 767px) and (min-resolution: 2dppx) {
    background-image: url(${image2x});
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-image: url(${tablet});
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) and (min-device-pixel-ratio: 2),
    screen and (min-width: 768px) and (max-width: 1279px) and (min-resolution: 192dpi),
    screen and (min-width: 768px) and (max-width: 1279px) and (min-resolution: 2dppx) {
    background-image: url(${tablet2x});
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${desktop});
  }

  @media screen and (min-width: 1280px) and (min-device-pixel-ratio: 2),
    screen and (min-width: 1280px) and (min-resolution: 192dpi),
    screen and (min-width: 1280px) and (min-resolution: 2dppx) {
    background-image: url(${desktop2x});
  }
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

  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};

  @media screen and (max-width: 767px) {
    display: block;
  }
`;
