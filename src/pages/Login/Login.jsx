import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import css from './Login.module.css';
import Button from '@mui/material/Button';
// import FormControl from '@mui/material/FormControl';
// import { FormLabel, Input } from '@mui/material';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
      </label>
      <input className={css.input} type="email" name="email" />
      <label>
        Password
      </label>
      <input className={css.input} type="password" name="password" />
      <Button variant="outlined" type="submit">Log In</Button>
    </form>
  );
};