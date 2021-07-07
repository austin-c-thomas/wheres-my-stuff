import React from 'react';
import { Text, StyleSheet } from 'react-native';

const RegularText = ({ children, style }) => {
  return <Text style={{...styles.regularText, ...style}}>{children}</Text>
};

const styles = StyleSheet.create({
  regularText: {
    fontFamily: 'Montserrat-Regular',
  },
});

export default RegularText;