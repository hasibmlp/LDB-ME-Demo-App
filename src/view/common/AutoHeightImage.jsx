import React from 'react';
import {Dimensions, Image} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const AutoHeightImage = ({source, width, height, uri}) => {
  const backgroundImageWidth = screenWidth;
  const scaleFactor = screenWidth / width;
  const backgroundImageHeight = height * scaleFactor;
  return (
    <Image
      style={{width: backgroundImageWidth, height: backgroundImageHeight}}
      source={source ?? {uri}}
    />
  );
};

export default AutoHeightImage;
