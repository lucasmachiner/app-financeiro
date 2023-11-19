import React from 'react';
import {View} from 'react-native';
import {Logo} from '../../components/logo';
import {ButtonNewTransaction} from '../../components/button';
import {theme} from '../../styles/theme';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export const Header = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={{height: 200, backgroundColor: theme.purple}}>
      <View style={{position: 'relative', top: 0, marginHorizontal: 16}}>
        <View style={{paddingVertical: 24}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Logo />
            <ButtonNewTransaction
              title="Nova Transação"
              onPress={() => navigation.navigate('NewTransaction')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
