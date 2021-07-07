import React from 'react';
import { Text, StyleSheet } from 'react-native';

const MediumText = ({ children, style }) => {
  return <Text style={{...styles.mediumText, ...style}}>{children}</Text>
};

const styles = StyleSheet.create({
  mediumText: {
    fontFamily: 'Montserrat-Medium',
  },
});

export default MediumText;