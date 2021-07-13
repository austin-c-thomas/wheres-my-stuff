import React from 'react';
import { View, StyleSheet } from 'react-native';
import BrandText from './stylized/BrandText';

const Logo = () => {
  return (
    <View style={styles.logo}>
      <BrandText style={styles.logoText}>Where's</BrandText>
      <BrandText style={styles.logoText}>My</BrandText>
      <BrandText style={styles.logoText}>Sh*t?</BrandText>
    </View>
  );
};

const styles = StyleSheet.create({
  logoText: {
    fontSize: 72,
  }, 
})

export default Logo;