import { NavLink } from 'react-router-dom';
import { AuthNav } from '../AuthNav/AuthNav';
import Container from '../Container';
import { UserMenu } from '../UserMenu/UserMenu';

import s from './AppBar.module.css';

export const AppBar = () => {
  return (
    <div className={s.headerSection}>
      <Container>
        <div className={s.headerWrapper}>
          <nav>
            <NavLink
              to="/"
              exact
              className={s.link}
              activeClassName={s.activeLink}
            >
              Home
            </NavLink>
            <NavLink
              to="/contacts"
              exact
              className={s.link}
              activeClassName={s.activeLink}
            >
              Contacts
            </NavLink>
          </nav>
          <AuthNav />
          <UserMenu />
        </div>
      </Container>
    </div>
  );
};
