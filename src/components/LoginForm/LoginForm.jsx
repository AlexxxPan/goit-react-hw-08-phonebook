import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { InputDataLogIn, Label, LogInBTN } from './LoginForm.styled';
import { Form } from './LoginForm.styled';

const initialState = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    setState(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const { email, password } = state;
    dispatch(logIn({ email, password }));
    form.reset();
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Email
        <InputDataLogIn type="email" name="email" onChange={handleChange} />
      </Label>
      <Label>
        Password
        <InputDataLogIn
          type="password"
          name="password"
          onChange={handleChange}
        />
      </Label>
      <LogInBTN type="submit">Enter</LogInBTN>
    </Form>
  );
};