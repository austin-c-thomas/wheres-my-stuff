import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import { Colors } from '../../constants/Colors';
import RegularText from './RegularText';

const TextButton = ({ children, style }) => {
  return (
    <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
      <RegularText style={{...styles.buttonText, ...style}}>{children}</RegularText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.lightBlue,
  }
});

export default TextButton;