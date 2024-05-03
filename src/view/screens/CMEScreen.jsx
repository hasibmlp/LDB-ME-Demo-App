import React from 'react';
import {Image, Text, View} from 'react-native';
import {Images} from '../theme/image';
import {AcademicCapIcon} from 'react-native-heroicons/outline';

const CMEScreen = () => {
  return (
    <View className="flex-1 items-center justify-center -translate-y-20">
      <AcademicCapIcon size={53} />
      <Text className="text-xl text-black mt-1">CME</Text>
      <Text className="w-[80%] text-lg text-neutral-500 mt- text-center">
        Track your professional development seamlessly.
      </Text>
    </View>
  );
};

export default CMEScreen;
