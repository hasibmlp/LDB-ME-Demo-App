import React from 'react';
import {Image, Text, View} from 'react-native';
import {Images} from '../theme/image';

const SurveyScreen = () => {
  return (
    <View className="flex-1 items-center justify-center -translate-y-20">
      <Image className="w-40 h-40" source={Images.Survey} />
      <Text className="text-xl text-black mt-5">Survey</Text>
      <Text className="w-[80%] text-lg text-neutral-500 mt- text-center">
        Share your opinions and feedback to help improve future events
      </Text>
    </View>
  );
};

export default SurveyScreen;
