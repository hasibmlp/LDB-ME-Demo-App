import React, {useEffect, useState} from 'react';
import {Image, Text, View, useWindowDimensions} from 'react-native';
import AutoHeightImage from '../common/AutoHeightImage';
import {Images} from '../theme/image';
import RenderHTML from 'react-native-render-html';
import AsyncStroage from '@react-native-async-storage/async-storage';
import {Colors} from '../theme/colors';

const BadgeScreen = ({route}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const init = async () => {
      const token = await AsyncStroage.getItem('@user');

      if (token) {
        setUser(JSON.parse(token));
      }
    };

    init();
  }, []);

  console.log(JSON.stringify(user?.QrCode, null, 2));
  const {width} = useWindowDimensions();

  return (
    <View className="bg-neutral-100">
      <View className="px-1">
        <View className="mb-5">
          <AutoHeightImage
            source={Images.Logo.LogoBanner}
            width={1000}
            height={500}
          />
        </View>
      </View>

      <View className="justify-center items-center py-5 speakers-center bg-white mx-4 shadow-2xl rounded-lg">
        <View className="w-[340] h-[340] ">
          <Image
            className="w-full h-full"
            source={{
              uri: user?.QrCode,
            }}
          />
        </View>

        <View className=" w-full mt-10 px-4">
          <Text className="text-sm text-neutral-500 uppercase">
            Scan the QR code for attendance
          </Text>
          <Text
            style={{color: Colors.secondary}}
            className="text-2xl text-black uppercase font-bold text-center">
            "{user?.DoctorName}"
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BadgeScreen;
