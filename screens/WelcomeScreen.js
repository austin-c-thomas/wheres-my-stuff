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

const WelcomeScreen = ({ devWindow }) => {

  return (
    <ScrollView>
      <View style={{
        ...styles.screen, 
        height: devWindow.height,
        padding: devWindow.width / 10}}>

        <Logo />

        <View style={{
          ...styles.taglineContainer,
          height: devWindow.height / 8,
          paddingVertical: devWindow.height / 48}}>
          <RegularText style={styles.taglineText}>All your stuff.</RegularText>
          <RegularText style={styles.taglineText}>Sorted.</RegularText>
        </View>
        
        <View style={{
          ...styles.buttonContainer,
          paddingVertical: devWindow.height / 48}}>
          <GradientButton>Get Started</GradientButton>
        </View>

        <View style={{
          ...styles.haveAccountContainer,
          paddingVertical: devWindow.height / 48}}>
          <RegularText style={styles.haveAccountText}>Have an account? </RegularText>
          <TextButton>Sign In</TextButton>
        </View>

      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  taglineContainer: {
    justifyContent: 'space-around',
  },
  taglineText: {
    fontSize: 24,
  }, 
  haveAccountContainer: {
    flexDirection: 'row',
  } 
  // tagLineContainer: {
  //   height: 100,
  // },
  
});

export default WelcomeScreen;
