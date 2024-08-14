import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidDataa } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlics';
import { user_avtar, BG_URL } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleButtonClick = async () => {
    const msg = checkValidDataa(
      emailRef.current.value,
      passwordRef.current.value,
      isSignInForm ? null : fullNameRef.current.value
    );
    setErrorMessage(msg);
    if (msg) return;

    if (!isSignInForm) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: fullNameRef.current.value,
          photoURL: user_avtar
        });

        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        }));

      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode} - ${errorMessage}`);
      }
    } else {
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow relative">
        <img
          className="w-full h-full object-cover absolute inset-0"
          src={BG_URL}
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 p-6 md:p-12 rounded-lg w-11/12 md:w-1/3 lg:w-1/4 max-w-md text-white"
      >
        <h1 className="font-bold text-2xl md:text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullNameRef}
            type="text"
            placeholder="Full Name"
            className="p-3 md:p-4 my-3 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email Address"
          className="p-3 md:p-4 my-3 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-3 md:p-4 my-3 w-full bg-gray-700 rounded-lg"
        />
        {errorMessage && (
          <p className="text-red-600 text-sm md:text-base">{errorMessage}</p>
        )}
        <button
          className="p-3 md:p-4 my-4 bg-red-600 w-full rounded-lg hover:bg-red-700 transition duration-300"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-sm md:text-base cursor-pointer hover:underline" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up" : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
}

export default Login;
