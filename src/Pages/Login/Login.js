import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from '@firebase/auth';
import React, { createContext, useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import firebaseInitalize from '../../Firebase/FirebaseInitalize';
import UseFirebase from '../../Firebase/UseFirebase';
import UseAuth from '../../UseAuth';

export const userContext = createContext();
// firebaseInitalize();

const Login = () => {

    // const provider = new GoogleAuthProvider();
    // const auth = getAuth();
    // const [signUser,setSingUser] = useContext(userContext);

    // const handaleGoogleSign = () => {

    //     return  signInWithPopup(auth, provider)
    //       // .then((result) => {
    //       //     setUser(result.user)
    //       // }).catch(error => {
    //       //     setError(error.message)
    //       // })
    //   }
// console.log(signUser);
    //   useEffect( () => {
    //     onAuthStateChanged(auth,(user) => {
    //         if(user){
    //             setSingUser(user)
    //         }else{
    //             setSingUser({})
    //         }
    //     })
    // },[])
    const {handaleGoogleSign,setIsloading} = UseAuth();

// const { handaleGoogleSign, user } = UseFirebase();
const history = useHistory()
const location = useLocation();
const redirect_url = location.state?.from || "/home"; 

const googleSign = () => {
    // signInWithPopup(auth, provider)
    // .then(result => console.log(result))
    setIsloading(true);
    handaleGoogleSign()
    .then(()=>{
        // setSingUser(result.user)
        history.push(redirect_url)
    })
    .finally( () => setIsloading(false));
// console.log(logUser);
}

    return (
        <section>
            <article>
                <button onClick={googleSign}>Google sign</button>
            </article>
        </section>
    );
};

export default Login;