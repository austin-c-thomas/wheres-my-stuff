import React from 'react';
import { 
  View, 
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground, 
} from 'react-native';


import { 
  RegularText,
  GradientButton,
  TextButton,
  Logo,
} from '../components';

import VerticalBackground from '../assets/wms-background-vertical.png';
import HorizontalBackground from '../assets/wms-background-horizontal.png';

const WelcomeScreen = ({ dimensionsInfo }) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
          <ImageBackground 
            source={dimensionsInfo.orientation === 'portrait' ? VerticalBackground : HorizontalBackground}
            resizeMode='cover'
            style={
              dimensionsInfo.orientation === 'portrait' ?
              {...styles.backgroundVertical, height: dimensionsInfo.height} :
              {...styles.backgroundHorizontal, height: dimensionsInfo.height}}>
            <View>

              <Logo size={dimensionsInfo.orientation === 'portrait' ? dimensionsInfo.width / 6 : dimensionsInfo.width / 14}/>
              <View style={styles.taglineContainer}>              
                <RegularText style={styles.taglineText}>All your stuff.</RegularText>
                <RegularText style={styles.taglineText}>Sorted.</RegularText>
              </View>
            </View>

            <View style={
              dimensionsInfo.orientation === 'portrait' ?
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
    flexDirection: 'column',
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
    fontSize: Dimensions.get('window').width / 40,
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
    fontSize: Dimensions.get('window').width / 60,
  }
});

export default WelcomeScreen;
