import React from 'react';
import {Image, Text, View} from 'react-native';

import {Images} from '../theme/image';
import {MapPinIcon} from 'react-native-heroicons/outline';

const VenueScreen = () => {
  return (
    <View className="flex-1 items-center justify-center -translate-y-20">
      <MapPinIcon size={53} />
      <Text className="text-xl text-black mt-1">Venue</Text>
      <Text className="w-[80%] text-lg text-neutral-500 mt- text-center">
        Discover event locations, view maps.
      </Text>
    </View>
  );
};

export default VenueScreen;
