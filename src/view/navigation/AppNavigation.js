import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BootSplash from 'react-native-bootsplash';

import HomeScreen from '../screens/HomeScreen';
import MyDrawer from './Drawer';
import RegisterScreen from '../screens/auth/RegisterScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import {Colors} from '../theme/colors';

const Stack = createStackNavigator();

const AppNavigation = () => {
  //   React.useEffect(() => {
  //     const init = async () => {
  //       // …do multiple sync or async tasks
  //     };

  //     init().finally(async () => {
  //       await BootSplash.hide({fade: true});
  //       console.log('BootSplash has been hidden successfully');
  //     });
  //   }, []);

  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <Stack.Navigator>
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
