import { useNavigate } from 'react-router-dom';
import useAuth from '../store/useAuth';
import { Button, TextField, Container } from '@mui/material';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    login(data.username);
    navigate('/dashboard');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="Username" {...register('username')} fullWidth margin="normal" />
        <Button type="submit" variant="contained">Login</Button>
      </form>
    </Container>
  );
}
