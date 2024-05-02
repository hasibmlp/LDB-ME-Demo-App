import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {FontTypes} from '../../theme/fonts';
import {Colors} from '../../theme/colors';

const themeColor = 'bg-[#4baaca]';

export default function Button({
  label = '',
  type = 'primary',
  size = 'md',
  style,
  textStyle,
  flex = true,
  onPress,
  active = true,
  colors = [],
  textColors = [],
  loading = false,
  upperCase = true,
}) {
  const {container: buttonContainer, text: buttonText} =
    size === 'sm'
      ? {container: 'h-11 px-5', text: 'text-xs'}
      : size === 'lg'
      ? {container: 'h-16 py-5 px-8', text: 'text-[15px]'}
      : {container: 'h-14 py-4 px-6', text: 'text-[14]'};

  const buttonColor =
    type === 'secondary'
      ? {
          container: active || !loading ? colors[0] : colors[1],
          text: active || !loading ? textColors[0] : textColors[1],
        }
      : type === 'action'
      ? {
          container: {},
          text: active || !loading ? textColors[0] : textColors[1],
        }
      : {
          container: active || !loading ? colors[0] : colors[1],
          text: active || !loading ? textColors[0] : textColors[1],
        };

  const buttonStyle =
    type === 'secondary'
      ? {
          container: `bg-white border ${
            colors.length > 0
              ? `border-[${colors[active ? 0 : 1]}]`
              : 'border-blue-300'
          } rounded-[5px] ${buttonContainer}`,
          text: `${
            textColors.length > 0
              ? `text-[${textColors[active ? 0 : 1]}]`
              : 'text-blue-300'
          }`,
        }
      : type === 'action'
      ? {
          container: 'h-12',
          text: `${
            textColors.length > 0
              ? `text-[${textColors[active ? 0 : 1]}]`
              : 'text-[#89c157]'
          } underline ${buttonText}`,
        }
      : {
          container: `${
            colors.length > 0 ? `bg-${colors[active ? 0 : 1]}` : themeColor
          } py-4 rounded-[5px] ${buttonContainer}`,
          text: `${
            textColors.length > 0
              ? `text-[${textColors[active ? 0 : 1]}]`
              : 'text-white'
          } ${buttonText}`,
        };

  const containerClasses = `justify-center ${
    flex ? 'self-stretch' : 'self-center'
  } ${buttonStyle.container} items-center`;

  return (
    <View className={containerClasses}>
      <TouchableOpacity
        activeOpacity={0.6}
        disabled={loading || !active}
        onPress={onPress}
        style={[
          style,
          {
            backgroundColor:
              colors.length === 0
                ? ['action', 'secondary'].includes(type)
                  ? 'transparent'
                  : Colors.primary
                : buttonStyle.container,
            opacity: active ? 1 : 0.6,
            borderColor: Colors.primary,
          },
        ]}
        className="">
        {!loading && (
          <Text
            style={[
              {
                color:
                  textColors.length > 0
                    ? buttonColor.text
                    : type === 'primary'
                    ? '#fff'
                    : 'black',
              },
              {fontFamily: FontTypes.secondaryBold},
              textStyle,
            ]}
            className={`${buttonStyle.text} ${upperCase ? 'uppercase' : ''}  `}>
            {label}
          </Text>
        )}
        {loading && <ActivityIndicator color={'white'} />}
      </TouchableOpacity>
    </View>
  );
}
