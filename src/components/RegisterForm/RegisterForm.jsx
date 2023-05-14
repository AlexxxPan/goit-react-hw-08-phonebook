import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Form,
  InputDataLogIn,
  Label,
  RegisterBTN,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Username
        <InputDataLogIn
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Email
        <InputDataLogIn
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Password
        <InputDataLogIn
          type="current-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Label>
      <RegisterBTN type="submit">Register</RegisterBTN>
    </Form>
  );
};