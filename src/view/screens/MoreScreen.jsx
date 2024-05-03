import React, {useContext} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {EllipsisHorizontalIcon, UserIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import {FontTypes} from '../theme/fonts';
import {Colors} from '../theme/colors';
import {AuthContext} from '../../core/redux/provider/authProvider';

const MoreScreen = () => {
  const {user, handleSignOut} = useContext(AuthContext);

  let parsedUser = {};
  if (typeof user === 'string' && user !== '') {
    parsedUser = JSON.parse(user);
  } else if (typeof user === 'object') {
    parsedUser = user;
  }

  console.log('--- Parsed User [MoreScreen.jsx]------');
  console.log(JSON.stringify(parsedUser, null, 2));

  return (
    <View className="flex-1 items-center justify-center -translate-y-20">
      <EllipsisHorizontalIcon size={53} />
      <View className="w-20 h-20 rounded-full bg-neutral-200 items-center justify-center">
        <UserIcon size={30} color="black" />
      </View>
      <Text className="w-[80%] text-lg text-black mt- text-center mt-3">
        {parsedUser?.DoctorName}
      </Text>

      <View className="px-10 w-full mt-5">
        <MyButton
          onPress={() => handleSignOut()}
          title="Log out"
          loading={false}
        />
      </View>
    </View>
  );
};

export default MoreScreen;

const MyButton = ({onPress, loading, active = true, title}) => {
  const renderBody = () => {
    if (loading) {
      return <ActivityIndicator color="white" />;
    }

    return <Text className="text-lg text-white">{title}</Text>;
  };
  return (
    <TouchableOpacity
      disabled={!active || loading}
      onPress={onPress}
      style={{
        backgroundColor: Colors.secondary,
        opacity: !active && 0.3,
        paddingVertical: 14,
        borderRadius: 14,
        alignItems: 'center',
      }}
      className="w-full">
      {renderBody()}
    </TouchableOpacity>
  );
};
