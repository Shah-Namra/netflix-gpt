import React from 'react';
import { signOut } from 'firebase/auth';
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {addUser, removeUser} from '../utils/userSlics';
import {Logo, Supported_language} from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  // redirecting logic
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        
      if (user) { // signIn
        const {uid, email, displayName} = user
        dispatch(
          addUser({
            uid: uid, 
            email: email, 
            displayName: displayName
          })
        );
        navigate("/browse");
      } else {//signOUT
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when componet unmount
    return () => unsubscribe();
  }, []);
  

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      navigate("/error") // change it to error in future
    });
    
  };
  const handleGPTSearchClick =()=>{
    // toggle gptsearch
    dispatch(toggleGptSearchView());
  }
  const handleLanguageChange =(e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute w-full px-4 md:px-8 py-4 bg-gradient-to-b from-black to-transparent z-10 flex flex-col md:flex-row md:justify-between items-center">
      <img 
        className="w-24 md:w-32 lg:w-40 mx-auto md:mx-0"
        alt="logo"
        src={Logo}
      />
      {user && (
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
          {showGptSearch && (
            <select 
              className="p-2 bg-gray-800 text-white rounded-lg"
              onChange={handleLanguageChange}>
              {Supported_language.map((lang) => (
                <option 
                  key={lang.identifier} 
                  value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
  
          <button
            className="py-2 px-4 bg-green-300 text-white rounded-lg hover:bg-green-400 transition-colors duration-300"
            onClick={handleGPTSearchClick}
          >
            {showGptSearch ? "Homepage" : "Show GPT Search"}
          </button>
  
          <img
            className="w-8 h-8 rounded-full"
            src={user?.photoURL}
            alt="Profile"
          />
  
          <button
            onClick={handleSignOut}
            className="text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}  

export default Header;
