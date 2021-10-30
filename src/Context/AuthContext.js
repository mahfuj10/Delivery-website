import {  createContext } from "react";
import UseFirebase from "../Firebase/UseFirebase";

export const AuthProvider = createContext();

const Auth = ({children}) => {

const allContext = UseFirebase();

return (
    <AuthProvider.Provider value={allContext}>
        {children}
    </AuthProvider.Provider>
    ) 
} 

export default Auth;