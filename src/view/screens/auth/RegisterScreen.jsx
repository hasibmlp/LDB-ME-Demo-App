import React, {useContext, useEffect, useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';

import MyTextInput from '../../common/input/MyTextInput';
import {Colors} from '../../theme/colors';
import {ChevronUpDownIcon} from 'react-native-heroicons/outline';
import CheckBoxCircle from '../../common/checkbox/CheckBoxCircle';
import ToastMessage from '../../common/notification/ToastMessage';
import ListPicker from '../../common/modal/ListPicker';

import countryData from '../../config/countriesData.json';
import {FontTypes} from '../../theme/fonts';
import {AuthContext} from '../../../core/redux/provider/authProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const countries = countryData.map(item => ({
  label: `${item.emoji}  ${item.name}`,
  value: {value: item.code, symbol: item.symbol},
  name: item.code,
  v: item.name,
}));

const registerValidationSchema = Yup.object({
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  speciality: Yup.string(),
  mobile: Yup.string().required(),
  instagramLink: Yup.string(),
  tikTokLink: Yup.string(),
  userconsent: Yup.string(),
});

const specialityData = [
  {
    label: 'Doctor',
    labelMiddle: 'Doctor',
    value: 'Doctor',
    name: 'Doctor',
    v: 'doctor',
  },
  {
    label: 'Engineer',
    labelMiddle: 'Engineer',
    value: 'Engineer',
    name: 'Engineer',
    v: 'doctor',
  },
];

