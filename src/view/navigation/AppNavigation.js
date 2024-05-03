import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BootSplash from 'react-native-bootsplash';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MyDrawer from './Drawer';
import RegisterScreen from '../screens/auth/RegisterScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import {Colors} from '../theme/colors';
import {
  AuthContext,
  AuthProvider,
} from '../../core/redux/provider/authProvider';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const {user, isLoggedIn, handleSignIn} = useContext(AuthContext);

  const generateToken = async () => {
    if (!user) {
      const userData = await AsyncStorage.getItem('@user');
      await handleSignIn(userData);
    }
  };

  console.log('app navigation');

  useEffect(() => {
    const init = async () => {
      await generateToken();
    };

    init().finally(async () => {
      setTimeout(() => {
        BootSplash.hide();
      }, 1);
      console.log(' app init');
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="MyDrawer"
            component={MyDrawer}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{
                title: null,
                headerStyle: {backgroundColor: 'white', shadowOpacity: 0},
              }}
            />
            <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              options={{
                title: null,
                headerStyle: {backgroundColor: 'white'},
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
