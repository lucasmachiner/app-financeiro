import React from 'react';
import {Text, View} from 'react-native';
import { styles } from './style';

export const Logo = () => {
  return (
    <View style={styles.direction}>
      <Text
        style={styles.icon}>
        $
      </Text>
      <Text
        style={styles.label}>
        Financeiro
      </Text>
    </View>
  );
};
