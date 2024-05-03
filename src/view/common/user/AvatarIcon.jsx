import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {UserIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';

import {FontTypes} from '../../theme/fonts';

const AvatarIcon = ({style, size}) => {
  let classNames = [];
  let textClassNames = [];

  if (size === 'lg') {
    classNames.push('h-12 w-12');
    textClassNames.push('text-base');
  }
  if (size === 'xl') {
    classNames.push('h-14 w-14');
    textClassNames.push('text-lg');
  }
  if (size === '2xl') {
    classNames.push('h-16 w-16');
    textClassNames.push('text-xl');
  }
  if (size === '4xl') {
    classNames.push('h-20 w-20');
    textClassNames.push('text-2xl');
  } else {
    classNames.push('h-10 w-10');
    textClassNames.push('text-base');
  }

  const navigation = useNavigation();

  const user = null;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MoreStack')}
      style={style}
      className={`${classNames.join(
        ' ',
      )} bg-neutral-200 rounded-full items-center justify-center  `}>
      {!user && <UserIcon size={20} color="black" />}
      {user && (
        <Text
          style={{fontFamily: FontTypes.primary}}
          className={`${textClassNames.join(' ')}`}>
          {/* {user?.firstName?.slice(0, 1)}
          {user?.lastName?.slice(0, 1)} */}
          user name
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default AvatarIcon;
