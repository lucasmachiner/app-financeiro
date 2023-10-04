import React from 'react';
import {View} from 'react-native';
import {Logo} from '../logo';
import {ButtonNewTransaction} from '../button';

export const Header = () => {
  return (
    <View style={{position: 'relative', top: 0, marginHorizontal: 16}}>
      <View style={{paddingVertical: 24}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Logo />
          <ButtonNewTransaction
            title="Nova Transação"
            onPress={() => console.log('Apertou em nova transação')}
          />
        </View>
      </View>
    </View>
  );
};
