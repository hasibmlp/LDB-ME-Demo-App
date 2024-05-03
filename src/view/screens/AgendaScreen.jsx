import React, {memo, useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, Text, View} from 'react-native';
import TabHeader from '../common/TabHeader';
import {Images} from '../theme/image';
import AutoHeightImage from '../common/AutoHeightImage';
import {Colors} from '../theme/colors';
import Skeleton from '../common/skeleton/Skeleton';

// const tabs = [
//   {id: 'login', title: {value: 'Day 1 - Saturday April 20, 2024'}},
//   {id: 'register', title: {value: 'Day 2 - Sunday April 21, 2024'}},
// ];

const result = [
  {
    id: 1,
    Eventid: 1,
    Title: 'SATURDAY 20TH APRIL 2024',
    date: '2024-04-20',
    time: '09:00 - 10:30',
    Starttime: null,
    Endtime: null,
    topic: 'Road of Innovations',
    speaker_name: '',
    day: '1',
    specialcell: '',
    injection: '',
  },
  {
    id: 2,
    Eventid: 1,
    Title: 'SATURDAY 20TH APRIL 2024',
    date: '2024-04-20',
    time: '10:30 - 10:40',
    Starttime: null,
    Endtime: null,
    topic: 'Opening & Fight with Care ',
    speaker_name: 'Mohamed El Araby',
    day: '1',
    specialcell: '',
    injection: '',
  },
  {
    id: 3,
    Eventid: 1,
    Title: 'SATURDAY 20TH APRIL 2024',
    date: '2024-04-20',
    time: '10:40 - 10:48',
    Starttime: null,
    Endtime: null,
    topic: 'LDB medical introduction',
    speaker_name: 'Islam Ashour',
    day: '1',
    specialcell: '',
    injection: '',
  },
  {
    id: 4,
    Eventid: 1,
    Title: 'SATURDAY 20TH APRIL 2024',
    date: '2024-04-20',
    time: '10:48 - 11:10',
    Starttime: null,
    Endtime: null,
    topic: 'Some facets of facial pigment alterations',
    speaker_name: 'Professor Reinhard Dummer',
    day: '1',
    specialcell: '',
    injection: '',
  },
  {
    id: 5,
    Eventid: 1,
    Title: 'SATURDAY 20TH APRIL 2024',
    date: '2024-04-20',
    time: '11:10 - 11:15',
    Starttime: null,
    Endtime: null,
    topic: 'New MELA B3 ',
    speaker_name: 'Najah Sinno ',
    day: '1',
    specialcell: '',
    injection: '',
  },
  {
    id: 6,
    Eventid: 1,
    Title: 'SATURDAY 20TH APRIL 2024',
    date: '2024-04-20',
    time: '11:15 - 11:35',
    Starttime: null,
    Endtime: null,
    topic: 'Impact of exposome on skin health & ageing ',
    speaker_name: 'Dr Christopher Hsu',
    day: '1',
    specialcell: '',
    injection: '',
  },
  {
    id: 7,
    Eventid: 1,
    Title: 'SATURDAY 20TH APRIL 2024',
    date: '2024-04-20',
    time: '11:35 - 11:40',
    Starttime: null,
    Endtime: null,
    topic: 'LiftActiv against exposome ',
    speaker_name: 'Abdullah Yakoub',
    day: '1',
    specialcell: '',
    injection: '',
  },
  {
    id: 8,
    Eventid: 1,
    Title: 'SATURDAY 20TH APRIL 2024',
    date: '2024-04-20',
    time: '11:40 - 12:05',
    Starttime: null,
    Endtime: null,
    topic: 'Panel discussion',
    speaker_name: 'Dr Abdullah Al Eissa ',
    day: '1',
    specialcell: '',
    injection: '',
  },
  {
    id: 9,
    Eventid: 1,
    Title: 'SATURDAY 20TH APRIL 2024',
    date: '2024-04-20',
    time: '12:05 - 12:30',
    Starttime: null,
    Endtime: null,
    topic: 'Coffee Break',
    speaker_name: '',
    day: '1',
    specialcell: '',
    injection: '',
  },
  {
    id: 10,
    Eventid: 1,
    Title: 'SATURDAY 20TH APRIL 2024',
    date: '2024-04-20',
    time: '12:30 - 12:50',
    Starttime: null,
    Endtime: null,
    topic: 'Microbiome: From knowledge to effective dermatologic Solutions',
    speaker_name: 'Dr Tarun Chopra',
    day: '1',
    specialcell: '',
    injection: '',
  },
  {
    id: 11,
    Eventid: 1,
    Title: 'SATURDAY 20TH APRIL 2024',
    date: '2024-04-20',
    time: '12:50 - 13:10',
    Starttime: null,
    Endtime: null,
    topic: 'What’s new in Seborrheic Dermatitis in 2024?',
    speaker_name: 'Dr. Ru’aa Alharithy',
    day: '1',
    specialcell: '',
    injection: '',
  },
  {
    id: 12,
    Eventid: 1,
    Title: 'SATURDAY 20TH APRIL 2024',
    date: '2024-04-20',
    time: '13:10 - 13:15',
    Starttime: null,
    Endtime: null,
    topic: 'Dercos superiority study',
    speaker_name: 'Mohamed Ali',
    day: '1',
    specialcell: '',
    injection: '',
  },
  {
    id: 13,
    Eventid: 1,
    Title: 'SATURDAY 20TH APRIL 2024',
    date: '2024-04-20',
    time: '13:15 - 13:35',
    Starttime: null,
    Endtime: null,
    topic: 'Anti aging procedures & Integrated skin care regimens',
    speaker_name: 'Dr Nedal Khalifa ',
    day: '1',
    specialcell: '',
    injection: '',
  },
  {
    id: 14,
    Eventid: 1,
    Title: 'SATURDAY 20TH APRIL 2024',
    date: '2024-04-20',
    time: '13:35 - 13:40',
    Starttime: null,
    Endtime: null,
    topic: 'Skinceuticals integrated skin care',
    speaker_name: 'Mohamed Salem ',
    day: '1',
    specialcell: '',
    injection: '',
  },
  {
    id: 15,
    Eventid: 1,
    Title: 'SATURDAY 20TH APRIL 2024',
    date: '2024-04-20',
    time: '13:40 - 14:10',
    Starttime: null,
    Endtime: null,
    topic: 'Panel Discussion',
    speaker_name: 'Dr Khaled Al Nuaimi ',
    day: '1',
    specialcell: '',
    injection: '',
  },
  {
    id: 16,
    Eventid: 1,
    Title: 'SATURDAY 20TH APRIL 2024',
    date: '2024-04-20',
    time: '14:10 - 14:20',
    Starttime: null,
    Endtime: null,
    topic: 'Closing of the first day ',
    speaker_name: 'Islam Ashour ',
    day: '1',
    specialcell: '',
    injection: '',
  },
  {
    id: 17,
    Eventid: 1,
    Title: 'SATURDAY 20TH APRIL 2024',
    date: '2024-04-20',
    time: '14:20 - 15:25',
    Starttime: null,
    Endtime: null,
    topic: 'Lunch',
    speaker_name: '',
    day: '1',
    specialcell: '',
    injection: '',
  },
  {
    id: 18,
    Eventid: 1,
    Title: 'SATURDAY 20TH APRIL 2024',
    date: '2024-04-20',
    time: '19:30 - ',
    Starttime: null,
    Endtime: null,
    topic: 'The Arena',
    speaker_name: '',
    day: '1',
    specialcell: '',
    injection: '',
  },
  {
    id: 19,
    Eventid: 1,
    Title: 'SUNDAY 21ST APRIL 2024',
    date: '2024-04-21',
    time: '10:00 - 10:30',
    Starttime: null,
    Endtime: null,
    topic: 'Coffee Break ',
    speaker_name: '',
    day: '2',
    specialcell: '',
    injection: '',
  },
  {
    id: 20,
    Eventid: 1,
    Title: 'SUNDAY 21ST APRIL 2024',
    date: '2024-04-21',
    time: '10:30 - 10:37',
    Starttime: null,
    Endtime: null,
    topic: 'L’Oreal for the future ',
    speaker_name: 'Remi Nasser',
    day: '2',
    specialcell: '',
    injection: '',
  },
  {
    id: 21,
    Eventid: 1,
    Title: 'SUNDAY 21ST APRIL 2024',
    date: '2024-04-21',
    time: '10:37 - 11:10',
    Starttime: null,
    Endtime: null,
    topic: 'Staying a step ahead in Social Media ',
    speaker_name:
      'Leila Al Samad, Dr Louai Salah, Dr Abdulhadi Jifri, Yasmin Yossry',
    day: '2',
    specialcell: '',
    injection: '',
  },
  {
    id: 22,
    Eventid: 1,
    Title: 'SUNDAY 21ST APRIL 2024',
    date: '2024-04-21',
    time: '11:10 - 11:40',
    Starttime: null,
    Endtime: null,
    topic: 'How to shoot the perfect video on social media. ',
    speaker_name: 'Snapchat Team',
    day: '2',
    specialcell: '',
    injection: '',
  },
  {
    id: 23,
    Eventid: 1,
    Title: 'SUNDAY 21ST APRIL 2024',
    date: '2024-04-21',
    time: '11:40 - 12:00',
    Starttime: null,
    Endtime: null,
    topic: 'Trichoscopy findings in alopecia',
    speaker_name: 'Prof Huda Muneeb',
    day: '',
    specialcell: '',
    injection: '',
  },
  {
    id: 24,
    Eventid: 1,
    Title: 'SUNDAY 21ST APRIL 2024',
    date: '2024-04-21',
    time: '12:00 - 12:05',
    Starttime: null,
    Endtime: null,
    topic: 'Anti Hair loss Solution ',
    speaker_name: 'Christine Osvaldo ',
    day: '2',
    specialcell: '',
    injection: '',
  },
  {
    id: 25,
    Eventid: 1,
    Title: 'SUNDAY 21ST APRIL 2024',
    date: '2024-04-21',
    time: '12:05 - 12:25',
    Starttime: null,
    Endtime: null,
    topic: 'Role of Dermocosmetics in managing symptoms of AD ',
    speaker_name: 'Prof Sameer Zimmo',
    day: '2',
    specialcell: '',
    injection: '',
  },
  {
    id: 26,
    Eventid: 1,
    Title: 'SUNDAY 21ST APRIL 2024',
    date: '2024-04-21',
    time: '12:25 - 12:30',
    Starttime: null,
    Endtime: null,
    topic: 'Cerave Observational Study ME',
    speaker_name: 'Najah Sinno',
    day: '2',
    specialcell: '',
    injection: '',
  },
  {
    id: 27,
    Eventid: 1,
    Title: 'SUNDAY 21ST APRIL 2024',
    date: '2024-04-21',
    time: '12:30 - 13:00',
    Starttime: null,
    Endtime: null,
    topic: 'Panel Discussion ',
    speaker_name: 'Dr Saad Al Talhab',
    day: '2',
    specialcell: '',
    injection: '',
  },
  {
    id: 28,
    Eventid: 1,
    Title: 'SUNDAY 21ST APRIL 2024',
    date: '2024-04-21',
    time: '13:00 - 13:10',
    Starttime: null,
    Endtime: null,
    topic: 'Closing',
    speaker_name: '',
    day: '2',
    specialcell: '',
    injection: '',
  },
  {
    id: 29,
    Eventid: 1,
    Title: 'SUNDAY 21ST APRIL 2024',
    date: '2024-04-21',
    time: '13:10 - 14:10',
    Starttime: null,
    Endtime: null,
    topic: 'Lunch',
    speaker_name: '',
    day: '2',
    specialcell: '',
    injection: '',
  },
  {
    id: 30,
    Eventid: 1,
    Title: '\tSUNDAY 21ST APRIL 2024',
    date: '2024-04-21',
    time: ' - ',
    Starttime: null,
    Endtime: null,
    topic: '',
    speaker_name: '',
    day: '2',
    specialcell: 'Free afternoon',
    injection: '',
  },
  {
    id: 31,
    Eventid: 1,
    Title: '\tSUNDAY 21ST APRIL 2024',
    date: '2024-04-21',
    time: '07:30 - ',
    Starttime: null,
    Endtime: null,
    topic: 'Riyadh Boulevard ',
    speaker_name: '',
    day: '2',
    specialcell: '',
    injection: '',
  },
];

