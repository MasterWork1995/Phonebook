import { useState } from 'react';
import shortid from 'shortid';
import s from './FormaRegistration.module.css';

export const FormaRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    setEmail('');
    setPassword('');
    setName('');
  };
  const nameId = shortid.generate();
  const emailId = shortid.generate();
  const passwordId = shortid.generate();

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <label htmlFor={nameId} className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={handleChange}
            id={nameId}
            className={s.input}
          />
        </label>
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
          Registration
        </button>
      </form>
    </>
  );
};
