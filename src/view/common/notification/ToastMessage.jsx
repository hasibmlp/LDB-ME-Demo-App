import React, {useEffect} from 'react';
import {Dimensions, Text, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {FontTypes} from '../../theme/fonts';

const screenWidth = Dimensions.get('window').width;

const ToastMessage = ({status, completed}) => {
  const sv = useSharedValue(-60);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: sv.value}],
  }));

  const messageLength = status?.message?.length;

  useEffect(() => {
    if (status.message) {
      sv.value = withTiming(0, {duration: 400});
      const timeout = setTimeout(
        () => {
          sv.value = withTiming(-60, {duration: 400});
        },
        messageLength > 90 ? 10000 : 6000,
      );
      return () => clearTimeout(timeout);
    }
  }, [status, messageLength, sv]);

  return (
    <Animated.View
      style={[{width: screenWidth}, animatedStyle]}
      className={`${
        status?.status === true ? 'bg-green-500' : 'bg-red-500'
      }  absolute overflow-hidden z-[1]`}>
      <View className="w-full h-16 items-center justify-center">
        <View style={{width: screenWidth}} className="absolute items-center">
          <Text
            style={{fontFamily: FontTypes.secondary}}
            className="text-lg text-white font-medium text-center">
            {status?.message}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default ToastMessage;
