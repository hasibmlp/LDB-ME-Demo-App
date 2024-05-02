import React from 'react';
import {View} from 'react-native';
import TickIcon from './TickIcon';
import {Colors} from '../../theme/colors';

export default function CheckBoxCircle({active}) {
  return (
    <View
      style={{
        backgroundColor: active ? Colors.secondary : 'transparent',
        borderWidth: active ? 0 : 1,
        borderColor: 'black',
      }}
      className={'w-8 h-8  rounded-full items-center justify-center'}>
      {active && <TickIcon />}
    </View>
  );
}
