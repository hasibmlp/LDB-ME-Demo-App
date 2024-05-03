import React from 'react';
import {Image, Text, View} from 'react-native';
import {Images} from '../theme/image';

const MoreScreen = () => {
  return (
    <View className="flex-1 items-center justify-center -translate-y-20">
      <Image className="w-40 h-40" source={Images.More} />
      <Text className="text-xl text-black mt-5">More</Text>
      <Text className="w-[80%] text-lg text-neutral-500 mt- text-center">
        Customize your event experience further with additional options..
      </Text>
    </View>
  );
};

export default MoreScreen;
