import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BoldText = ({ children, style }) => {
  return <Text style={{...styles.boldText, ...style}}>{children}</Text>
};

const styles = StyleSheet.create({
  boldText: {
    fontFamily: 'Montserrat-Bold',
  },
});

export default BoldText;