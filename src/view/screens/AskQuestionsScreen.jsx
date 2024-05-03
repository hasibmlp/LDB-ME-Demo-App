import React, {useContext, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
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
import {AuthContext} from '../../core/redux/provider/authProvider';

// const data = [
//   {
//     label: 'session1',
//     labelMiddle: 'session1',
//     value: 'session1',
//     name: 'session1',
//   },
//   {
//     label: 'session2',
//     labelMiddle: 'session2',
//     value: 'session2',
//     name: 'session2',
//   },
//   {
//     label: 'session3',
//     labelMiddle: 'session3',
//     value: 'session3',
//     name: 'session3',
//   },
// ];

const result = [
  {
    Eventid: 1,
    id: 2,
    speaker_name: 'Prof. Reinhard Dummer, MD',
    speaker_designation:
      '<p>Vice-Chairman, Department of Dermatology University Hospital of Zurich, Switzerland</p>',
    speaker_bio: '',
    speaker_image:
      'https://stg-ldb-me.event-loreal.com//SpeakerImages/Event_1/speaker_Prof. Reinhard Dummer, MD_638488791952638786.png',
    speaker_type: '',
    image_path: null,
    Order: 1,
    OrderId: null,
  },
  {
    Eventid: 1,
    id: 1,
    speaker_name: 'Christopher HSU, MD',
    speaker_designation:
      '<p>Board Certified Dermatologist (Switzerland)</p><p>Global Dermatology; JEADV &amp; JAAD Editorial Boards</p><p>International Society of Teledermatology (Secretary General; Member of the Board)</p><p>&nbsp;<i>Switzerland</i></p>',
    speaker_bio: '',
    speaker_image:
      'https://stg-ldb-me.event-loreal.com//SpeakerImages/Event_1/speaker_Christophe HSU, MD_638478369753666366.png',
    speaker_type: '',
    image_path: null,
    Order: 2,
    OrderId: null,
  },
  {
    Eventid: 1,
    id: 3,
    speaker_name: 'Dr Abdullah Al Eissa, MD',
    speaker_designation:
      '<p>CEO and Consultant Dermatologist at Derma Clinic Saudi Arabia</p>',
    speaker_bio: '',
    speaker_image:
      'https://stg-ldb-me.event-loreal.com//SpeakerImages/Event_1/speaker_Dr Abdullah Al Eissa, MD_638488794490817628.png',
    speaker_type: '',
    image_path: null,
    Order: 3,
    OrderId: null,
  },
  {
    Eventid: 1,
    id: 4,
    speaker_name: 'Dr Tarun Chopra, Ph.D.',
    speaker_designation:
      '<p>L’Oréal Research and Innovation, leading the research and innovation team for L’Oréal in Singapore. Main focuses: Microbiome, Longevity, Agritech, and Foresight functions. Co-director of L´Oréal’s joint research laboratory with Singapore Centre for Environmental Life Sciences Engineering (SCELSE).India</p>',
    speaker_bio: '',
    speaker_image:
      'https://stg-ldb-me.event-loreal.com//SpeakerImages/Event_1/speaker_Dr Tarun Chopra, Ph.D._638488797266204857.png',
    speaker_type: '',
    image_path: null,
    Order: 4,
    OrderId: null,
  },
  {
    Eventid: 1,
    id: 5,
    speaker_name: 'Dr. Ru’aa Alharithy, MD, MScCH, FRCPC, FAAD',
    speaker_designation:
      '<p>Assistant Professor, PNU Dermatology Consultant, SFH CEO , Avant Clinic General Director of Scientific Programs – MEIDAM Association. Saudi Arabia</p>',
    speaker_bio: '',
    speaker_image:
      'https://stg-ldb-me.event-loreal.com//SpeakerImages/Event_1/speaker_Dr. Ru’aa Alharithy, MD, MScCH, FRCPC, FAAD_638488798850736683.png',
    speaker_type: '',
    image_path: null,
    Order: 5,
    OrderId: null,
  },
  {
    Eventid: 1,
    id: 7,
    speaker_name: 'Dr Nedhal Khalifa',
    speaker_designation:
      '<p>Founder &amp; Owner of Derma One Clinic in Bahrain Member of Bahrain Medical Society International member of the American Academy of Dermatology.Bahrain</p>',
    speaker_bio: '',
    speaker_image:
      'https://stg-ldb-me.event-loreal.com//SpeakerImages/Event_1/speaker_Dr Nedhal Khalifa_638488814083991161.png',
    speaker_type: '',
    image_path: null,
    Order: 6,
    OrderId: null,
  },
  {
    Eventid: 1,
    id: 8,
    speaker_name: 'Dr Khaled Al Nuaimi',
    speaker_designation:
      '<p>Consultant of Dermatology and Laser surgeon, Dr Khaled Al Nuaimi Specialized Clinics. Founder &amp; President of Middle East International Dermatology &amp; Aesthetic Medicine (MEIDAM) Conference &amp; Association in Dubai/UAE.United Arab Emirates</p>',
    speaker_bio: '',
    speaker_image:
      'https://stg-ldb-me.event-loreal.com//SpeakerImages/Event_1/speaker_Dr Khaled Al Nuaimi_638488816146200276.png',
    speaker_type: '',
    image_path: null,
    Order: 7,
    OrderId: null,
  },
  {
    Eventid: 1,
    id: 9,
    speaker_name: 'Dr Louai Salah',
    speaker_designation:
      '<p>Consultant Dermatologist, Lecturer in Fakeeh Medical College Deputy Officer for Treatment and Guidelines at the European Society for Laser and Energy-Based Devices (ESLD). Saudi Arabia</p>',
    speaker_bio: '',
    speaker_image:
      'https://stg-ldb-me.event-loreal.com//SpeakerImages/Event_1/speaker_Dr Louai Salah_638488819907370248.png',
    speaker_type: '',
    image_path: null,
    Order: 8,
    OrderId: null,
  },
  {
    Eventid: 1,
    id: 10,
    speaker_name: 'Dr Abdulhadi Jfri, MD, MSc, FRCPC, FAAD',
    speaker_designation:
      '<p>Assistant professor of dermatology, King Saud Bin Abdulaziz University for health sciences.</p><p>Princess Noorah Oncology Center &amp; King Abdulaziz Medical City Jeddah. Saudi Arabia</p>',
    speaker_bio: '',
    speaker_image:
      'https://stg-ldb-me.event-loreal.com//SpeakerImages/Event_1/speaker_Dr Abdulhadi Jfri, MD, MSc, FRCPC, FAAD_638488827340267819.png',
    speaker_type: '',
    image_path: null,
    Order: 9,
    OrderId: null,
  },
  {
    Eventid: 1,
    id: 11,
    speaker_name: 'Prof. Hoda Moneib',
    speaker_designation:
      '<p>Professor of Dermatology, Venereology and Andrology at the Faculty of Medicine, Ain shams university</p><p>Board Member Representative of the International Society of Dermoscopy for Egypt.</p><p>Active member of the American Academy of Dermatology</p><p>Executive Board of the International Dermoscopy Society. Qatar</p>',
    speaker_bio: '',
    speaker_image:
      'https://stg-ldb-me.event-loreal.com//SpeakerImages/Event_1/speaker_Prof. Hoda Moneib_638488828526926713.png',
    speaker_type: '',
    image_path: null,
    Order: 10,
    OrderId: null,
  },
  {
    Eventid: 1,
    id: 12,
    speaker_name: 'Prof. Sameer Zimmo, Ph.D.',
    speaker_designation:
      '<p>Professor &amp; Chairman of Dermatology at King Abdulaziz University,</p><p>Consultant Dermatologist  King AbdulAziz University &amp; JC clinics, Jeddah</p><p>American board of Dermatology</p><p>SAUDI ARABIA</p>',
    speaker_bio: '',
    speaker_image:
      'https://stg-ldb-me.event-loreal.com//SpeakerImages/Event_1/speaker_Prof. Sameer Zimmo, Ph.D._638488829517211095.png',
    speaker_type: '',
    image_path: null,
    Order: 11,
    OrderId: null,
  },
  {
    Eventid: 1,
    id: 13,
    speaker_name: 'Dr. Saad Altalhab, MBBS, SB-Derm',
    speaker_designation:
      '<p>Former dean, College of Medicine??Associate professor</p><p>and consultant dermatologist, Imam University</p><p>Saudi Arabia</p>',
    speaker_bio: '',
    speaker_image:
      'https://stg-ldb-me.event-loreal.com//SpeakerImages/Event_1/speaker_Dr. Saad Altalhab, MBBS, SB-Derm_638488830402331891.png',
    speaker_type: '',
    image_path: null,
    Order: 12,
    OrderId: null,
  },
];

const data = result.map(item => ({
  label: item.speaker_name,
  value: item.speaker_name,
  name: item.speaker_name,
}));

const AskQuestionsScreen = () => {
  const {user} = useContext(AuthContext);

  let parsedUser = {};
  if (typeof user === 'string' && user !== '') {
    parsedUser = JSON.parse(user) ?? {};
  } else if (typeof user === 'object') {
    parsedUser = user;
  }

  const [isModalVisible, setIsModalVisible] = useState();
  const [Session, setSession] = useState({});

  const [values, setValues] = useState({
    SpeakerName: data[0].value ?? '',
    AskedBy: parsedUser?.DoctorName ?? '',
    QuestionDetail: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({});

  console.log('ASKED QUESTIONS: ', JSON.stringify(values, null, 2));

  const onSubmit = async () => {
    setLoading(true);

    try {
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

      if (!response.ok) {
        throw new Error(
          `Network response was not ok (status: ${response.status})`,
        ); // More specific error message
      }

      const resData = await response.json();

      console.log(JSON.stringify(resData, null, 2));

      if (!resData.eventid) {
        setStatus({message: resData.Message, status: 'error'});
      } else {
        setStatus({
          message: 'Your question has been submitted.',
          status: resData.Status,
        });
      }
    } catch (error) {
      console.error('Error submitting question:', error);
      setStatus({
        message: 'An error occurred. Please try again.',
        status: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 w-full bg-white"
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}>
      <ToastMessage status={status} />

      <ScrollView>
        <View className="px- pb-40">
          <View className="px-24">
            <View className="w-full aspect-square">
              <Image
                className="w-full h-full"
                source={Images.Logo.LogoBanner}
              />
            </View>
          </View>
          <View className="border-b border-neutral-300 mb-4">
            <Text
              style={{color: Colors.primary}}
              className="text-4xl font-bold text-center pb-3">
              Ask Question
            </Text>
          </View>

          <View className="px-4">
            <View className="mb-4 ">
              <Text className="text-base mb-2 text-black">Session</Text>
              <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                <View className="py-[14px] px-2 bg-blue-100 rounded-lg flex-row items-center">
                  <ChevronUpDownIcon size={20} color="black" />
                  <Text className="text-base text-black ml-4">
                    {values.SpeakerName || 'select'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View className="mb-4 ">
              <Text className="text-base text-black mb-2">Your Name</Text>
              <TextInput
                onChangeText={value =>
                  setValues(prev => ({...prev, AskedBy: value}))
                }
                value={values.AskedBy}
                className="py-[14px] px-4 text-base bg-blue-100 rounded-lg"
              />
            </View>
            <View className="mb-6">
              <Text className="text-base mb-2 text-black">Ask Question</Text>
              <TextInput
                onChangeText={value =>
                  setValues(prev => ({...prev, QuestionDetail: value}))
                }
                value={values.QuestionDetail}
                className="py-[14px] px-4 bg-blue-100 text-base rounded-lg min-h-20"
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
          presentation="fullView"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AskQuestionsScreen;

const MyButton = ({onPress, loading, active = true}) => {
  const renderBody = () => {
    if (loading) {
      return <ActivityIndicator color="white" />;
    }

    return (
      <Text className="text-lg text-white font-medium">Submit Question</Text>
    );
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
