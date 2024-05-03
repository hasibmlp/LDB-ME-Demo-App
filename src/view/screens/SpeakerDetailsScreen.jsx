import React from 'react';
import {Image, Text, View, useWindowDimensions} from 'react-native';
import AutoHeightImage from '../common/AutoHeightImage';
import {Images} from '../theme/image';
import RenderHTML from 'react-native-render-html';

const SpeakerDetailScreen = ({route}) => {
  const speaker = route.params.speaker;

  const {width} = useWindowDimensions();

  return (
    <View className="bg-neutral-100">
      <View className="px-24">
        <View className="w-full aspect-square">
          <Image className="w-full h-full" source={Images.Logo.LogoBanner} />
        </View>
      </View>

      <View className="justify-center items-center px-5 py-5 speakers-center bg-white mx-4 shadow-2xl">
        <View className="w-60 h-60  rounded-full mr-4">
          <Image
            className="w-full h-full"
            source={{uri: speaker.speaker_image}}
          />
        </View>

        <View className="">
          <View className="">
            <View className="py-4">
              <RenderHTML
                style
                contentWidth={width}
                source={{html: speaker.speaker_designation}}
                tagsStyles={{
                  p: {
                    margin: 0,
                    padding: 0,
                    color: 'gray',
                  },
                }}
              />
            </View>

            <Text className="text-3xl   text-black font-semibold">
              {speaker.speaker_name}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SpeakerDetailScreen;
