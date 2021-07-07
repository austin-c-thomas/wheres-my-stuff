import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BrandText = ({ children, style }) => {
  return <Text style={{...styles.brandText, ...style}}>{children}</Text>
};

const styles = StyleSheet.create({
  brandText: {
    fontFamily: 'Qualy',
  },
});

export default BrandText;