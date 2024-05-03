import React from 'react';
import {Image, Text, View} from 'react-native';
import {Images} from '../theme/image';
import {PhotoIcon} from 'react-native-heroicons/outline';

const BrandInnovationScreen = () => {
  return (
    <View className="flex-1 items-center justify-center -translate-y-20">
      <PhotoIcon size={53} />
      <Text className="text-xl text-black mt-1">Brand Innovations</Text>
      <Text className="w-[80%] text-lg text-neutral-500 mt- text-center">
        Explore products and services showcased by event sponsors and partners
      </Text>
    </View>
  );
};

export default BrandInnovationScreen;
