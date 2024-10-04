import { singInWithGoogle,registerUserEmailPaasword } from "../../auth/firebase/providers"
import { authSlice, chekigCredencials, login, logout } from "./AuthSlice"

export const chekingAutentication =(email,password) =>{
    return async(dispatch) =>{
       dispatch(chekigCredencials())
    }    
}

export const startGoogleSingIng =() =>{
    return async(dispatch) =>{
       dispatch(chekigCredencials());
       console.log('ventana')
         const  result = await singInWithGoogle();
        console.log(result);
    if(!result.ok) return dispatch(logout(result.errorMessage));
      dispatch(login(result))
    }   
}

export const starCreatingUserWithEmailPaasword=({name,password,displayName})=>{
  return async(dispatch)=>{
  const resp = await dispatch(chekigCredencials({name,password,displayName}));
   console.log(resp);
  }

}