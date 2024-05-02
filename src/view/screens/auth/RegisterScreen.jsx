import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';

import {FontTypes} from '../../theme/fonts';
import MyTextInput from '../../common/input/MyTextInput';
import Button from '../../common/button/Button';
import {Colors} from '../../theme/colors';

const RegisterScreen = ({handleRegister, loading}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const registerValidationSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    acceptsMarketing: Yup.boolean(),
  });

  return (
    <>
      <KeyboardAvoidingView
        className="flex-1"
        enabled
        behavior="padding"
        keyboardVerticalOffset={50}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          className="w-full h-full"
          showsVerticalScrollIndicator={false}>
          <View className="flex-1 w-full px-10 pb-32">
            <View className="mt-10 mb-3 items-center">
              <Text
                style={{fontFamily: FontTypes.primary}}
                className="text-4xl text-[#000] font-noraml mb-1">
                "title"
              </Text>
              <Text
                style={{fontFamily: FontTypes.secondary}}
                className="text-base text-[#000]  ">
                subititme
              </Text>
            </View>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                acceptsMarketing: false,
              }}
              validationSchema={registerValidationSchema}
              onSubmit={values => {
                const newValues = {
                  firstName: values.firstName,
                  lastName: values.lastName,
                  email: values.email,
                  password: values.password,
                  acceptsMarketing: values.acceptsMarketing,
                };

                handleRegister(newValues);
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
                      handleChange={handleChange('firstName')}
                      handleBlur={handleBlur('firstName')}
                      value={values.firstName}
                      isSecureTextEntry={false}
                      error={errors.firstName}
                      touched={touched.firstName}
                      label="first name"
                    />

                    <MyTextInput
                      handleChange={handleChange('lastName')}
                      handleBlur={handleBlur('lastName')}
                      value={values.lastName}
                      isSecureTextEntry={false}
                      error={errors.lastName}
                      touched={touched.lastName}
                      label="last name"
                    />

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

                    <View className="flex-row items-center my-5 w-full justify-between border-b border-neutral-300 ">
                      <View className="max-w-[80%] pb-2">
                        <Text
                          style={{fontFamily: FontTypes.secondaryBold}}
                          className="ml-2 text-sm mb-1">
                          "nesletter"
                        </Text>
                        <Text
                          style={{fontFamily: FontTypes.secondary}}
                          className="ml-2 text-xs">
                          'newsLetter'
                        </Text>
                      </View>
                      <Switch
                        onValueChange={() =>
                          setFieldValue(
                            'acceptsMarketing',
                            !values.acceptsMarketing,
                          )
                        }
                        value={values.acceptsMarketing}
                      />
                    </View>

                    <MyButton />
                  </View>
                );
              }}
            </Formik>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default RegisterScreen;

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
