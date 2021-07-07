import React from 'react';
import { Text, StyleSheet } from 'react-native';

const LightText = ({ children, style }) => {
  return <Text style={{...styles.lightText, ...style}}>{children}</Text>
};

const styles = StyleSheet.create({
  lightText: {
    fontFamily: 'Montserrat-Light',
  },
});

export default LightText;