import React from 'react';
import {Image, Text, View} from 'react-native';
import {Images} from '../theme/image';

const BrandInnovationScreen = () => {
  return (
    <View className="flex-1 items-center justify-center -translate-y-20">
      <Image className="w-40 h-40" source={Images.BrandInnovations} />
      <Text className="text-xl text-black mt-5">Brand Innovations</Text>
      <Text className="w-[80%] text-lg text-neutral-500 mt- text-center">
        Explore products and services showcased by event sponsors and partners
      </Text>
    </View>
  );
};

export default BrandInnovationScreen;
