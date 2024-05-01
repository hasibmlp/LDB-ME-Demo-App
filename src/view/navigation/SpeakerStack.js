import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SpeakerScreen from '../screens/SpeakersScreen';
import SpeakerDetailScreen from '../screens/SpeakerDetailsScreen';

const Stack = createStackNavigator();

const SpeakerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SpeakersScreen"
        component={SpeakerScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SpeakerDetailsScreen"
        component={SpeakerDetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default SpeakerStack;
