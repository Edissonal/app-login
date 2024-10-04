import React from 'react'
import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectecView } from '../views';
import { AddOutlined } from '@mui/icons-material';


export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
{/* <Typography >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolorem totam sint aperiam in accusantium sit accusamus ducimus, exercitationem tempore deserunt nobis tempora odio explicabo sapiente reprehenderit. Repellendus, eum totam?</Typography>*/} 
{/*<NothingSelectecView/>*/} 
{/*<NoteView/>*/ }
<NoteView/>

<IconButton
    size='large'
    sx={{
      color:'white',
      backgroundColor:'error.main',
      ':hover':{backgroundColor:'error.main',opacity:0.9,},
      position:'fixed',
      right:50,
      bottom:50
    }}
>
<AddOutlined  sx={{fontSize:30}}></AddOutlined>
</IconButton>
</JournalLayout>      
        
    </>

  )
}
