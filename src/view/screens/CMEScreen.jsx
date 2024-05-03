import React from 'react';
import {Image, Text, View} from 'react-native';
import {Images} from '../theme/image';

const CMEScreen = () => {
  return (
    <View className="flex-1 items-center justify-center -translate-y-20">
      <Image className="w-40 h-40" source={Images.CME} />
      <Text className="text-xl text-black mt-5">CME</Text>
      <Text className="w-[80%] text-lg text-neutral-500 mt- text-center">
        Track your professional development seamlessly.
      </Text>
    </View>
  );
};

export default CMEScreen;
