import React, {useEffect, useState} from 'react';
import {I18nManager, Text, TextInput, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {FontTypes} from '../../theme/fonts';
import Button from '../button/Button';

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
}) => {
  const [isFocused, setFocused] = useState(value?.length > 0 ? true : false);
  const [isHidePassword, setHidePassword] = useState(isSecureTextEntry);

  const transformY = useSharedValue(10);
  const height = useSharedValue(55);
  const errorHeight = useSharedValue(55);

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
      ? withTiming(55, {duration: 0})
      : withTiming(50, {duration: 0});
  }, [isFocused, transformY, height]);

  useEffect(() => {
    height.value =
      error && touched
        ? withTiming(75, {duration: 0})
        : withTiming(55, {duration: 0});
  }, [error, touched, height]);

  if (animation === false) {
    return (
      <Animated.View style={animatedContainerStyle} className={`mb-4`}>
        <View
          className={`flex justify-end border-b  ${
            error && touched ? 'border-red-500' : 'border-neutral-300'
          } h-14 bg-white`}>
          <Text
            style={{fontFamily: FontTypes.secondary}}
            className={`text-base  absolute top-0 ${
              error && touched ? 'text-red-600' : 'text-black-600'
            } w-full text-left`}>
            {label}
          </Text>

          {
            <TextInput
              style={{fontFamily: FontTypes.secondary}}
              className=" flex-1 pt-5 text-left "
              onChangeText={handleChange}
              onBlur={handleBlur}
              value={value}
              secureTextEntry={isHidePassword}
              keyboardType={keyboardType}
              placeholder={placeholder}
              placeholderTextColor={'gray'}
            />
          }

          {isSecureTextEntry && (
            <View className="absolute right-3">
              {!isHidePassword && (
                <Button
                  size="sm"
                  label="hide"
                  type="action"
                  onPress={() => setHidePassword(true)}
                />
              )}
              {isHidePassword && (
                <Button
                  size="sm"
                  label="show"
                  type="action"
                  onPress={() => setHidePassword(false)}
                />
              )}
            </View>
          )}
        </View>
        {
          <View className="absolute bottom-0 -z-10">
            <Text
              style={{fontFamily: FontTypes.secondary}}
              className={` text-xs text-red-600 pt-3 text-left`}>
              {error}
            </Text>
          </View>
        }
      </Animated.View>
    );
  }

  return (
    <View className={`mb-2 flex justify-center pb-5`}>
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
              <Button
                size="sm"
                label="hide"
                type="action"
                onPress={() => setHidePassword(true)}
              />
            )}
            {isHidePassword && (
              <Button
                size="sm"
                label="show"
                type="action"
                onPress={() => setHidePassword(false)}
              />
            )}
          </View>
        )}
      </Animated.View>
      {
        <Text
          style={{fontFamily: FontTypes.secondary}}
          className={` absolute -bottom-1 text-xs text-red-600 pt-3 text-left`}>
          {error && touched && error}
        </Text>
      }
    </View>
  );
};
export default MyTextInput;
