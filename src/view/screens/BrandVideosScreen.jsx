import React from 'react';
import {Image, Text, View} from 'react-native';
import {Images} from '../theme/image';

const BrandVideosScreen = () => {
  return (
    <View className="flex-1 items-center justify-center -translate-y-20">
      <Image className="w-40 h-40" source={Images.BrandVideosScreen} />
      <Text className="text-xl text-black mt-5">Brand Videos</Text>
      <Text className="w-[80%] text-lg text-neutral-500 mt- text-center">
        Watch promotional videos and learn more about event sponsors and
        partners.
      </Text>
    </View>
  );
};

export default BrandVideosScreen;