const RegisterScreen = ({handleRegister}) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({});

  const navigation = useNavigation();
  const {handleSignIn} = useContext(AuthContext);

  const [isCountryModalVisible, setCountryModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find(item => item.v === 'United Arab Emirates'),
  );

  const [isSpecialiyModalVisible, setSpecialiyModalVisible] = useState(false);
  const [selectedSpecialiy, setSelectedSpecialiy] = useState(specialityData[0]);

  const onCountryChange = item => {
    setSelectedCountry(item);
    setCountryModalVisible(false);
  };

  const onLogin = async values => {
    const response = await fetch(
      'https://ldb-me.ve-live.com/api/AdminApiProvider/UserLogin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      },
    );

    if (!response.ok) {
      setStatus({
        message: 'Some thing went wrong, Please try again',
        status: 'error',
      });
      setLoading(false);
    }

    const data = await response.json();

    if (
      !data.Useruniqueid ||
      data.Useruniqueid === '0' ||
      data.Useruniqueid === '' ||
      data.Useruniqueid === null ||
      data.Status === false
    ) {
      setStatus({message: data.Message, status: false});
      setLoading(false);
      return;
    }

    handleSignIn(data);
    AsyncStorage.setItem('@userKey', data.Useruniqueid);
    AsyncStorage.setItem('@user', JSON.stringify(data));
    // navigation.navigate('MyDrawer');
    setStatus({message: data.Message, status: data.Status});
    setLoading(false);
  };

  const onRegister = async values => {
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

    if (!response.ok) {
      setStatus({
        message: 'Some thing went wrong, Please try again',
        status: false,
      });
      setLoading(false);
    }

    const data = await response.json();

    if (data?.Useruniqueid === '0' || data?.Useruniqueid === null) {
      setStatus({message: data.Message, status: false});
      setLoading(false);
      return;
    }

    onLogin({email: values.email, password: values.password});
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
          <View className="flex-1 w-full px-10 pb-40">
            <View className="mb-5 items-center mt-3">
              <Text
                style={{fontFamily: FontTypes.secondary}}
                className="text-lg text-[#000] uppercase font-bold">
                Register
              </Text>
            </View>

            <Formik
              initialValues={{
                username: '',
                email: '',
                password: '',
                speciality: selectedSpecialiy?.v ?? '',
                country: selectedCountry?.v ?? '',
                mobile: '',
                instagramLink: '',
                tikTokLink: '',
                userconsent: false,
              }}
              validationSchema={registerValidationSchema}
              onSubmit={values => {
                values.country = selectedCountry?.v ?? 'United Arab Emirates';

                values.speciality = selectedSpecialiy?.v ?? 'doctor';
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
                      handleChange={handleChange('username')}
                      handleBlur={handleBlur('username')}
                      value={values.username}
                      isSecureTextEntry={false}
                      error={errors.username}
                      touched={touched.username}
                      label="Full Name"
                      captionText="Enter Full Name *"
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
                      captionText="Enter a valid Email *"
                    />

                    <MyTextInput
                      handleChange={handleChange('password')}
                      handleBlur={handleBlur('password')}
                      value={values.password}
                      isSecureTextEntry={true}
                      error={errors.password}
                      touched={touched.password}
                      label="Password"
                      captionText="Enter a Password *"
                    />

                    <TouchableOpacity
                      onPress={() => setSpecialiyModalVisible(true)}>
                      <View className="w-full flex-row items-center justify-between py-1 pb-2 mt-4  ">
                        <View className="w-full ">
                          <View className="w-full flex-row justify-between ">
                            <Text className="text-base text-black">
                              Select Speciality *
                            </Text>
                            <ChevronUpDownIcon size={24} color="black" />
                          </View>
                          <Text className="text-base text-black">
                            {selectedSpecialiy?.label}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => setCountryModalVisible(true)}>
                      <View className="w-full flex-row items-center justify-between mt-1 py-1 pb-2 ">
                        <View className="w-full ">
                          <View className="w-full flex-row justify-between ">
                            <Text className="text-base text-black">
                              Select Country *
                            </Text>
                            <ChevronUpDownIcon size={24} color="black" />
                          </View>
                          <Text className="text-base text-black">
                            {selectedCountry?.label}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <MyTextInput
                      handleChange={handleChange('mobile')}
                      handleBlur={handleBlur('mobile')}
                      value={values.mobile}
                      isSecureTextEntry={false}
                      error={errors.mobile}
                      touched={touched.mobile}
                      label="Mobile Number"
                      captionText="Enter Mobile Number *"
                    />

                    <MyTextInput
                      handleChange={handleChange('instagramLink')}
                      handleBlur={handleBlur('instagramLink')}
                      value={values.instagramLink}
                      isSecureTextEntry={false}
                      error={errors.instagramLink}
                      touched={touched.instagramLink}
                      label="Instagram"
                      captionText="Instagram start with @"
                    />

                    <MyTextInput
                      handleChange={handleChange('tikTokLink')}
                      handleBlur={handleBlur('tikTokLink')}
                      value={values.tikTokLink}
                      isSecureTextEntry={false}
                      error={errors.tikTokLink}
                      touched={touched.tikTokLink}
                      label="Tiktok"
                      captionText="Tiktok start with @"
                    />

                    <View className="flex-row items-center my-3  w-full justify-between ">
                      <TouchableOpacity
                        onPress={() =>
                          setFieldValue(
                            'userconsent',
                            values.userconsent === 'true' ? 'false' : 'true',
                          )
                        }>
                        <CheckBoxCircle
                          active={values.userconsent === 'true'}
                        />
                      </TouchableOpacity>

                      <Text className="text-sm text-neutral-500 ml-4 pr-5">
                        By clicking this box you give your consent to l'Orial to
                        process the provided data to the following puropose.
                        Filling l'Orial requirement to read and record the
                        identity of the address is in actives and event use for
                        compliance prupose and replicating accoridng to l'Orial
                        and country specific. compliance regulation and code of
                        conduct
                      </Text>
                    </View>

                    <View className="mt-5">
                      <MyButton
                        title="Register"
                        onPress={handleSubmit}
                        loading={loading}
                        active={values.userconsent === 'true'}
                      />
                    </View>
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

const MyButton = ({title, onPress, loading, active}) => {
  const renderBody = () => {
    if (loading) {
      return <ActivityIndicator color="white" />;
    }

    return <Text className="text-lg text-white">{title}</Text>;
  };
  return (
    <TouchableOpacity
      disabled={!active || loading}
      onPress={onPress}
      style={{
        backgroundColor: Colors.secondary,
        opacity: !active && 0.5,
        paddingVertical: 14,
        borderRadius: 14,
        alignItems: 'center',
      }}
      className="w-full">
      {renderBody()}
    </TouchableOpacity>
  );
};
