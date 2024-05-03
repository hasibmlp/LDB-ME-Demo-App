import React from 'react';
import {Appearance, Text, View} from 'react-native';
import AppNavigation from './src/view/navigation/AppNavigation';
import {AuthProvider} from './src/core/redux/provider/authProvider';

const App = () => {
  React.useEffect(() => {
    Appearance.setColorScheme('light');
  }, []);
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
};

export default App;
