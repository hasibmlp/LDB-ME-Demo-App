import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {Bars3Icon, ChevronLeftIcon} from 'react-native-heroicons/outline';

export default function BarsIconButton({style, color = 'black'}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={style}
      onPress={() => navigation.openDrawer()}
      className="p-1 items-center justify-center">
      <Bars3Icon size={28} color={color} strokeWidth={2} />
    </TouchableOpacity>
  );
}
