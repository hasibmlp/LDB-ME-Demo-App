import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, useContext} from 'react';

const AuthContext = createContext({
  user: null,
  setUser: user => {},
  isLoggedIn: false,
});

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const isLoggedIn = !!user;

  const handleSignIn = newUser => {
    setUser(newUser);

    return true;
  };

  const handleSignOut = () => {
    try {
      AsyncStorage.removeItem('@user');
      AsyncStorage.removeItem('@userKey');
      setUser(null);
    } catch (error) {
      console.log('ERROR LOGOUT USER', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        handleSignIn,
        handleSignOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
