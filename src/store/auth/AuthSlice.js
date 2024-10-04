import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
name: 'auth',
initialState: {
    status:'not-authenticated',   // not-authtenticated ,autenticathed
    uid:null,
    email:null,
    displayName:null,
    photoUrL:null,
    errorMessage:null,
    counter: 10,
},
reducers: {
login:(state,{payload}) =>{
    state.status='authenticated',   // not-authtenticated ,autenticathed
    state.uid=payload.uid,
    state.email=payload.email,
    state.displayName=payload.displayName,
    state.photoUrL=payload.photoUrL,
    state.errorMessage=null

},
logout:(state,{payload})=>{
    state.status='not-authenticated',   // not-authtenticated ,autenticathed
    state.uid=null,
    state.email=null,
    state.displayName=null,
    state.photoUrL=null,
    state.errorMessage=payload.errorMessage

},
chekigCredencials:(state,payload)=>{
    state.status = 'checking';
}
}
});
// Action creators are generated for each case reducer function
export const { increment,login,logout,chekigCredencials } = authSlice.actions;