const screenWidth = Dimensions.get('window').width;

const AgendaScreen = () => {
  const [angendaData, setAgendaData] = useState([]);
  const [activeTab, setActiveTab] = useState();
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(true);

  const renderItem = ({item, index}) => {
    if (item.time !== ' - ' && item.time !== null) {
      return (
        <View className="flex-row justify-between px-4 py-5 items-left items-center bg-cyan-50 border-b border-cyan-500">
          <Text className="text-left w-40 text-black">{item.time}</Text>
          <View className="flex-1 gap-y-2">
            <Text className="text-left text-black">{item.topic}</Text>
            {item.speaker_name && (
              <Text className="text-left text-black font-semibold">
                {item.speaker_name}
              </Text>
            )}
          </View>
        </View>
      );
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://ldb-me.ve-live.com/api/AdminApiProvider/LoadAgenda?EventId=1',
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
          setAgendaData(data.Data?.Result);
        }
      } catch (error) {
        console.error('Error fetching speakers data:', error);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);
  // console.log('AGENDA DATA', JSON.stringify(angendaData, null, 2));

  useEffect(() => {
    if (angendaData.length > 0) {
      try {
        setLoading(true);
        const uniqueDaysSet = new Set();

        const tabsData = result.reduce((prev, item) => {
          const {day, Title} = item || {};

          if (day !== '' && !uniqueDaysSet.has(`${day}`)) {
            uniqueDaysSet.add(`${day}`);
            prev.push({
              id: day,
              title: {value: Title},
            });
          }

          return prev;
        }, []);

        console.log('AGENDA DATA', JSON.stringify(tabsData, null, 2));
        setTabs(tabsData);
        setActiveTab(tabsData[0]);
      } catch (error) {
        console.error('Error processing agenda data:', error);
        // Handle the error here (e.g., display an error message to the user)
      } finally {
        setLoading(false);
      }
    }
  }, [angendaData.length]);

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

  if (angendaData.length === 0) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>No Agenda</Text>
      </View>
    );
  }
  return (
    <View className="bg-white">
      <FlatList
        data={result.filter(item => item.day === activeTab?.id)}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Header
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        }
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

export default AgendaScreen;

const Header = memo(({activeTab, setActiveTab, tabs}) => {
  return (
    <View className="px-1">
      <View className="mb-3">
        <AutoHeightImage
          source={Images.Logo.LogoBanner}
          width={1000}
          height={500}
        />
      </View>
      <Text
        style={{color: Colors.primary}}
        className="text-4xl font-bold text-center pb-3">
        Agenda
      </Text>
      <View className="bg-white py-4 border-t border-neutral-300">
        <TabHeader
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabsArray={tabs}
        />
      </View>

      <View className="flex-row justify-between px-4 h-8 items-left items-center bg-neutral-400">
        <Text className="text-left w-40 text-white font-semibold">Time</Text>
        <Text className="text-lg text-left flex-1 text-white font-semibold">
          Details
        </Text>
      </View>
    </View>
  );
});
