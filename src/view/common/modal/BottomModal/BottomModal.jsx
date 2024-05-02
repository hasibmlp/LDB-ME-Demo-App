import React from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect, useRef, useState} from 'react';

import {FontTypes} from '../../../theme/fonts';
import {ModalOverlay} from '../ModalOverlay';

const BottomModal = ({visible, children, onClose, title, onButtonPress}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isContentAnimated, setContentAnimated] = useState(false);

  // BottomModal
  const transRef = useRef(new Animated.Value(600)).current;

  useEffect(() => {
    isContentAnimated &&
      Animated.timing(transRef, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.bezier(0.11, 0, 0.5, 0)),
        useNativeDriver: true,
      }).start();

    !isContentAnimated &&
      Animated.timing(transRef, {
        toValue: 600,
        duration: 350,
        easing: Easing.out(Easing.bezier(0.11, 0, 0.5, 0)),
        useNativeDriver: true,
      }).start(() => setModalVisible(false));
  }, [isContentAnimated, transRef]);

  useEffect(() => {
    if (visible === true) {
      setModalVisible(true);
      setContentAnimated(true);
    } else {
      setContentAnimated(false);
    }
  }, [visible]);

  const screen_width = Dimensions.get('screen').width;

  return (
    <Modal transparent={true} visible={isModalVisible}>
      <View className="flex-1">
        {<ModalOverlay visible={visible} handleClose={onClose} />}

        <Animated.View
          style={{transform: [{translateY: transRef}]}}
          className="w-full absolute bottom-0 z-[999] overflow-hidden pt-6">
          <View
            style={{
              width: screen_width / 4,
              height: screen_width / 4,
              transform: [{scaleX: 7}],
            }}
            className=" h-[100] rounded-[100px] bg-white  self-center  overflow-hidden ab absolute top-0 -z-10 "
          />
          <View className="bg-white">
            <BottomModalHeader
              title={title}
              handleClose={onClose}
              handleButtonPress={onButtonPress ?? onClose}
            />
            {children}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default BottomModal;

const BottomModalHeader = ({handleButtonPress, title}) => {
  return (
    <View className=" flex-row justify-between items-center px-5 pb-4 pt-1">
      <Text
        style={{fontFamily: FontTypes.primary}}
        className="text-2xl font-light text-black">
        {title}
      </Text>
      <TouchableOpacity className=" py-2 px-3" onPress={handleButtonPress}>
        <Text
          style={{fontFamily: FontTypes.secondary}}
          className="text-[14px] font-medium text-black uppercase translate-y-1">
          done
        </Text>
      </TouchableOpacity>
    </View>
  );
};
