import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Dimensions, 
} from 'react-native';

import * as ScreenOrientation from 'expo-screen-orientation';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
// import { StatusBar } from 'expo-status-bar';

import WelcomeScreen from './screens/WelcomeScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'Qualy': require('./assets/fonts/Qualy.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat/Montserrat-Light.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat/Montserrat-Medium.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
  });
};

// Attempt to determine device orientation (without expo)
const getOrientation = (width, height) => {
  if (height > width) {
    return 'portrait'
  } else {
    return 'landscape'
  };
};

// Attempt to determine if the device is a phone or a tablet
const getDeviceType = (width, height) => {
  if (
    (height > width && height / width >= 1.7) || 
    (width > height && width / height >= 1.7)
  ) {
    return ('phone');
  } else {
    return ('tablet');
  };
};

export default function App() {
  const [ fontLoaded, setFontLoaded ] = useState(false);
  const deviceType = getDeviceType(Dimensions.get('window').width, Dimensions.get('window').height);

  const [ dimensionsInfo, setDimensionsInfo ] = useState({
    height: Dimensions.get('window').height, 
    width: Dimensions.get('window').width, 
    orientation: getOrientation(Dimensions.get('window').width, Dimensions.get('window').height),
    deviceType: deviceType, 
  });

  useEffect(() => {
    const updateDimensions = async () => {
      setDimensionsInfo({
        height: Dimensions.get('window').height, 
        width: Dimensions.get('window').width, 
        orientation: getOrientation(Dimensions.get('window').width, Dimensions.get('window').height),
        deviceType: deviceType, 
      });
    };
    Dimensions.addEventListener('change', updateDimensions);
    return () => {
      Dimensions.removeEventListener('change', updateDimensions);
    };
  });

  if (!fontLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.error(error)}
      />
    );
  };

  return (
    <View style={styles.container}>
        <WelcomeScreen dimensionsInfo={dimensionsInfo}/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
