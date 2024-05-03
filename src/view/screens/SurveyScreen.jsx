import React from 'react';
import {Text, View} from 'react-native';
import {Bars3Icon} from 'react-native-heroicons/outline';

const SurveyScreen = () => {
  return (
    <View className="flex-1 items-center justify-center -translate-y-20">
      <Bars3Icon size={53} />
      <Text className="text-xl text-black mt-1">Survey</Text>
      <Text className="w-[80%] text-lg text-neutral-500 mt- text-center">
        Share your opinions and feedback to help improve future events
      </Text>
    </View>
  );
};

export default SurveyScreen;
