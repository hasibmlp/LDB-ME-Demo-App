import React, {useState} from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';

import {FontTypes} from '../../theme/fonts';
import MyTextInput from '../../common/input/MyTextInput';
import Button from '../../common/button/Button';
import {Colors} from '../../theme/colors';
import ToastMessage from '../../common/notification/ToastMessage';

const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required!'),
  password: Yup.string().required('Password is required!'),
});

const LoginScreen = ({}) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({});

  const onLogin = async values => {
    setLoading(true);
    const response = await fetch(
      'https://ldb-me.ve-live.com/api/AdminApiProvider/UserLogin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: 'user@gmail.com', password: '123456'}),
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

    setStatus({message: data.Message, status: data.Status});
  };

  const navigation = useNavigation();

  return (
    <>
      <ToastMessage status={status} />
      <KeyboardAvoidingView
        className="flex-1 w-full"
        enabled
        behavior="padding"
        keyboardVerticalOffset={50}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          className="w-full h-full"
          showsVerticalScrollIndicator={false}>
          <View className="flex-1 w-full px-10 ">
            <View className="mt-10 mb-20 items-center">
              <Text
                style={{fontFamily: FontTypes.primary}}
                className="text-4xl text-[#000]  mb-1">
                Hi
              </Text>
              <Text
                style={{fontFamily: FontTypes.secondary}}
                className="text-base text-[#000]  ">
                Hello
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
                    captionText="Enter a valid email"
                  />
                  <MyButton onPress={handleSubmit} loading={loading} />
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
