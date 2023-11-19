import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {theme} from '../../styles/theme';

export const Input = (props: TextInputProps) => {
  return (
    <TextInput
      style={{
        borderWidth: 0.3,
        borderColor: '#D7D7D7',
        borderRadius: 3,
        backgroundColor: '#E7E9EE',
        padding: 10,
        color: theme.blackFont,
      }}
      {...props}
      placeholderTextColor={theme.grayFont}
    />
  );
};
