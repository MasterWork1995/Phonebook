import s from './UserMenu.module.css';

export const UserMenu = () => {
  return (
    <div className={s.userMenuWrapper}>
      <p className={s.text}>Welcome UserName</p>
      <button type="button" className={s.button}>
        Logout
      </button>
    </div>
  );
};
