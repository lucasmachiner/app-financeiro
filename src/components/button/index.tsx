import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface NewTransactionButtonProps extends TouchableOpacityProps {
  title: string;
}

export const ButtonNewTransaction = (props: NewTransactionButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        borderRadius: 5,
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: "#6933FF",
        elevation: 5
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: '#FFFF',
          fontWeight: '500',
          fontSize: 14,
        }}>
        {props.title ?? 'Titulo'}
      </Text>
    </TouchableOpacity>
  );
};
