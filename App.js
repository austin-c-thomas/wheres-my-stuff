import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Dimensions, 
} from 'react-native';

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

export default function App() {
  const [ fontLoaded, setFontLoaded ] = useState(false);
  const [ availableDeviceHeight, setAvailableDeviceHeight ] = useState(Dimensions.get('window').height);
  const [ availableDeviceWidth, setAvailableDeviceWidth ] = useState(Dimensions.get('window').width);


  useEffect(() => {
    const updateDimensions = () => {
      setAvailableDeviceHeight(Dimensions.get('window').height);
      setAvailableDeviceWidth(Dimensions.get('window').width);
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
      <WelcomeScreen windowDimensions={{ height: availableDeviceHeight, width: availableDeviceWidth }}/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
