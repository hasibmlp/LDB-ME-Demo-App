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
    console.log('handle sign in login');
    setUser(newUser);

    return true;
  };

  const handleSignOut = () => {
    setUser(null);
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
