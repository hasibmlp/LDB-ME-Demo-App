import React, {memo, useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import TabHeader from '../common/TabHeader';
import {Images} from '../theme/image';
import AutoHeightImage from '../common/AutoHeightImage';
import {Colors} from '../theme/colors';
import Skeleton from '../common/skeleton/Skeleton';
import {ChevronRightIcon} from 'react-native-heroicons/outline';
import RenderHTML from 'react-native-render-html';
import {useNavigation} from '@react-navigation/native';

// const tabs = [
//   {id: 'login', title: {value: 'Day 1 - Saturday April 20, 2024'}},
//   {id: 'register', title: {value: 'Day 2 - Sunday April 21, 2024'}},
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

const screenWidth = Dimensions.get('window').width;

const SpeakersScreen = () => {
  const [speakersData, setSpeakersData] = useState([]);

  const [loading, setLoading] = useState(false);

  const {width} = useWindowDimensions();
  const navigation = useNavigation();

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://ldb-me.ve-live.com/api/AdminApiProvider/LoadSpeakers?EventId=1',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        if (!response.ok) {
          throw new Error('Error fetching speakers data');
        }

        const data = await response.json();

        if (data) {
          setSpeakersData(data.Data?.Result);
        }
      } catch (error) {
        console.error('Error fetching speakers data:', error);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);
  console.log(JSON.stringify(speakersData, null, 2));

  const renderItem = ({item, index}) => {
    if (item.id !== null) {
      return (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('SpeakerDetailsScreen', {speaker: item})
          }>
          <View className="flex-row justify-between px-5 py-5 items-center ">
            <View className="w-16 h-16  rounded-full mr-4">
              <Image
                className="w-full h-full"
                source={{uri: item.speaker_image}}
              />
            </View>

            <View className="flex-1 ">
              {item.speaker_name && (
                <Text className="text-lg text-left  text-black font-semibold">
                  {item.speaker_name}
                </Text>
              )}

              <RenderHTML
                style
                contentWidth={width}
                source={{html: item.speaker_designation}}
                tagsStyles={{
                  p: {
                    margin: 0,
                    padding: 0,
                    color: 'gray',
                  },
                }}
              />
            </View>

            <View className="self-stretch px-3 rounded-full justify-center">
              <ChevronRightIcon size={20} color="gray" />
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  };

  if (loading) {
    return (
      <View>
        <Skeleton width={screenWidth} height={250} style={{marginBottom: 12}} />
        <View className="items-center mb-3">
          <Skeleton width={screenWidth / 2} height={10} />
        </View>

        <View className="border-y border-neutral-300 flex-row justify-between py-6">
          <View className="flex-1 items-center">
            <View className="items-center">
              <Skeleton
                width={screenWidth / 4}
                height={10}
                style={{marginBottom: 12}}
              />
              <Skeleton width={screenWidth / 3} height={10} />
            </View>
          </View>
          <View className="flex-1 items-center">
            <View className="items-center">
              <Skeleton
                width={screenWidth / 4}
                height={10}
                style={{marginBottom: 12}}
              />
              <Skeleton width={screenWidth / 3} height={10} />
            </View>
          </View>
        </View>

        <View className="border-b border-neutral-300">
          <View className="flex-row justify-between py-3 items-center px-4">
            <View className="w-[30%] items-center">
              <Skeleton width={screenWidth / 4} height={10} />
            </View>
            <View className="flex-1 items-center">
              <Skeleton width={screenWidth / 3} height={10} />
            </View>
          </View>
        </View>

        <View className="border-b border-neutral-300">
          <View className="flex-row justify-between py-6 items-center px-4">
            <View className="w-[30%] items-center">
              <Skeleton width={screenWidth / 4} height={10} />
            </View>
            <View className="flex-1 items-center">
              <Skeleton
                width={screenWidth / 2}
                height={10}
                style={{marginBottom: 12}}
              />
              <Skeleton width={screenWidth / 3} height={10} />
            </View>
          </View>
        </View>
        <View className="border-b border-neutral-300">
          <View className="flex-row justify-between py-6 items-center px-4">
            <View className="w-[30%] items-center">
              <Skeleton width={screenWidth / 4} height={10} />
            </View>
            <View className="flex-1 items-center">
              <Skeleton
                width={screenWidth / 2}
                height={10}
                style={{marginBottom: 12}}
              />
              <Skeleton width={screenWidth / 3} height={10} />
            </View>
          </View>
        </View>
        <View className="border-b border-neutral-300">
          <View className="flex-row justify-between py-6 items-center px-4">
            <View className="w-[30%] items-center">
              <Skeleton width={screenWidth / 4} height={10} />
            </View>
            <View className="flex-1 items-center">
              <Skeleton
                width={screenWidth / 2}
                height={10}
                style={{marginBottom: 12}}
              />
              <Skeleton width={screenWidth / 3} height={10} />
            </View>
          </View>
        </View>
        <View className="border-b border-neutral-300">
          <View className="flex-row justify-between py-6 items-center px-4">
            <View className="w-[30%] items-center">
              <Skeleton width={screenWidth / 4} height={10} />
            </View>
            <View className="flex-1 items-center">
              <Skeleton
                width={screenWidth / 2}
                height={10}
                style={{marginBottom: 12}}
              />
              <Skeleton width={screenWidth / 3} height={10} />
            </View>
          </View>
        </View>
        <View className="border-b border-neutral-300">
          <View className="flex-row justify-between py-6 items-center px-4">
            <View className="w-[30%] items-center">
              <Skeleton width={screenWidth / 4} height={10} />
            </View>
            <View className="flex-1 items-center">
              <Skeleton
                width={screenWidth / 2}
                height={10}
                style={{marginBottom: 12}}
              />
              <Skeleton width={screenWidth / 3} height={10} />
            </View>
          </View>
        </View>
        <View className="border-b border-neutral-300">
          <View className="flex-row justify-between py-6 items-center px-4">
            <View className="w-[30%] items-center">
              <Skeleton width={screenWidth / 4} height={10} />
            </View>
            <View className="flex-1 items-center">
              <Skeleton
                width={screenWidth / 2}
                height={10}
                style={{marginBottom: 12}}
              />
              <Skeleton width={screenWidth / 3} height={10} />
            </View>
          </View>
        </View>
      </View>
    );
  }

  if (speakersData.length === 0) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>No Speakers</Text>
      </View>
    );
  }

  return (
    <View style={{backgroundColor: Colors.backgroud}} className="bg-">
      <FlatList
        data={result}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Header />}
        renderItem={renderItem}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 100,
          paddingHorizontal: 4,
        }}
      />
    </View>
  );
};

export default SpeakersScreen;

const Header = memo(() => {
  return (
    <View className="">
      <View className="mb-5">
        <View className="px-24">
          <View className="w-full aspect-square">
            <Image className="w-full h-full" source={Images.Logo.LogoBanner} />
          </View>
        </View>
      </View>
      <View className="border-b border-neutral-300 mb-3">
        <Text
          style={{color: Colors.primary}}
          className="text-4xl font-bold text-center pb-3">
          Speakers
        </Text>
      </View>
    </View>
  );
});
