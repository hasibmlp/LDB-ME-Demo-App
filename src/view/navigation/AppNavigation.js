import React, {createContext, useEffect, useMemo, useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BootSplash from 'react-native-bootsplash';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MyDrawer from './Drawer';
import RegisterScreen from '../screens/auth/RegisterScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import {Colors} from '../theme/colors';

const Stack = createStackNavigator();

const AppNavigation = () => {
  useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      console.log(' successfully');
    });
  }, []);

  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <Stack.Navigator>
        {/* <>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              title: null,
              headerStyle: {backgroundColor: Colors.backgroud},
            }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
              title: null,
              headerStyle: {backgroundColor: Colors.backgroud},
            }}
          />
        </> */}
        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
