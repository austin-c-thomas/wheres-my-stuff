import React from 'react';
import { View } from 'react-native';
import BrandText from './stylized/BrandText';

const Logo = ({ size }) => {
  return (
    <View>
      <BrandText style={{fontSize: size}}>Where's</BrandText>
      <BrandText style={{fontSize: size}}>My</BrandText>
      <BrandText style={{fontSize: size}}>Sh*t?</BrandText>
    </View>
  );
};

export default Logo;