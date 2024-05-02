import React, {useState} from 'react';
import {
  FlatList,
  I18nManager,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {MapIcon} from 'react-native-heroicons/outline';

import BottomModal from './BottomModal/BottomModal';
import {FontTypes} from '../../theme/fonts';
import RadioButton from '../button/RadioButton';
import FullViewModal from './FullViewModal';

const ListPicker = ({
  visible,
  setVisible,
  items,
  onItemPress,
  value,
  presentation = 'bottomModal',
}) => {
  const [searchQuery, setSearchQuery] = useState(items);

  const onSearchInput = values => {
    setSearchQuery(
      items.filter(item =>
        item.labelMiddle.toLowerCase().includes(values.toLowerCase()),
      ),
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => onItemPress(item)}>
        <View
          className={`flex-row  w-full items-center justify-between px-5 py-5 ${
            items?.length - 1 !== index && 'border-b border-neutral-200'
          }`}>
          <Text
            style={{fontFamily: FontTypes.secondary}}
            className="text-base text-black">
            {item?.label}
          </Text>
          <Text
            style={{fontFamily: FontTypes.secondary}}
            className="text-base text-black">
            {item?.labelMiddle}
          </Text>
          <RadioButton checked={value?.name === item?.name} />
        </View>
      </TouchableOpacity>
    );
  };

  if (presentation === 'bottomModal') {
    return (
      <BottomModal visible={visible} onClose={() => setVisible(false)}>
        <View className="pb-24">
          {items.map((item, index) => (
            <TouchableOpacity onPress={() => onItemPress(item)}>
              <View
                key={`${index}`}
                className={`h-14 w-full items-center justify-center ${
                  items?.length - 1 !== index && 'border-b border-neutral-200'
                }`}>
                <View
                  className={`h-full w-full items-center flex-row justify-between px-5`}>
                  <Text
                    style={{fontFamily: FontTypes.secondary}}
                    className="text-base text-black">
                    {item?.label}
                  </Text>
                  <RadioButton checked={value?.name === item?.name} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </BottomModal>
    );
  }

  return (
    <FullViewModal
      slide="toUp"
      visible={visible}
      onClosePress={() => setVisible(false)}
      header={null}>
      <View className="pb-24">
        <View className="bg-white h-12 items-center flex-row border-b border-neutral-200 pr-4">
          <View className="flex-1 flex-row">
            <View className="p-3">
              <MapIcon size={24} color="black" />
            </View>
            <TextInput
              className={` flex-1 text-${I18nManager.isRTL ? 'right' : 'left'}`}
              placeholder="Search Country"
              onChangeText={onSearchInput}
            />
          </View>
          <TouchableOpacity
            onPress={() => setVisible(false)}
            className="px-3 h-full items-center justify-center border-l border-neutral-300">
            <Text
              style={{fontFamily: FontTypes.secondary}}
              className="text-base text-black font-normal">
              cancel
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={searchQuery}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={{flexGrow: 1, paddingBottom: 100}}
        />

        {/* {searchQuery.map((item, index) => (
          <View
            key={`${index}`}
            className={`h-14 w-full items-center justify-center ${
              items?.length - 1 !== index && 'border-b border-neutral-200'
            }`}>
            <TouchableOpacity
              className={`h-full w-full items-center flex-row justify-between px-5`}
              onPress={() => onItemPress(item)}>
              <Text
                style={{fontFamily: FontTypes.secondary}}
                className="text-base text-black">
                {item?.label}
              </Text>
              <Text
                style={{fontFamily: FontTypes.secondary}}
                className="text-base text-black">
                {item?.labelMiddle}
              </Text>
              <RadioButton checked={value?.name === item?.name} />
            </TouchableOpacity>
          </View>
        ))} */}
      </View>
    </FullViewModal>
  );
};

export default ListPicker;
