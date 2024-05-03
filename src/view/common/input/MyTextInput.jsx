import React, {useEffect, useState} from 'react';
import {
  I18nManager,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {FontTypes} from '../../theme/fonts';
import Button from '../button/Button';
import {EyeIcon, EyeSlashIcon} from 'react-native-heroicons/solid';

const MyTextInput = ({
  label,
  error,
  handleChange,
  value,
  handleBlur,
  touched,
  isSecureTextEntry = false,
  keyboardType = 'default',
  animation = true,
  placeholder,
  captionText,
}) => {
  const [isFocused, setFocused] = useState(value?.length > 0 ? true : false);
  const [isHidePassword, setHidePassword] = useState(isSecureTextEntry);

  const transformY = useSharedValue(10);
  const height = useSharedValue(50);
  const errorHeight = useSharedValue(50);

  const animatedStyle = useAnimatedStyle(() => ({
    top: withTiming(transformY.value),
  }));

  const animatedContainerStyle = useAnimatedStyle(() => ({
    height: withTiming(height.value),
  }));

  useEffect(() => {
    transformY.value = isFocused
      ? withTiming(0, {duration: 0})
      : withTiming(10, {duration: 0});

    height.value = isFocused
      ? withTiming(60, {duration: 0})
      : withTiming(50, {duration: 0});
  }, [isFocused, transformY, height]);

  return (
    <View className={`mb-2 flex justify-center`}>
      <Animated.View
        style={animatedContainerStyle}
        className={`flex justify-end border-b  ${
          error && touched ? 'border-red-500' : 'border-neutral-300'
        }`}>
        <Animated.View style={animatedStyle}>
          <Text
            style={{fontFamily: FontTypes.secondary, color: '#000000'}}
            className={`text-base absolute top-2 ${
              isFocused && 'top-0'
            } text-red-600 ${
              error && touched ? 'text-red-600' : ''
            } w-full text-left`}>
            {label}
          </Text>
        </Animated.View>
        {
          <TextInput
            className={`pt-5 pb-1  h-full text-${
              I18nManager.isRTL ? 'right' : 'left'
            }`}
            onChangeText={handleChange}
            onFocus={() => setFocused(true)}
            onBlur={item => {
              (value?.length === 0 ||
                value === '' ||
                value === null ||
                value === undefined) &&
                setFocused(false);
              typeof handleBlur === 'function' && handleBlur(item);
            }}
            value={value}
            secureTextEntry={isHidePassword}
            keyboardType={keyboardType}
          />
        }

        {isSecureTextEntry && (
          <View className="absolute right-3">
            {!isHidePassword && (
              // <Button
              //   size="sm"
              //   label="hide"
              //   type="action"
              //   onPress={() => setHidePassword(true)}
              // />
              <TouchableOpacity onPress={() => setHidePassword(true)}>
                <View className="p-2 pb-4">
                  <EyeSlashIcon color="black" size={20} />
                </View>
              </TouchableOpacity>
            )}
            {isHidePassword && (
              // <Button
              //   size="sm"
              //   label="show"
              //   type="action"
              //   onPress={() => setHidePassword(false)}
              // />
              <TouchableOpacity onPress={() => setHidePassword(false)}>
                <View className="p-2 pb-4">
                  <EyeIcon color="black" size={20} />
                </View>
              </TouchableOpacity>
            )}
          </View>
        )}
      </Animated.View>

      <Text
        style={{fontFamily: FontTypes.secondary}}
        className={` text-sm ${
          error && touched ? 'text-red-500' : 'text-neutral-500'
        }  pt-1 text-left`}>
        {captionText}
      </Text>
    </View>
  );
};
export default MyTextInput;
