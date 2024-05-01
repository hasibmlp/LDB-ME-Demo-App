import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Images} from '../theme/image';
import {useNavigation} from '@react-navigation/native';

const data = [
  {title: 'Agenda', imageUrl: Images.Agenda},
  {title: 'Speakers', imageUrl: Images.Speakers},
  {title: 'Badge', imageUrl: Images.Badge},
  {title: 'Venue', imageUrl: Images.Venue},
  {title: 'Brand Innovation', imageUrl: Images.BrandInnovations},
  {title: 'Brand Videos', imageUrl: Images.Videos},
  {title: 'Ask Questions', imageUrl: Images.Questions},
  {title: 'Voting', imageUrl: Images.Voting},
  {title: 'Social Media', imageUrl: Images.Social},
  {title: 'Survey', imageUrl: Images.Survey},
  {title: 'CME', imageUrl: Images.CME},
  {title: 'More', imageUrl: Images.More},
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
            onPress={() => navigation.navigate('AgendaScreen')}
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
