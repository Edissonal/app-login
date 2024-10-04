import { Button, Grid, Grid2, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';

const formData ={
    email:'edissonalonso@gmail.com',
    password:'123456',
    displayName:'Edisson Andres'
}

const FormValidations ={
  email:[(value)=> value.includes('@'),'El correo debe tener un @'],
  password:[(value) => value.length >= 6, 'el password debe te tener mas de 6 letras'],
  displayName:[(value) => value.length >= 1, 'el nombre es obligatorio']

}



export const RegisterPage = () => {
  const [formSubmmited, setformSubmmited] = useState(false);
  const { displayName,email,password,
          onInputChange,
          formState,
          isFormValid,
          emailValid,
          passwordValid,
          displayNameValid
          
        } = useForm(formData,FormValidations);

      const onSubmit = (event)=>{
          event.preventDefault();
          setformSubmmited(true);
          console.log(formState);
      }


      if ( !isFormValid) return;

  return (
  <AuthLayout title='Crear Una Cuenta'>
      <form onSubmit={onSubmit}>
        <h1>Form Valid {isFormValid ? 'Valido':'Incorrecto'}</h1>
      <Grid container spacing={2}>

      <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder='nombre completo'
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmmited}
              helperText={displayNameValid}
            />
          </Grid>
        
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder='correo@google.com'
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmmited}
              helperText={emailValid}
            />
          </Grid>
          

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmmited}
              helperText={passwordValid }
            />
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

              <Grid item xs={12}>
                <Button 
                         variant='contained'
                         fullWidth
                         type='submit'
                         >Crear Cuenta</Button>
              </Grid>

            </Grid>
            <Grid container direcction='row' justifyContent='end' sx={{mt:2}}>
                <Typography sx={{mr:1}}>? Ya tienes cuenta ¿</Typography>
                <Link component={RouterLink} color='inherit' to='/auth/Login'>
                 Ingresar
                </Link>
              </Grid>
          </Grid>
        </Grid>
      </form>
  </AuthLayout>

  )
}
