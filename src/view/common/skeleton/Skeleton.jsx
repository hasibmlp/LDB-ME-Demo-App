import React from 'react';
import {View, Animated} from 'react-native';
import {useEffect, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function Skeleton({width, height, style, rounded = 'md'}) {
  const translateX = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        useNativeDriver: true,
        duration: 1000,
      }),
    ).start();
  }, [width, translateX]);

  return (
    <View
      style={[{width: width, height: height}, style]}
      className={`bg-gray-200 overflow-hidden ${
        rounded === 'full' ? 'rounded-full' : 'rounded-sm'
      }`}>
      <Animated.View
        className="w-full h-full overflow-hidden"
        style={{transform: [{translateX: translateX}]}}>
        <LinearGradient
          style={{height: '100%', width: '100%'}}
          colors={[
            'rgba(255, 255, 255, 0.1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 0.1)',
          ]}
          start={{x: 1, y: 1}}
        />
        {/* <View className="w-full h-full overflow-hidden bg-black" /> */}
      </Animated.View>
    </View>
  );
}
