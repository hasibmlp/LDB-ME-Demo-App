import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Images} from '../theme/image';
import {useNavigation} from '@react-navigation/native';

const data = [
  {title: 'Agenda', imageUrl: Images.Agenda, navigate: 'AgendaScreen'},
  {title: 'Speakers', imageUrl: Images.Speakers, navigate: 'SpeakerStack'},
  {title: 'Badge', imageUrl: Images.Badge, navigate: 'BadgeScreen'},
  {title: 'Venue', imageUrl: Images.Venue, navigate: 'VenueScreen'},
  {
    title: 'Brand Innovation',
    imageUrl: Images.BrandInnovations,
    navigate: 'BrandInnovationScreen',
  },
  {
    title: 'Brand Videos',
    imageUrl: Images.Videos,
    navigate: 'BrandVideosScreen',
  },
  {
    title: 'Ask Questions',
    imageUrl: Images.Questions,
    navigate: 'AskQuestionsScreen',
  },
  {title: 'Voting', imageUrl: Images.Voting, navigate: 'VotingScreen'},
  {
    title: 'Social Media',
    imageUrl: Images.Social,
    navigate: 'SocialMediaScreen',
  },
  {title: 'Survey', imageUrl: Images.Survey, navigate: 'SurveyScreen'},
  {title: 'CME', imageUrl: Images.CME, navigate: 'CMEScreen'},
  {title: 'More', imageUrl: Images.More, navigate: 'MoreScreen'},
];

const itemColors = ['#0ea5e9', '#94a3b8', '#075985'];

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({item, index}) => {
    const colorIndex = index % 3;
    const bgColor = itemColors[colorIndex];
    return (
      <View className="w-[50%] px-2">
        <View
          style={{aspectRatio: 1, backgroundColor: bgColor}}
          className="  rounded-[20px] ">
          <TouchableOpacity
            onPress={() => navigation.navigate(item.navigate)}
            className="w-full h-full items-center justify-center">
            <Image source={item.imageUrl} className="w-full h-full" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1">
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingVertical: 8,
          flexGrow: 1,
          paddingBottom: 40,
        }}
        columnWrapperStyle={{padding: 8}}
      />
    </View>
  );
};

export default HomeScreen;
