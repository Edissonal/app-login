import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebasetAuth } from "./config";

const googleProvider = new  GoogleAuthProvider();

export const singInWithGoogle = async() =>{

    try{
        const result = await signInWithPopup(FirebasetAuth,googleProvider);
       // const credentials = GoogleAuthProvider.credentialFromResult(result);

       const {displayName,email,photoURL,uid} = result.user; 

       return {
            ok:true,
            displayName,
            email,
            photoURL,
            uid
       }
    }
    catch(error){
        const errorCode = errorCode = error.code;
        const errorMessage = error.message
        return{
            of:false,
            errorMessage
        }
    }
}

export const registerUserEmailPaasword= async({email,password,displayName})=>{
    try {
       const resp = await createUserWithEmailAndPassword(FirebasetAuth,email,password)
       const {uid,photoURL} = resp.user;
       console.log(res);
    } catch (error) {
      
        return {ok:false,errorMessage:error.message}
    }

}