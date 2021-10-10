import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import s from './UserMenu.module.css';

export const UserMenu = () => {
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  return (
    <div className={s.userMenuWrapper}>
      <p className={s.text}>Welcome {userName}</p>
      <button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        className={s.button}
      >
        Logout
      </button>
    </div>
  );
};
