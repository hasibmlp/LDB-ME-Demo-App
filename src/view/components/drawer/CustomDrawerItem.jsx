import React from 'react';
import {Text, View} from 'react-native';

const CustomDrawerItem = ({icon, name, focused, color, label}) => {
  const Icon = icon;

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Icon
        name={name}
        size={24}
        color={focused ? 'white' : color}
        style={{marginRight: 10}}
      />
      <Text style={{fontSize: 16, color}}>{label}</Text>
    </View>
  );
};

export default CustomDrawerItem;
