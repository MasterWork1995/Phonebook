import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <>
      <nav>
        <NavLink
          to="/registration"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Registration
        </NavLink>
        <NavLink
          to="/login"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Login
        </NavLink>
      </nav>
    </>
  );
};
