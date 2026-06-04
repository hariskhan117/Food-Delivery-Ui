import {
  View,
  Text,
  PermissionsAndroid,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
// import ImagePicker from '../../components/ImagePickeCmp/ImagePicker';
import CheckoutHeader from '../../components/Header/CheckoutHeader';
import React, { useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from '../../constant/Colors';
import InputCmp from '../../components/InputCmp/InputCmp';
import Button from '../../components/ButtonCmp/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

const MyProfile = () => {
  const [image, setImage] = useState();
  const navigation = useNavigation();
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App need access your camera',
          buttonPositive: 'Alllow',
          buttonNeutral: 'Ask me Later',
          buttonNegative: "Don't Allow",
        },
      );
      return granted;
    } catch (error) {
      console.warn(error);
    }
  };
  const openCamera = async type => {
    const Permissions = await requestCameraPermission();
    if (!Permissions) {
      Alert.alert('Permissions Denied', 'Camera Permission is required');
      return;
    }
    const options = {
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 1,
      saveToPhotos: true,
    };

    const response = await launchCamera(options);
    console.log('Response', response);

    if (response.assets && response.assets.length > 0) {
      setImage(response.assets[0].uri);
    }
  };

  const openGallery = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };
    const response = await launchImageLibrary(options);
    console.log('Response', response);

    if (response.assets && response.assets.length > 0) {
      setImage(response.assets[0].uri);
    }
  };

  const showImageOption = () => {
    console.log('Button pressed', showImageOption);

    Alert.alert(
      'Upload Photos',
      'Please select an option to upload your photo',
      [
        {
          text: 'Use Back Camera',
          onPress: () => openCamera('Back'),
        },
        {
          text: 'Use front Camera',
          onPress: () => openCamera('Front'),
        },
        {
          text: 'Choose From Gallery',
          onPress: openGallery,
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: true },
    );
  };
  let imagePreview = (
    <Image
      style={styles.profileImg}
      source={require('../../assets/images/profile_image.png')}
    />
  );
  if (image) {
    imagePreview = <Image style={styles.profileImg} source={{ uri: image }} />;
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <CheckoutHeader
          name="chevron-left"
          Children="My Profile"
          onPress={() => navigation.navigate('HomeScreen')}
        />

        <View style={styles.previewImage}>
          {imagePreview}

          <TouchableOpacity style={styles.uploadBtn} onPress={showImageOption}>
            <Feather
              name="camera"
              size={moderateScale(17)}
              color={Colors.white}
            />
          </TouchableOpacity>
        </View>
        <KeyboardAwareScrollView
          contentContainerStyle={
            {
              // paddingBottom: verticalScale(250),
            }
          }
          keyboardShouldPersistTaps="handled"
          // extraScrollHeight={50}
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}
        >
          <View style={styles.formContainer}>
            <InputCmp
              children="Full Name"
              textInputConfig={{
                placeholder: 'Enter your Name',
                autoCapitalize: 'none',
              }}
            />
            <InputCmp
              children="Date Of Birth"
              textInputConfig={{
                keyboardType: 'numeric',
                placeholder: 'Enter your Date Of Birth',
                autoCapitalize: 'none',
              }}
            />
            <InputCmp
              children="Email"
              textInputConfig={{
                keyboardType: 'email-address',
                placeholder: 'Enter your Email',
                autoCapitalize: 'none',
              }}
            />
            <InputCmp
              children="Phone Number"
              textInputConfig={{
                keyboardType: 'number-pad',
                placeholder: 'Enter your Mobile No',
                autoCapitalize: 'none',
              }}
            />
            <Button isOrange={true} children="Update Profile" />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  profileImg: {
    height: scale(127),
    width: scale(127),
    borderRadius: scale(20),
  },
  previewImage: {
    backgroundColor: Colors.white,
    marginTop: verticalScale(-20),
    borderTopRightRadius: scale(30),
    borderTopLeftRadius: scale(30),
    paddingVertical: verticalScale(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadBtn: {
    backgroundColor: Colors.orange600,
    width: scale(26),
    height: scale(26),
    borderRadius: scale(26 / 2),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 140,
    right: 135,
  },
  formContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: scale(25),
  },
});
