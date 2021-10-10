import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import shortid from 'shortid';
import s from './FormaLogIn.module.css';

export const FormaLogIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  const emailId = shortid.generate();
  const passwordId = shortid.generate();

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label htmlFor={emailId} className={s.label}>
        Email
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleChange}
          id={emailId}
          className={s.input}
        />
      </label>
      <label htmlFor={passwordId} className={s.label}>
        Password
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={handleChange}
          id={passwordId}
          className={s.input}
          autoComplete="on"
        />
      </label>
      <button type="submit" className={s.button}>
        Login
      </button>
    </form>
  );
};
