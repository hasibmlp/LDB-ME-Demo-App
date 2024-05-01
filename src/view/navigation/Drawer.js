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

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="AgendaScreen"
        component={AgendaScreen}
        options={{
          drawerLabel: 'Agenda',
        }}
      />
      <Drawer.Screen
        name="SpeakerStack"
        component={SpeakerStack}
        options={{
          drawerLabel: 'Speakers',
        }}
      />
      <Drawer.Screen
        name="BadgeScreen"
        component={BadgeScreen}
        options={{
          drawerLabel: 'Badge',
        }}
      />
      <Drawer.Screen
        name="VenueScreen"
        component={VenueScreen}
        options={{
          drawerLabel: 'Venue',
        }}
      />
      <Drawer.Screen
        name="BrandInnovationScreen"
        component={BrandInnovationScreen}
        options={{
          drawerLabel: 'Brnad Innovation',
        }}
      />
      <Drawer.Screen
        name="BrandVideosScreen"
        component={BrandVideosScreen}
        options={{
          drawerLabel: 'Brand Videos',
        }}
      />
      <Drawer.Screen
        name="AskQuestionsScreen"
        component={AskQuestionsScreen}
        options={{
          drawerLabel: 'Ask Questions Screen',
        }}
      />
      <Drawer.Screen
        name="VotingScreen"
        component={VotingScreen}
        options={{
          drawerLabel: 'Voting',
        }}
      />
      <Drawer.Screen
        name="SocialMediaScreen"
        component={SocialMediaScreen}
        options={{
          drawerLabel: 'Socia Media',
        }}
      />
      <Drawer.Screen
        name="SurveyScreen"
        component={SurveyScreen}
        options={{
          drawerLabel: 'Survey',
        }}
      />
      <Drawer.Screen
        name="CMEScreen"
        component={CMEScreen}
        options={{
          drawerLabel: 'CME',
        }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
