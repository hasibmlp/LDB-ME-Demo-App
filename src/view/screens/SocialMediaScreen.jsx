import React from 'react';
import {Image, Text, View} from 'react-native';
import {Images} from '../theme/image';
import {ShareIcon} from 'react-native-heroicons/outline';

const SocialMediaScreen = () => {
  return (
    <View className="flex-1 items-center justify-center -translate-y-20">
      <ShareIcon size={53} />
      <Text className="text-xl text-black mt-1">Social</Text>
      <Text className="w-[80%] text-lg text-neutral-500 mt- text-center">
        Interact with fellow attendees, share experiences.
      </Text>
    </View>
  );
};

export default SocialMediaScreen;
