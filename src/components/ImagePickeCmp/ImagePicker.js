import {
  View,
  Text,
  PermissionsAndroid,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { moderateScale, scale } from '../../constant/Scaling';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from '../../constant/Colors';

const ImagePicker = ({ onTakeImage }) => {
  const [image, setImage] = useState();
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
    const openCamera = async type => {
      const Permissions = requestCameraPermission();
      if (!Permissions) {
        Alert.alert('Permissions Denied', 'Camera Permission is required');
        return;
      }
      const options = {
        cameraType: type,
        mediaType: 'photo',
        quality: 1,
        saveToPhotos: true,
      };

      const response = await launchCamera(options);
      if (response.assets && response.assets.length > 0) {
        setImage(response.assets[0].uri);
        onTakeImage(response.assets[0].uri);
      }
    };

    const openGallery = async () => {
      const options = {
        mediaType: 'photo',
        quality: 1,
      };
      const response = await launchImageLibrary(options);
      if (response.assets && response.assets.length > 0) {
        setImage(response.assets[0].uri);
        onTakeImage(response.assets[0].uri);
      }
    };

    const showImageOption = () => {
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
  };
  let imagePreview = (
    <Image
      style={styles.profileImg}
      source={require('../../assets/images/profileImage.png')}
    />
  );
  if (image) {
    imagePreview = <Image style={styles.profileImg} source={{ uri: image }} />;
  }

  return (
    <View>
      <View style={styles.previewImage}>{imagePreview}</View>
      <TouchableOpacity>
        <Feather
          name='camera' size={moderateScale(20)} color={Colors.white}/>
      </TouchableOpacity>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  container: {},
  profileImg: {
    height: scale(127),
    width: scale(127),
    borderRadius: scale(20),
  },
  previewImage: {
    height: scale(127),
    width: scale(127),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
