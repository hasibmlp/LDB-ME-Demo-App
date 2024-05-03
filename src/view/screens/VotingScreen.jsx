import React from 'react';
import {Image, Text, View} from 'react-native';

import {Images} from '../theme/image';

const VotingScreen = () => {
  return (
    <View className="flex-1 items-center justify-center -translate-y-20">
      <Image className="w-40 h-40" source={Images.Voting} />
      <Text className="text-xl text-black mt-5">Voting</Text>
      <Text className="w-[80%] text-lg text-neutral-500 mt- text-center">
        Participate in polls, surveys, and decisions to make shape the event's
        direction.
      </Text>
    </View>
  );
};

export default VotingScreen;
