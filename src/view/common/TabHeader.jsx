import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  I18nManager,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {FontTypes} from '../theme/fonts';
import {Colors} from '../theme/colors';

const screenWidth = Dimensions.get('window').width;

const TabHeader = ({activeTab, setActiveTab, tabsArray}) => {
  const [tabsLayout, setTabsLayout] = useState({});

  const offsetTransform = useSharedValue(0);
  const offsetWidth = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: offsetTransform.value}],
    width: offsetWidth.value,
  }));

  const onPress = tab => {
    setActiveTab(tab);
  };

  let m = {};
  const onTabLayout = (event, tab) => {
    m[tab.id] = event.nativeEvent.layout;

    if (Object.keys(m).length === tabsArray.length) {
      setTabsLayout(m);
    }
  };

  useEffect(() => {
    if (activeTab?.id) {
      const offset = tabsLayout[activeTab?.id]?.x;
      const offsetWidthValue = tabsLayout[activeTab?.id]?.width;

      if (offset && offsetWidth) {
        offsetTransform.value =
          offsetTransform.value === 0 ? offset : withTiming(offset);
        offsetWidth.value =
          offsetTransform.value === 0
            ? offsetWidthValue
            : withTiming(offsetWidthValue);
      }
    }
  }, [activeTab?.id, offsetTransform, offsetWidth, tabsLayout]);

  if (tabsArray.length > 2) {
    return (
      <View className="z-10 w-full">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className=" flex-row  justify-between bg-transparent px-2 h-14 items-center z-10">
            {tabsArray?.map((tab, index) => (
              <View
                className={`${tabsArray.length < 3 && 'flex-1'} `}
                key={index.toString()}
                onLayout={event => onTabLayout(event, tab)}>
                <TouchableOpacity
                  onPress={() => onPress(tab)}
                  className=" items-center justify-center">
                  <View style={{marginHorizontal: 'auto'}} className="w-[60%] ">
                    <Text
                      style={{
                        fontFamily:
                          activeTab?.id === tab?.id
                            ? FontTypes.secondaryBold
                            : FontTypes.secondary,
                        color: activeTab.id === tab?.id ? 'white' : 'black',
                      }}
                      className={`text-base text-center capitalize ${
                        activeTab.id === tab.id
                          ? 'text-black '
                          : 'text-neutral-500 z-50'
                      }`}>
                      {tab.title?.value}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <Animated.View
            style={[animatedStyle, {backgroundColor: Colors.primary}]}
            className={` ${
              I18nManager.isRTL ? 'self-end' : 'self-start'
            } rounded-full h-14 absolute`}
          />
        </ScrollView>
      </View>
    );
  }

  return (
    <View className="z-10 w-full">
      <View className=" flex-row  justify-between bg-transparent px-2 h-14 items-center z-10">
        {tabsArray?.map((tab, index) => (
          <View
            className={`${tabsArray.length < 3 && 'flex-1'} `}
            key={index.toString()}
            onLayout={event => onTabLayout(event, tab)}>
            <TouchableOpacity
              onPress={() => onPress(tab)}
              className=" items-center justify-center">
              <View style={{marginHorizontal: 'auto'}} className="w-[60%]">
                <Text
                  style={{
                    fontFamily:
                      activeTab?.id === tab?.id
                        ? FontTypes.secondaryBold
                        : FontTypes.secondary,
                    color: activeTab.id === tab?.id ? 'white' : 'black',
                  }}
                  className={`text-base text-center capitalize ${
                    activeTab.id === tab.id
                      ? 'text-black '
                      : 'text-neutral-500 z-50'
                  }`}>
                  {tab.title?.value}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <Animated.View
        style={[animatedStyle, {backgroundColor: Colors.primary}]}
        className={` ${
          I18nManager.isRTL ? 'self-end' : 'self-start'
        } rounded-full h-14 absolute`}
      />
    </View>
  );
};

export default TabHeader;
