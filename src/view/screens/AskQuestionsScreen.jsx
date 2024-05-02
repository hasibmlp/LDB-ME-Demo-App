import React, {useState} from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AutoHeightImage from '../common/AutoHeightImage';
import {Images} from '../theme/image';
import {Colors} from '../theme/colors';
import {ChevronUpDownIcon} from 'react-native-heroicons/outline';
import ListPicker from '../common/modal/ListPicker';
import ToastMessage from '../common/notification/ToastMessage';

const data = [
  {
    label: 'session1',
    labelMiddle: 'session1',
    value: 'session1',
    name: 'session1',
  },
  {
    label: 'session2',
    labelMiddle: 'session2',
    value: 'session2',
    name: 'session2',
  },
  {
    label: 'session3',
    labelMiddle: 'session3',
    value: 'session3',
    name: 'session3',
  },
];

const AskQuestionsScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState();
  const [Session, setSession] = useState({});
  const [values, setValues] = useState({
    SpeakerName: '',
    AskedBy: '',
    QuestionDetail: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({});

  const onSubmit = async () => {
    const response = await fetch(
      'https://ldb-me.event-loreal.com/api/AdminApiProvider/AskQuestion',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          SpeakerName: 'testuser1',
          AskedBy: 'user',
          QuestionDetail: 'ask',
          EventId: '1',
        }),
      },
    );

    setLoading(false);

    if (!response.ok) {
      setStatus({
        message: 'Some thing went wrong, Please try again',
        status: 'error',
      });
    }

    const resData = await response.json();

    console.log(JSON.stringify(resData, null, 2));

    if (!resData.eventid) {
      setStatus({message: resData.Message, status: false});
    }

    setStatus({message: 'Message Sent', status: resData.Status});
  };

  return (
    <>
      <ToastMessage status={status} />
      <View>
        <View className="px-1">
          <View className="mb-5">
            <AutoHeightImage
              source={Images.Logo.LogoBanner}
              width={1000}
              height={500}
            />
          </View>
          <View className="border-b border-neutral-300 mb-3">
            <Text
              style={{color: Colors.primary}}
              className="text-4xl font-bold text-center pb-3">
              Ask Question
            </Text>
          </View>

          <View className="px-4">
            <View className="mb-3 ">
              <Text className="text-lg mb-4">You name</Text>
              <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                <View className="py-5 px-2 bg-blue-200 rounded-lg flex-row items-center">
                  <ChevronUpDownIcon size={20} color="black" />
                  <Text className="text-lg text-black ml-4">
                    {values.SpeakerName || 'select'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View className="mb-3 ">
              <Text className="text-lg mb-4">Your name</Text>
              <TextInput
                onChangeText={value =>
                  setValues(prev => ({...prev, AskedBy: value}))
                }
                value={values.AskedBy}
                className="py-5 px-4 bg-blue-200 rounded-lg"
              />
            </View>
            <View className="mb-6">
              <Text className="text-lg mb-4">Ask Question</Text>
              <TextInput
                onChangeText={value =>
                  setValues(prev => ({...prev, QuestionDetail: value}))
                }
                value={values.QuestionDetail}
                className="py-5 px-4 bg-blue-200 rounded-lg"
                multiline={true}
              />
            </View>
            <MyButton
              onPress={onSubmit}
              loading={loading}
              active={values.QuestionDetail?.length > 0}
            />
          </View>
        </View>

        <ListPicker
          items={data}
          visible={isModalVisible}
          setVisible={setIsModalVisible}
          onItemPress={value => {
            setValues(prev => ({...prev, SpeakerName: value.value}));
            setIsModalVisible(false);
          }}
          value={data.find(item => item.value === values?.SpeakerName)}
        />
      </View>
    </>
  );
};

export default AskQuestionsScreen;

const MyButton = ({onPress, loading, active = true}) => {
  const renderBody = () => {
    if (loading) {
      return <ActivityIndicator color="white" />;
    }

    return (
      <Text className="text-lg text-white uppercase font-medium">Submit</Text>
    );
  };
  return (
    <TouchableOpacity
      disabled={!active}
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
