import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import AgendaScreen from '../screens/AgendaScreen';
import SpeakerStack from './SpeakerStack';
import BadgeScreen from '../screens/BadgeScreen';
import VenueScreen from '../screens/VenueScreen';
import BrandInnovationScreen from '../screens/BrandInnovationScreen';
import BrandVideosScreen from '../screens/BrandVideosScreen';
import AskQuestionsScreen from '../screens/AskQuestionsScreen';
import VotingScreen from '../screens/VotingScreen';
import SocialMediaScreen from '../screens/SocialMediaScreen';
import SurveyScreen from '../screens/SurveyScreen';
import CMEScreen from '../screens/CMEScreen';

import BackIconButton from '../common/icons/BackIconButton';
import {View} from 'react-native';
import {Bars3Icon} from 'react-native-heroicons/outline';
import BarsIconButton from '../common/icons/BarsIconButton';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
      }}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          drawerLabel: 'Home',
          title: null,
          headerLeft: () => (
            <BarsIconButton style={{paddingHorizontal: 12}} color="white" />
          ),
          headerStyle: {backgroundColor: '#075985'},
        }}
      />
      <Drawer.Screen
        name="AgendaScreen"
        component={AgendaScreen}
        options={{
          drawerLabel: 'Agenda',
          title: null,
          headerLeft: () => <BackIconButton style={{paddingHorizontal: 12}} />,
          headerRight: () => <BarsIconButton style={{paddingHorizontal: 12}} />,
        }}
      />
      <Drawer.Screen
        name="SpeakerStack"
        component={SpeakerStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="BadgeScreen"
        component={BadgeScreen}
        options={{
          drawerLabel: 'Badge',
          title: null,
          headerLeft: () => <BackIconButton style={{paddingHorizontal: 12}} />,
          headerRight: () => <BarsIconButton style={{paddingHorizontal: 12}} />,
        }}
      />
      <Drawer.Screen
        name="VenueScreen"
        component={VenueScreen}
        options={{
          drawerLabel: 'Venue',
          title: null,
          headerLeft: () => <BackIconButton style={{paddingHorizontal: 12}} />,
          headerRight: () => <BarsIconButton style={{paddingHorizontal: 12}} />,
        }}
      />
      <Drawer.Screen
        name="BrandInnovationScreen"
        component={BrandInnovationScreen}
        options={{
          drawerLabel: 'Brand Innovations',
          title: null,
          headerLeft: () => <BackIconButton style={{paddingHorizontal: 12}} />,
          headerRight: () => <BarsIconButton style={{paddingHorizontal: 12}} />,
        }}
      />
      <Drawer.Screen
        name="BrandVideosScreen"
        component={BrandVideosScreen}
        options={{
          drawerLabel: 'Brnad Videos',
          title: null,
          headerLeft: () => <BackIconButton style={{paddingHorizontal: 12}} />,
          headerRight: () => <BarsIconButton style={{paddingHorizontal: 12}} />,
        }}
      />
      <Drawer.Screen
        name="AskQuestionsScreen"
        component={AskQuestionsScreen}
        options={{
          drawerLabel: 'Ask Questions',
          title: null,
          headerLeft: () => <BackIconButton style={{paddingHorizontal: 12}} />,
          headerRight: () => <BarsIconButton style={{paddingHorizontal: 12}} />,
        }}
      />
      <Drawer.Screen
        name="VotingScreen"
        component={VotingScreen}
        options={{
          drawerLabel: 'Voting',
          title: null,
          headerLeft: () => <BackIconButton style={{paddingHorizontal: 12}} />,
          headerRight: () => <BarsIconButton style={{paddingHorizontal: 12}} />,
        }}
      />
      <Drawer.Screen
        name="SocialMediaScreen"
        component={SocialMediaScreen}
        options={{
          drawerLabel: 'Social',
          title: null,
          headerLeft: () => <BackIconButton style={{paddingHorizontal: 12}} />,
          headerRight: () => <BarsIconButton style={{paddingHorizontal: 12}} />,
        }}
      />
      <Drawer.Screen
        name="SurveyScreen"
        component={SurveyScreen}
        options={{
          drawerLabel: 'Survey',
          title: null,
          headerLeft: () => <BackIconButton style={{paddingHorizontal: 12}} />,
          headerRight: () => <BarsIconButton style={{paddingHorizontal: 12}} />,
        }}
      />
      <Drawer.Screen
        name="CMEScreen"
        component={CMEScreen}
        options={{
          drawerLabel: 'CME',
          title: null,
          headerLeft: () => <BackIconButton style={{paddingHorizontal: 12}} />,
          headerRight: () => <BarsIconButton style={{paddingHorizontal: 12}} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
