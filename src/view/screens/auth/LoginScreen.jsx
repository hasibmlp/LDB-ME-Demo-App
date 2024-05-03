import React, {useContext, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {FontTypes} from '../../theme/fonts';
import MyTextInput from '../../common/input/MyTextInput';
import Button from '../../common/button/Button';
import {Colors} from '../../theme/colors';
import ToastMessage from '../../common/notification/ToastMessage';
import {Images} from '../../theme/image';
import {AuthContext} from '../../../core/redux/provider/authProvider';

const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required!'),
  password: Yup.string().required('Password is required!'),
});

const LoginScreen = ({}) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({});
  const {handleSignIn} = useContext(AuthContext);

  const navigation = useNavigation();

  const onLogin = async values => {
    console.log('----------------------------------------', values);
    setLoading(true);
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

    setLoading(false);

    if (!response.ok) {
      setStatus({
        message: 'Some thing went wrong, Please try again',
        status: 'error',
      });
    }

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));

    if (
      !data.Useruniqueid ||
      data.Useruniqueid === '0' ||
      data.Useruniqueid === '' ||
      data.Useruniqueid === null ||
      data.Status === false
    ) {
      setStatus({message: 'Wrong email or password', status: false});
      return;
    }

    handleSignIn(data);
    AsyncStorage.setItem('@userKey', data.Useruniqueid);
    AsyncStorage.setItem('@user', JSON.stringify(data));
    // navigation.navigate('MyDrawer');
    setStatus({message: data.Message, status: data.Status});
  };
  return (
    <>
      <ToastMessage status={status} />
      <KeyboardAvoidingView
        className="flex-1 w-full bg-white"
        enabled
        behavior="padding"
        keyboardVerticalOffset={50}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          className="w-full h-full"
          showsVerticalScrollIndicator={false}>
          <View className="flex-1 w-full px-10 ">
            <View className="mt-32 mb-20 items-center">
              <Image
                className="w-full h-[50] scale-[2]"
                source={Images.Logo.LogoTitle}
              />
              <Text
                style={{fontFamily: FontTypes.secondary}}
                className="text-lg text-[#000] uppercase mt-3 font-bold">
                Log in
              </Text>
            </View>

            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={loginValidationSchema}
              onSubmit={values => {
                onLogin(values);
              }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  <MyTextInput
                    handleChange={handleChange('email')}
                    handleBlur={handleBlur('email')}
                    value={values.email}
                    isSecureTextEntry={false}
                    error={errors.email}
                    touched={touched.email}
                    keyboardType="email-address"
                    label="Email"
                    captionText="Enter a valid email"
                  />

                  <MyTextInput
                    handleChange={handleChange('password')}
                    handleBlur={handleBlur('password')}
                    value={values.password}
                    isSecureTextEntry={true}
                    error={errors.password}
                    touched={touched.password}
                    label="Password"
                    captionText="Enter a password"
                  />
                  <View className="mt-5">
                    <MyButton onPress={handleSubmit} loading={loading} />
                  </View>
                </>
              )}
            </Formik>
            <Button label="Foget Password" type="action" upperCase={false} />
            <Button
              label="Or Create an Accont"
              type="action"
              upperCase={false}
              onPress={() => navigation.navigate('RegisterScreen')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default LoginScreen;

const MyButton = ({onPress, loading, active = true}) => {
  const renderBody = () => {
    if (loading) {
      return <ActivityIndicator color="white" />;
    }

    return <Text className="text-lg text-white">Login</Text>;
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
