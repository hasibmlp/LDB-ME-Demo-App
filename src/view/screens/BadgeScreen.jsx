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

  const {width} = useWindowDimensions();

  return (
    <View className="bg-neutral-100">
      <View className="px-24">
        <View className="w-full aspect-square">
          <Image className="w-full h-full" source={Images.Logo.LogoBanner} />
        </View>
      </View>

      <View
        style={{shadowRadius: 1, shadowColor: '#ddd'}}
        className="justify-center items-center py-5 speakers-center bg-white mx-4 shadow-2xl rounded-lg">
        <View className="w-[340] h-[340] ">
          <Image
            className="w-full h-full"
            // source={{
            //   uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2021%2F09%2F07%2Fscience%2Fcat-stripes-genetics.html&psig=AOvVaw3yAL1qyCNCfR37s2PowbvH&ust=1714805729253000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjrrqTz8IUDFQAAAAAdAAAAABAE',
            // }}
            source={Images.Other.qrCode}
          />
        </View>

        <View className=" w-full pt-5 px-4 items-center">
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
