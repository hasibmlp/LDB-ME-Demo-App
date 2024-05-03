import React from 'react';
import {Image, Text, View} from 'react-native';
import {Images} from '../theme/image';

const BrandScreen = () => {
  return (
    <View className="flex-1 items-center justify-center -translate-y-20">
      <Text className="text-xl text-black mt-1">MoreScreen</Text>
      <Text className="w-[80%] text-lg text-neutral-500 mt- text-center">
        Customize your event experience further with additional options..
      </Text>
    </View>
  );
};

export default BrandScreen;
