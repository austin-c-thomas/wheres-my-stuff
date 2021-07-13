import React from 'react';
import { 
  View, 
  ScrollView,
  Button,
  StyleSheet,
  Dimensions, 
} from 'react-native';

import { 
  BrandText,
  RegularText,
  GradientButton,
  TextButton,
  Logo,
} from '../components';

const WelcomeScreen = ({ windowDimensions }) => {

  console.log(windowDimensions);
  return (
    <ScrollView>
      <View style={
        windowDimensions.height > 500 ? 
        {...styles.screenVertical, height: windowDimensions.height} : 
        {...styles.screenHorizontal, height: windowDimensions.height}
        }>
        
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
            <TextButton>Sign In</TextButton>
          </View>
        </View>
        

      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  screenVertical: {
    flex: 1,
    justifyContent: 'center',
    padding: '10%',
  },
  screenHorizontal: {
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
  } 

});

export default WelcomeScreen;
