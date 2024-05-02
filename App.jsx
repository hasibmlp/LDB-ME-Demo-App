import React from 'react';
import {Appearance, Text, View} from 'react-native';
import AppNavigation from './src/view/navigation/AppNavigation';

const AuthContext = React.createContext();

const App = () => {
  React.useEffect(() => {
    Appearance.setColorScheme('light');
  }, []);
  return <AppNavigation />;
};

export default App;
