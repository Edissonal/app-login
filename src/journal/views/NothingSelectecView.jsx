import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'
    
    export const NothingSelectecView = () => {
      return (
        <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ height: 'calc(100vh - 110px)', backgroundColor: 'primary.main',borderRadius:3}}
      >
          <Grid item xs={12} sx={{textAlign:'center', paddingTop:'50px'}}>
            <StarOutline sx={{fontSize:100, color:'white'}}></StarOutline>
            <Grid item xs={12}>
         <Typography color='white' variant='h5'>Seleciona O Crea Una entrada</Typography>
          </Grid>
          </Grid>

        
        </Grid>
      )
    }
    