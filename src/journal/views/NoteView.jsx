import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImagesGallery } from '../components/ImagesGallery'

export const NoteView = () => {
  return (
   <Grid container direction='row' justifyContent='space-between' sx={{mb:1}} alignItems='center'>
        <Grid>
            <Typography fontSize={39} fontWeight='ligth'>28 de agosto deñ 2023</Typography>
        </Grid>

        <Grid item>
            <Button  color='primary' sx={{padding:2}}>
            <SaveOutlined sx={{fontSize:30,mr:1}}></SaveOutlined>
            Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
              type='text'
              variant='filled'
              fullWidth
              placeholder='Ingrese un titulo'
              label="titulo"
              sx={{border:'none',mb:1}}
            />
            <TextField 
              type='text'
              variant='filled'
              fullWidth
              multiline
              placeholder='Que susedio en el dia hoy'
              sx={{border:'none',mb:1}}
              minRows={5}
            />
        </Grid>
        <ImagesGallery></ImagesGallery>

   </Grid>
  )
}
