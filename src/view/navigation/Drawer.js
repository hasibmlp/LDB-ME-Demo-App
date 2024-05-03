import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  HomeIcon,
  UserIcon,
  CalendarIcon,
  MapPinIcon,
  VideoCameraIcon,
  QuestionMarkCircleIcon,
  ShareIcon,
  AcademicCapIcon,
  ChartBarIcon,
  QrCodeIcon,
  PhotoIcon,
  EllipsisHorizontalIcon,
} from 'react-native-heroicons/outline';
import {Bars3Icon} from 'react-native-heroicons/outline';

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
import BarsIconButton from '../common/icons/BarsIconButton';
import MoreScreen from '../screens/MoreScreen';

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
          drawerIcon: HomeIcon,
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
          drawerIcon: CalendarIcon,
          title: null,
          headerLeft: () => <BackIconButton style={{paddingHorizontal: 12}} />,
          headerRight: () => <BarsIconButton style={{paddingHorizontal: 12}} />,
        }}
      />
      <Drawer.Screen
        name="SpeakerStack"
        component={SpeakerStack}
        options={{
          drawerLabel: 'Speakers',
          headerShown: false,
          drawerIcon: UserIcon,
        }}
      />
      <Drawer.Screen
        name="BadgeScreen"
        component={BadgeScreen}
        options={{
          drawerLabel: 'Badge',
          drawerIcon: QrCodeIcon,
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
          drawerIcon: MapPinIcon,
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
          drawerIcon: PhotoIcon,
          title: null,
          headerLeft: () => <BackIconButton style={{paddingHorizontal: 12}} />,
          headerRight: () => <BarsIconButton style={{paddingHorizontal: 12}} />,
        }}
      />
      <Drawer.Screen
        name="BrandVideosScreen"
        component={BrandVideosScreen}
        options={{
          drawerLabel: 'Brand Videos',
          drawerIcon: VideoCameraIcon,
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
          drawerIcon: QuestionMarkCircleIcon,
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
          drawerIcon: ChartBarIcon,
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
          drawerIcon: ShareIcon,
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
          drawerIcon: Bars3Icon,
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
          drawerIcon: AcademicCapIcon,
          title: null,
          headerLeft: () => <BackIconButton style={{paddingHorizontal: 12}} />,
          headerRight: () => <BarsIconButton style={{paddingHorizontal: 12}} />,
        }}
      />
      <Drawer.Screen
        name="MoreScreen"
        component={MoreScreen}
        options={{
          drawerLabel: 'More',
          drawerIcon: EllipsisHorizontalIcon,
          title: null,
          headerLeft: () => <BackIconButton style={{paddingHorizontal: 12}} />,
          headerRight: () => <BarsIconButton style={{paddingHorizontal: 12}} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
