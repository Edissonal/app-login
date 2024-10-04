import { Button, Grid, Grid2, Link, TextField, Typography } from '@mui/material';
import { Google, Password } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { chekingAutentication, startGoogleSingIng } from '../../store/auth/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

export const LoginPage = () => {

 const {status} = useSelector(state => state.auth);
 const isautenticated = useMemo(() => status == 'checking', [status]);

 const dispatch = useDispatch();
 const { email,password,onInputChange,formState} = useForm({
  email:'edissonalonso@gmail.com',
  password:'123456'
 })



 const onGoogleSingIn=()=>{

  console.log('Ongoogle SingIn');
  dispatch(startGoogleSingIng())
 }

 const onSubmit =(event) =>{
  event.preventDefault();
  dispatch(chekingAutentication())
  console.log({email,password})
 }

  return (
  <AuthLayout title='login'>
      <form onSubmit={onSubmit}>

      <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder='correo@google.com'
              fullWidth
              name="email"
              onChange={onInputChange}
              value={email}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              fullWidth
              name="password"
              onChange={onInputChange}
              value={password}
            />
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

              <Grid item xs={12} sm={6}>
                <Button variant='contained' 
                        fullWidth
                        type="submit"
                        disabled={isautenticated}
                        >Login</Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button 
                        disabled={isautenticated}
                        variant='contained' 
                        fullWidth
                        onClick={onGoogleSingIn}>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>

                </Button>
              </Grid>
            </Grid>
            <Grid container direcction='row' justifyContent='end' sx={{mt:2}}>
                <Link component={RouterLink} color='inherit' to='/auth/register'>
                Crear una cuenta
                </Link>
              </Grid>
          </Grid>
        </Grid>
      </form>
  </AuthLayout>

  )
}
