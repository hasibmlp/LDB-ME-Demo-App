import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MyTextInput from '../../common/input/MyTextInput';
import {Colors} from '../../theme/colors';
import {
  ChevronDownIcon,
  ChevronUpDownIcon,
} from 'react-native-heroicons/outline';
import CheckBoxCircle from '../../common/checkbox/CheckBoxCircle';
import ToastMessage from '../../common/notification/ToastMessage';
import ListPicker from '../../common/modal/ListPicker';

import countryData from '../../config/countriesData.json';
import {useNavigation} from '@react-navigation/native';

const countries = countryData.map(item => ({
  label: item.name,
  value: {value: item.code, symbol: item.symbol},
  name: item.code,
}));

const registerValidationSchema = Yup.object({
  fullName: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  speciality: Yup.string(),
  phone: Yup.string().required(),
  instagram: Yup.string(),
  tiktok: Yup.string(),
  acceptsTerms: Yup.boolean(),
});

const specialityData = [
  {
    label: 'Doctor',
    labelMiddle: 'Doctor',
    value: 'Doctor',
    name: 'Doctor',
  },
  {
    label: 'Engineer',
    labelMiddle: 'Engineer',
    value: 'Engineer',
    name: 'Engineer',
  },
];

const RegisterScreen = ({handleRegister}) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({});

  const navigation = useNavigation();

  const [isCountryModalVisible, setCountryModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [isSpecialiyModalVisible, setSpecialiyModalVisible] = useState(false);
  const [selectedSpecialiy, setSelectedSpecialiy] = useState(null);

  const onCountryChange = item => {
    setSelectedCountry(item);
    setCountryModalVisible(false);
  };

  const onRegister = async values => {
    console.log('hello whlfd sfhalsfnl lsdhfd');
    setLoading(true);
    const response = await fetch(
      'https://ldb-me.ve-live.com/api/AdminApiProvider/RegisterUser',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      },
    );

    setLoading(false);

    if (!response.ok) {
      setStatus({
        message: 'Some thing went wrong, Please try again',
        status: false,
      });
    }

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));

    if (data?.Useruniqueid === '0' || data?.Useruniqueid === null) {
      setStatus({message: data.Message, status: false});
      return;
    }

    console.log('resutl ', JSON.stringify(data, null, 2));
    setStatus({message: data.Message, status: data.Status});
  };

  return (
    <>
      <ToastMessage status={status} />

      <KeyboardAvoidingView
        className="flex-1 bg-white"
        enabled
        behavior="padding"
        keyboardVerticalOffset={50}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          className="w-full h-full"
          showsVerticalScrollIndicator={false}>
          <View className="flex-1 w-full px-6 pt-10 pb-40">
            <Formik
              initialValues={{
                fullName: '',
                email: '',
                password: '',
                speciality: selectedSpecialiy?.value ?? '',
                country: selectedCountry?.value ?? '',
                phone: '',
                instagram: '',
                tiktok: '',
                acceptsTerms: false,
              }}
              validationSchema={registerValidationSchema}
              onSubmit={values => {
                onRegister(values);
              }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                values,
                errors,
                touched,
              }) => {
                return (
                  <View>
                    <MyTextInput
                      handleChange={handleChange('fullName')}
                      handleBlur={handleBlur('fullName')}
                      value={values.fullName}
                      isSecureTextEntry={false}
                      error={errors.fullName}
                      touched={touched.fullName}
                      label="Full Name"
                      captionText="Enter Full Name*"
                    />

                    <MyTextInput
                      handleChange={handleChange('email')}
                      handleBlur={handleBlur('email')}
                      value={values.email}
                      isSecureTextEntry={false}
                      error={errors.email}
                      touched={touched.email}
                      keyboardType="email-address"
                      label="Email"
                      captionText="Enter a valid email*"
                    />

                    <MyTextInput
                      handleChange={handleChange('password')}
                      handleBlur={handleBlur('password')}
                      value={values.password}
                      isSecureTextEntry={true}
                      error={errors.password}
                      touched={touched.password}
                      label="Password"
                      captionText="Enter a password*"
                    />

                    <TouchableOpacity
                      onPress={() => setSpecialiyModalVisible(true)}>
                      <View className="flex-row items-center justify-between py-2 mt-4">
                        <Text className="text-base text-black">
                          {selectedSpecialiy?.label || 'Select Speciality*'}
                        </Text>
                        <ChevronUpDownIcon size={24} color="black" />
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => setCountryModalVisible(true)}>
                      <View className="flex-row items-center justify-between py-1 pb-2 mt-4 pr-1">
                        <View>
                          <Text className="text-base text-black">
                            Select Speciality*
                          </Text>
                          <Text className="text-base text-black">
                            {selectedCountry?.label ?? 'Select'}
                          </Text>
                        </View>
                        <ChevronDownIcon
                          size={16}
                          color="black"
                          strokeWidth={2}
                        />
                      </View>
                    </TouchableOpacity>

                    <MyTextInput
                      handleChange={handleChange('phone')}
                      handleBlur={handleBlur('phone')}
                      value={values.phone}
                      isSecureTextEntry={false}
                      error={errors.phone}
                      touched={touched.phone}
                      label="Mobile Number"
                      captionText="Enter Mobile Number*"
                    />

                    <MyTextInput
                      handleChange={handleChange('instagram')}
                      handleBlur={handleBlur('instagram')}
                      value={values.instagram}
                      isSecureTextEntry={false}
                      error={errors.instagram}
                      touched={touched.instagram}
                      label="Instagram @"
                      captionText="Instagram@"
                    />

                    <MyTextInput
                      handleChange={handleChange('tiktok')}
                      handleBlur={handleBlur('tiktok')}
                      value={values.tiktok}
                      isSecureTextEntry={false}
                      error={errors.tiktok}
                      touched={touched.tiktok}
                      label="Tiktok @"
                      captionText="Tiktok @"
                    />

                    <View className="flex-row items-center my-3 mb-6 w-full justify-between px-4">
                      <TouchableOpacity
                        onPress={() =>
                          setFieldValue('acceptsTerms', !values.acceptsTerms)
                        }>
                        <CheckBoxCircle active={values.acceptsTerms} />
                      </TouchableOpacity>

                      <Text className="text-sm text-neutral-500 ml-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi, eligendi voluptatibus velit cumque
                        voluptates, dolor vitae cupiditate repudiandae quasi
                        maxime sed sunt? Odio officiis nisi sunt repellendus
                        sint, itaque culpa.
                      </Text>
                    </View>

                    <MyButton
                      onPress={handleSubmit}
                      loading={loading}
                      active={values.acceptsTerms}
                    />
                  </View>
                );
              }}
            </Formik>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {countries.length > 0 && (
        <ListPicker
          visible={isCountryModalVisible}
          setVisible={setCountryModalVisible}
          items={countries}
          onItemPress={onCountryChange}
          value={selectedCountry}
          presentation="fullView"
        />
      )}

      <ListPicker
        items={specialityData}
        visible={isSpecialiyModalVisible}
        setVisible={setSpecialiyModalVisible}
        onItemPress={value => {
          setSelectedSpecialiy(value);
          setSpecialiyModalVisible(false);
        }}
        value={selectedSpecialiy}
      />
    </>
  );
};

export default RegisterScreen;

const MyButton = ({onPress, loading, active}) => {
  const renderBody = () => {
    if (loading) {
      return <ActivityIndicator color="white" />;
    }

    return <Text className="text-lg text-white">hello</Text>;
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
