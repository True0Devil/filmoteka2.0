import {
  Navigation,
  NavigationList,
  Header,
  HeaderLink,
  HeaderContainer,
  NavigationListItem,
  Input,
} from "./Layout.styled";

import { ReactComponent as Icon } from "../../images/film.svg";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <Header>
        <HeaderContainer>
          <Navigation>
            <HeaderLink href="/">
              <Icon />
              <span>Filmoteka</span>
            </HeaderLink>
            <NavigationList>
              <NavigationListItem>Home</NavigationListItem>
              <NavigationListItem>My Library</NavigationListItem>
            </NavigationList>
          </Navigation>

          <form action="">
            <label htmlFor="">
              <Input type="text" placeholder="Movie search" />
            </label>
          </form>
        </HeaderContainer>
      </Header>

      <Outlet />

      <footer>
        <p>
          &#169; 2020 | All Rights Reserved | Developed with love by GoIT
          Students
        </p>
      </footer>
    </>
  );
};

export default Layout;
