import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {FontTypes} from '../../theme/fonts';

export default function Panel({
  children,
  label,
  leftIcon,
  rightIcon,
  style,
  alignment = 'left',
  onPress,
}) {
  let alignmentStyle;
  if (alignment === 'center') alignmentStyle = `items-center`;
  else if (alignment === 'right') alignmentStyle = `items-end `;
  else alignmentStyle = `items-start ${leftIcon && ''}`;

  return (
    <View style={style} className=" bg-white min-h-[60px] w-full">
      <Pressable
        onPress={onPress}
        style={{width: '100%', flexDirection: 'row'}}>
        {leftIcon && (
          <View className="min-w-[50px] max-w-[100px] items-center justify-center p-2">
            {leftIcon}
          </View>
        )}
        <View className={`flex-1 justify-center ${alignmentStyle}`}>
          {children && (
            <View className={`flex-1 justify-center w-full ${alignmentStyle}`}>
              {children}
            </View>
          )}
          {label && !children && (
            <Text
              style={{fontFamily: FontTypes.secondaryBold}}
              className={`text-base text-black font-medium px-4 text-left`}>
              {label}
            </Text>
          )}
        </View>
        {rightIcon && (
          <View className="min-w-[50px] items-center justify-center px-2 pr-4">
            {rightIcon}
          </View>
        )}
      </Pressable>
    </View>
  );
}
