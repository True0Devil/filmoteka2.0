import { ReactComponent as Icon } from "../../images/film.svg";
import {
  Navigation,
  NavigationList,
  Header,
  HeaderLink,
  HeaderContainer,
  NavigationListItem,
  Footer,
  FooterText,
  LogoText,
} from "./Layout.styled";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header>
        <HeaderContainer>
          <Navigation>
            <HeaderLink href="/">
              <Icon />
              <LogoText>Filmoteka</LogoText>
            </HeaderLink>
            <NavigationList>
              <NavigationListItem>Home</NavigationListItem>
              <NavigationListItem>My Library</NavigationListItem>
            </NavigationList>
          </Navigation>
        </HeaderContainer>
      </Header>

      <Outlet />

      <Footer>
        <FooterText>&#169; 2020 | All Rights Reserved |</FooterText>
        <FooterText> Developed with love by GoIT Students</FooterText>
      </Footer>
    </>
  );
};

export default Layout;
