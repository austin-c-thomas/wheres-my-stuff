import React from 'react';
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';

import { Colors } from '../../constants/Colors';
import RegularText from './RegularText';
import MediumText from './MediumText';

const GradientButton = ({ children }) => {
  let ButtonComponent = TouchableOpacity;
  // if (Platform.OS === 'android' && Platform.Version >= 21) {
  //   ButtonComponent = TouchableNativeFeedback;
  // };

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent onPress={() => {}} activeOpacity={0.8}>
        <LinearGradient 
          colors={['#29ABE2', '#1B1464']}
          start={[0, 1]}
          end={[1, 0]} 
          style={styles.button}>
            <MediumText style={styles.buttonText}>{children}</MediumText>
          </LinearGradient>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 30,
    overflow: 'hidden',
  },
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  }
});

export default GradientButton;