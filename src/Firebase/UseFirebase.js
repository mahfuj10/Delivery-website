import React, { useEffect, useState } from 'react';
import { getAuth,signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import firebaseInitalize from './FirebaseInitalize';




firebaseInitalize();

const UseFirebase = () => {

    const provider = new GoogleAuthProvider();
    const [ isLoading, setIsloading ] = useState(true);
    const [ user, setUser ] = useState({});
    const [ error, setError ] = useState('');
    const auth = getAuth();

const handaleGoogleSign = () => {

  return  signInWithPopup(auth, provider)
    // .then((result) => {
    //     setUser(result.user)
    // }).catch(error => {
    //     setError(error.message)
    // })
}


useEffect(()=>{
    onAuthStateChanged(auth,(user) => {
        if(user){
            setUser(user)
        }else{
            setUser({})
        }
        setIsloading(false);
    })
},[])

const logOut = () => {
    setIsloading(true);
    signOut(auth)
       .then(()=>{
           setUser({})
       })
       .finally( () => setIsloading(false))
   }
   

return {
    logOut,
    user,
    setUser,
    error,
    isLoading,
     setIsloading ,
    handaleGoogleSign
}

}

export default UseFirebase;