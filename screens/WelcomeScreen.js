import React from 'react';
import { 
  View, 
  ScrollView,
  Button,
  StyleSheet,
  Dimensions,
  ImageBackground, 
} from 'react-native';


import { 
  BrandText,
  RegularText,
  GradientButton,
  TextButton,
  Logo,
} from '../components';

import VerticalBackground from '../assets/wms-background-vertical.png';
import HorizontalBackground from '../assets/wms-background-horizontal.png';

const WelcomeScreen = ({ windowDimensions }) => {

  console.log('DEVICE TYPE', windowDimensions.deviceType);

  return (
    <ScrollView>
      <View style={styles.screen}>
          <ImageBackground 
            source={windowDimensions.height > 500 ? VerticalBackground : HorizontalBackground}
            resizeMode='cover'
            style={windowDimensions.height > 500 ? 
              {...styles.backgroundVertical, height: windowDimensions.height} : 
              {...styles.backgroundHorizontal, height: windowDimensions.height}}>
            <View>
              <Logo size={windowDimensions.height > 500 ? 72 : 64}/>
              <View style={styles.taglineContainer}>              
                <RegularText style={styles.taglineText}>All your stuff.</RegularText>
                <RegularText style={styles.taglineText}>Sorted.</RegularText>
              </View>
            </View>

            <View style={
              windowDimensions.height > 500 ?
              {width: '100%'} :
              {width: '40%'}
            }>

              <View style={styles.buttonContainer}>
                <GradientButton>Get Started</GradientButton>
              </View>

              <View style={styles.haveAccountContainer}>
                <RegularText style={styles.haveAccountText}>Have an account? </RegularText>
                <TextButton style={styles.haveAccountText}>Sign In</TextButton>
              </View>
            </View>
          </ImageBackground>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundVertical: {
    flex: 1,
    justifyContent: 'center',
    padding: '10%',
  },
  backgroundHorizontal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10%',
  },
  taglineContainer: {
    justifyContent: 'space-around',
  },
  taglineText: {
    fontSize: 24,
    marginVertical: '3%',
  }, 
  buttonContainer: {
    marginVertical: '10%',
  },
  haveAccountContainer: {
    marginVertical: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  haveAccountText: {
    fontSize: 18,
  }
});

export default WelcomeScreen;
