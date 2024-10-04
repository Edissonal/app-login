import React from 'react'
import { AppRouter } from './router/AppRouter'
import {Navigate, Route,Routes} from "react-router-dom";
import { AppTheme } from './theme/AppTheme';
export const JournalApp = () => {
  return (
   <>
   <AppTheme>
   <AppRouter/>
   </AppTheme>
    

   
   </>
  )
}
