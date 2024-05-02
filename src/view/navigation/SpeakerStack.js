import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SpeakerScreen from '../screens/SpeakersScreen';
import SpeakerDetailScreen from '../screens/SpeakerDetailsScreen';
import BackIconButton from '../common/icons/BackIconButton';
import BarsIconButton from '../common/icons/BarsIconButton';
import {Colors} from '../theme/colors';

const Stack = createStackNavigator();

const SpeakerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SpeakersScreen"
        component={SpeakerScreen}
        options={{
          title: null,
          headerLeft: () => <BackIconButton style={{paddingHorizontal: 12}} />,
          headerRight: () => <BarsIconButton style={{paddingHorizontal: 12}} />,
          headerStyle: {backgroundColor: Colors.backgroud},
        }}
      />
      <Stack.Screen
        name="SpeakerDetailsScreen"
        component={SpeakerDetailScreen}
        options={{
          title: null,
          headerLeft: () => <BackIconButton style={{paddingHorizontal: 12}} />,
          headerStyle: {backgroundColor: Colors.backgroud},
        }}
      />
    </Stack.Navigator>
  );
};

export default SpeakerStack;
