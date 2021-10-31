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
            <article className="d-flex justify-content-center align-items-center mt-5 pt-5">
            <aside>
                    <img width="450" src="https://image.freepik.com/free-vector/isometric-data-protection-concept-with-parent-child-login-window-lock-3d_1284-63713.jpg" alt="" />
                </aside>
                <aside>

                <button className="px-5 py-2 btn-warning border-0 shadow-md" onClick={googleSign}>Google sign</button>
                </aside>
               
            </article>
        </section>
    );
};

export default Login;