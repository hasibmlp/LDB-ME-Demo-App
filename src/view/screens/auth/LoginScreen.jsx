import React from 'react';
import {
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

const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required!'),
  password: Yup.string().required('Password is required!'),
});

const forgotPasswordValidationSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required!'),
});

const LoginScreen = ({
  handleLogin,
  handleForgotPassword,
  isModalVisible,
  setModalVisible,
  customerRecoverLoading,
  loading,
  setStatusMessage,
}) => {
  const navigation = useNavigation();

  return (
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
            onSubmit={handleLogin}>
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
                  label="email"
                />

                <MyTextInput
                  handleChange={handleChange('password')}
                  handleBlur={handleBlur('password')}
                  value={values.password}
                  isSecureTextEntry={true}
                  error={errors.password}
                  touched={touched.password}
                  label="password"
                />
              </>
            )}
          </Formik>
          <MyButton />
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
  );
};

export default LoginScreen;

const MyButton = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.primary,
        paddingVertical: 14,
        borderRadius: 14,
        alignItems: 'center',
      }}
      className="w-full">
      <Text className="text-lg text-white">hello</Text>
    </TouchableOpacity>
  );
};
